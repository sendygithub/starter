import { DefaultSession } from "next-auth";
import { Role } from "@/generated/client"; // sesuaikan path generated client kamu

declare module "next-auth" {
  interface Session {
    user: {
      role: Role;
    } & DefaultSession["user"];
  }
  interface User {
    role: Role;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    role: Role;
  }
}

declare module "next-auth/adapters" {
  interface AdapterUser {
    role: Role;
  }
}
