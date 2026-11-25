export const metadata = { title: "Projects | Vince Amigo" };

const projects = [
  {
    id: 1,
    name: "Vince Activity Tracker",
    description: "A web app for saving school projects with their subject, deadline and proof.",
    tag: "Web App",
  },
  {
    id: 2,
    name: "Student Task and Deadline Tracker",
    description: "A Laravel app with CRUD, validation and related tables for tracking tasks.",
    tag: "Laravel",
  },
  {
    id: 3,
    name: "Personal Site",
    description: "This three-page site built with Next.js, Tailwind CSS and Git.",
    tag: "Next.js",
  },
];

export default function ProjectsPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="text-4xl font-extrabold">Projects</h1>
      <p className="mt-3 text-slate-400">A few things I&apos;ve built or am building.</p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.id}
            className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition hover:border-emerald-400"
          >
            <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-400">
              {project.tag}
            </span>
            <h2 className="mt-4 text-xl font-bold">{project.name}</h2>
            <p className="mt-2 text-slate-400">{project.description}</p>
          </article>
        ))}
      </div>
    </main>
  );
}
