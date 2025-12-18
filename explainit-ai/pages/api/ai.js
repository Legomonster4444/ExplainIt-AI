import OpenAI from "openai";
import { supabase } from "../../lib/supabase";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

const LIMITS = { free: 5, pro: 50, premium: 999999 };

export default async function handler(req, res) {
  const { input, email } = req.body;
  if (!email || !input) return res.status(400).end();

  const { data: user } = await supabase
    .from("users")
    .select("plan")
    .eq("email", email)
    .single();

  const plan = user?.plan || "free";

  const today = new Date().toISOString().slice(0, 10);
  const { count } = await supabase
    .from("ai_requests")
    .select("*", { count: "exact", head: true })
    .eq("user_email", email)
    .eq("created_at", today);

  if (count >= LIMITS[plan]) {
    return res.status(403).json({ error: "Limit reached" });
  }

  const response = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [{ role: "user", content: input }]
  });

  const output = response.choices[0].message.content;

  await supabase.from("ai_requests").insert({
    user_email: email,
    input,
    output
  });

  res.json({ output, remaining: LIMITS[plan] - count - 1 });
}
