import Link from "next/link";
export default function ProjectsPage() {
return (
<main className="p-8">
<h1 className="text-3xl font-bold">
PROJECTS PAGE
</h1>
<p className="mt-2">
Gym System, School Projects
</p>
<Link href="/projects" className="mt-4 inline-block underline">
        See my projects
      </Link>

</main>

);
}   