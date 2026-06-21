// app/admin/page.tsx
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function AdminDashboard() {
  const session = await auth();

  if (!session || session.user.role !== "admin") {
    redirect("/login");
  }

  return <h1>Halo Admin {session.user.name}</h1>;
}
