import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";


import { prisma } from "@/db";

export const {
  auth,
  handlers: { GET, POST },
  signIn,
  signOut,
} = NextAuth({
  adapter: PrismaAdapter(prisma),
  session: { strategy: "jwt" },
  providers: [GitHub, Google, Credentials({

  })],
  callbacks: {
    async session({ session, token }) {
      // Attach user ID (from JWT or database) to the session
      if (token && token.sub) {
        session.user.id = token.sub; // This will set the userId in the session
      }
      return session;
    },    async jwt({ token, account }) {
      if (account) {
        token.accessToken = account.access_token;
      }
      return token;
    },
  },
  secret: process.env.AUTH_SECRET
});
