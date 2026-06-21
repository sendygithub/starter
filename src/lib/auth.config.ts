// auth.config.ts
import type { NextAuthConfig } from "next-auth";

export const authConfig = {
  pages: {
    signIn: "/login",
  },
  callbacks: {
    authorized({ auth, request }) {
      const isLoggedIn = !!auth?.user;
      const role = auth?.user?.role;
      const { pathname } = request.nextUrl;

      const isAdminRoute = pathname.startsWith("/admin");
      const isUserDashboard = pathname.startsWith("/dashboard");

      if (isAdminRoute) {
        return isLoggedIn && role === "admin";
      }
      if (isUserDashboard) {
        return isLoggedIn;
      }
      return true; // halaman lain bebas
    },
  },
  providers: [], // diisi di auth.ts
} satisfies NextAuthConfig;
