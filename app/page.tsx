import Link from "next/link";

export default function Home() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-20">
      <p className="text-sm font-semibold uppercase tracking-widest text-emerald-400">
        Welcome to my site
      </p>
      <h1 className="mt-4 text-5xl font-extrabold leading-tight sm:text-6xl">
        Hi, I&apos;m Vince Amigo.
      </h1>
      <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300">
        I&apos;m a student who enjoys building websites and small systems. This
        site is my first Next.js project, and it shows a bit about me and the
        things I&apos;ve made.
      </p>
      <div className="mt-10 flex flex-wrap gap-4">
        <Link
          href="/projects"
          className="rounded-lg bg-emerald-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-emerald-400"
        >
          See my projects
        </Link>
        <Link
          href="/about"
          className="rounded-lg border border-slate-700 px-6 py-3 font-semibold text-slate-200 transition hover:border-emerald-400 hover:text-emerald-400"
        >
          About me
        </Link>
      </div>
    </main>
  );
}
