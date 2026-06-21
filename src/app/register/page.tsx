// src/app/register/page.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function RegisterPage() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(formData: FormData) {
    setError("");
    setLoading(true);

    const res = await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: formData.get("name"),
        email: formData.get("email"),
        password: formData.get("password"),
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      setError(data.error || "Terjadi kesalahan");
      setLoading(false);
      return;
    }

    router.push("/login");
  }

  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Daftar Akun</CardTitle>
          <CardDescription>Buat akun baru untuk mulai</CardDescription>
        </CardHeader>
        <CardContent>
          <form action={handleSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <Label htmlFor="name">Nama</Label>
              <Input id="name" name="name" type="text" required />
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" type="email" required />
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                name="password"
                type="password"
                required
                minLength={6}
              />
            </div>

            {error && <p className="text-sm text-red-500">{error}</p>}

            <Button type="submit" disabled={loading} className="w-full">
              {loading ? "Mendaftar..." : "Daftar"}
            </Button>

            <p className="text-sm text-center text-muted-foreground">
              Sudah punya akun?{" "}
              <a href="/login" className="underline">
                Login
              </a>
            </p>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
