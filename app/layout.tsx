import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vince Amigo | Personal Site",
  description: "The personal site of Vince Amigo, built with Next.js and Tailwind CSS.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="flex min-h-full flex-col bg-slate-950 text-slate-100">
        <header className="sticky top-0 z-10 border-b border-slate-800 bg-slate-950/90 backdrop-blur">
          <nav className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
            <Link href="/" className="text-lg font-bold tracking-tight text-emerald-400">
              VA.
            </Link>
            <div className="flex gap-6 text-sm font-medium">
              <Link href="/" className="text-slate-300 hover:text-emerald-400">
                Home
              </Link>
              <Link href="/about" className="text-slate-300 hover:text-emerald-400">
                About
              </Link>
              <Link href="/projects" className="text-slate-300 hover:text-emerald-400">
                Projects
              </Link>
            </div>
          </nav>
        </header>

        <div className="flex-1">{children}</div>

        <footer className="border-t border-slate-800 px-6 py-6 text-center text-sm text-slate-500">
          &copy; 2026 Vince Amigo. Built with Next.js.
        </footer>
      </body>
    </html>
  );
}
