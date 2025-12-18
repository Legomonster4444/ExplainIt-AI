import { supabase } from "../../lib/supabase";

export default async function handler(req, res) {
  const admins = process.env.ADMIN_EMAILS.split(",");

  const email = req.headers["x-user-email"];
  if (!admins.includes(email)) {
    return res.json({ allowed: false });
  }

  const { count: users } = await supabase
    .from("users")
    .select("*", { count: "exact", head: true });

  const today = new Date().toISOString().slice(0, 10);

  const { count: requestsToday } = await supabase
    .from("ai_requests")
    .select("*", { count: "exact", head: true })
    .eq("created_at", today);

  const { count: ads } = await supabase
    .from("ads")
    .select("*", { count: "exact", head: true })
    .eq("active", true);

  res.json({ allowed: true, users, requestsToday, ads });
}
