import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tasko - Simple Task Management",
  description: "Organize your week, track your projects, and get things done. Simple and powerful task management for individuals and teams.",
  keywords: ["task management", "productivity", "todo", "projects", "organization"],
  authors: [{ name: "Tasko" }],
  openGraph: {
    title: "Tasko - Simple Task Management",
    description: "Organize your week, track your projects, and get things done.",
    type: "website",
    locale: "en_US",
    alternateLocale: "es_ES",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tasko - Simple Task Management",
    description: "Organize your week, track your projects, and get things done.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
