import { prisma } from "@/lib/prisma";

export default async function Home() {
  const users = await prisma.user.findMany();

  return (
    <main className="p-10">
      <h1>Total User: {users.length}</h1>

      <pre>{JSON.stringify(users, null, 2)}</pre>
    </main>
  );
}
