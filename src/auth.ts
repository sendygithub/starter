// auth.ts
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { authConfig } from "./lib/auth.config";
import { getUserByEmail } from "@/lib/db";
import { Role } from "@/generated/client";

export const { handlers, auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        const user = await getUserByEmail(credentials.email as string);
        if (!user) return null;

        const valid = await bcrypt.compare(
          credentials.password as string,
          user.password,
        );
        if (!valid) return null;

        // ini yg nanti disimpan di token/session
        return {
          id: user.id,
          name: user.name,
          email: user.email,
          role: user.role, // "admin" atau "user", dari kolom di tabel users
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) token.role = user.role; // nempelin role ke token pas login
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.role = token.role as Role; // import Role juga di auth.ts
      }
      return session;
    },
  },
});
