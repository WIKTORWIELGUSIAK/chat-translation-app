import { NextAuthOptions } from "next-auth";
import GooGleProvider from "next-auth/providers/google";
export const authOptions: NextAuthOptions = {
  providers: [
    GooGleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
};
