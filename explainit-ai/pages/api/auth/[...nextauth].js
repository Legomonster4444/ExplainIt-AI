import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { supabase } from "../../../lib/supabase";

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    })
  ],
  callbacks: {
    async signIn({ user }) {
      const { email } = user;

      const { data } = await supabase
        .from("users")
        .select("email")
        .eq("email", email)
        .single();

      if (!data) {
        await supabase.from("users").insert({ email });
      }

      return true;
    }
  },
  secret: process.env.NEXTAUTH_SECRET
});
