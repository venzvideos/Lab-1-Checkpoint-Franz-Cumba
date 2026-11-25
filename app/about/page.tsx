const skills = ["HTML & CSS", "JavaScript", "React", "Next.js", "Tailwind CSS", "Git & GitHub"];

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="text-4xl font-extrabold">About</h1>
      <div className="mt-8 flex flex-col gap-8 sm:flex-row sm:items-start">
        <div className="flex h-28 w-28 shrink-0 items-center justify-center rounded-2xl bg-emerald-500 text-4xl font-black text-slate-950">
          VA
        </div>
        <div>
          <p className="text-lg leading-relaxed text-slate-300">
            My name is Vince Amigo. I&apos;m a student learning web development,
            and I like turning ideas into working apps.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-slate-300">
            Right now I&apos;m practicing Next.js and Git, and I want to keep
            building projects that solve real problems.
          </p>
        </div>
      </div>

      <h2 className="mt-12 text-2xl font-bold">What I&apos;m learning</h2>
      <ul className="mt-4 flex flex-wrap gap-3">
        {skills.map((skill) => (
          <li
            key={skill}
            className="rounded-full border border-slate-700 bg-slate-900 px-4 py-1.5 text-sm text-slate-200"
          >
            {skill}
          </li>
        ))}
      </ul>
    </main>
  );
}
