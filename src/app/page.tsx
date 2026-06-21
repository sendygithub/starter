// src/app/stack/page.tsx
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

type StackItem = {
  name: string;
  version: string;
  category: string;
  install: string;
  usage?: string; // command CLI tambahan kalau ada
};

const stack: StackItem[] = [
  {
    name: "Next.js",
    version: "16.2.9",
    category: "Framework",
    install: "pnpm add next@16.2.9",
  },
  {
    name: "React",
    version: "19.2.4",
    category: "Framework",
    install: "pnpm add react@19.2.4",
  },
  {
    name: "React DOM",
    version: "19.2.4",
    category: "Framework",
    install: "pnpm add react-dom@19.2.4",
  },
  {
    name: "TypeScript",
    version: "^5",
    category: "Framework",
    install: "pnpm add -D typescript@^5",
  },

  {
    name: "NextAuth.js (Auth.js v5)",
    version: "5.0.0-beta.29",
    category: "Auth & Database",
    install: "pnpm add next-auth@5.0.0-beta.29",
  },
  {
    name: "Prisma Client",
    version: "6.16.2",
    category: "Auth & Database",
    install: "pnpm add @prisma/client@6.16.2",
    usage: "npx prisma generate",
  },
  {
    name: "Prisma CLI",
    version: "6.16.2",
    category: "Auth & Database",
    install: "pnpm add -D prisma@6.16.2",
    usage: "npx prisma migrate dev",
  },
  {
    name: "bcryptjs",
    version: "^3.0.3",
    category: "Auth & Database",
    install: "pnpm add bcryptjs@^3.0.3",
  },

  {
    name: "Tailwind CSS",
    version: "^4",
    category: "UI & Styling",
    install: "pnpm add -D tailwindcss@^4",
  },
  {
    name: "shadcn/ui",
    version: "^4.11.0",
    category: "UI & Styling",
    install: "pnpm add shadcn@^4.11.0",
    usage: "npx shadcn@latest add <komponen>",
  },
  {
    name: "@base-ui/react",
    version: "^1.6.0",
    category: "UI & Styling",
    install: "pnpm add @base-ui/react@^1.6.0",
  },
  {
    name: "lucide-react",
    version: "^1.21.0",
    category: "UI & Styling",
    install: "pnpm add lucide-react@^1.21.0",
  },
  {
    name: "class-variance-authority",
    version: "^0.7.1",
    category: "UI & Styling",
    install: "pnpm add class-variance-authority@^0.7.1",
  },
  {
    name: "tailwind-merge",
    version: "^3.6.0",
    category: "UI & Styling",
    install: "pnpm add tailwind-merge@^3.6.0",
  },
  {
    name: "tw-animate-css",
    version: "^1.4.0",
    category: "UI & Styling",
    install: "pnpm add tw-animate-css@^1.4.0",
  },
  {
    name: "next-themes",
    version: "^0.4.6",
    category: "UI & Styling",
    install: "pnpm add next-themes@^0.4.6",
  },
  {
    name: "sonner",
    version: "^2.0.7",
    category: "UI & Styling",
    install: "pnpm add sonner@^2.0.7",
  },

  {
    name: "ESLint",
    version: "^9",
    category: "Dev Tools",
    install: "pnpm add -D eslint@^9",
  },
  {
    name: "eslint-config-next",
    version: "16.2.9",
    category: "Dev Tools",
    install: "pnpm add -D eslint-config-next@16.2.9",
  },
  {
    name: "@types/node",
    version: "^20",
    category: "Dev Tools",
    install: "pnpm add -D @types/node@^20",
  },
  {
    name: "@types/react",
    version: "^19",
    category: "Dev Tools",
    install: "pnpm add -D @types/react@^19",
  },
  {
    name: "@types/react-dom",
    version: "^19",
    category: "Dev Tools",
    install: "pnpm add -D @types/react-dom@^19",
  },
];

const categoryColor: Record<string, string> = {
  Framework: "bg-blue-100 text-blue-700",
  "Auth & Database": "bg-purple-100 text-purple-700",
  "UI & Styling": "bg-green-100 text-green-700",
  "Dev Tools": "bg-orange-100 text-orange-700",
};

export default function StackPage() {
  return (
    <div className="min-h-screen px-4 py-12 max-w-5xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Tech Stack</h1>
        <p className="text-muted-foreground mt-1">
          Daftar library dan tools yang dipakai di project ini
        </p>
      </div>

      <div className="rounded-lg border overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Nama</TableHead>
              <TableHead>Kategori</TableHead>
              <TableHead>Versi</TableHead>
              <TableHead>Setup</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {stack.map((item) => (
              <TableRow key={item.name}>
                <TableCell className="font-medium whitespace-nowrap align-top">
                  {item.name}
                </TableCell>
                <TableCell className="align-top">
                  <Badge
                    variant="secondary"
                    className={categoryColor[item.category]}
                  >
                    {item.category}
                  </Badge>
                </TableCell>
                <TableCell className="text-muted-foreground whitespace-nowrap align-top">
                  {item.version}
                </TableCell>
                <TableCell className="align-top">
                  <div className="flex flex-col gap-1">
                    <code className="text-xs bg-muted px-2 py-1 rounded whitespace-nowrap w-fit">
                      {item.install}
                    </code>
                    {item.usage && (
                      <code className="text-xs text-muted-foreground italic px-2 whitespace-nowrap w-fit">
                        cara pakai: {item.usage}
                      </code>
                    )}
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
