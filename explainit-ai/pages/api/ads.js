import { supabase } from "../../lib/supabase";

export default async function handler(req, res) {
  const { text } = req.body;

  const { data } = await supabase
    .from("ads")
    .select("*")
    .eq("active", true);

  const match = data.find(ad =>
    ad.keywords.some(k => text.toLowerCase().includes(k))
  );

  res.json(match || null);
}
