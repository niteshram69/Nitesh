import { projects } from "@/data/site";

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-4 py-12">
      <h2 className="text-2xl font-semibold tracking-tight">Projects</h2>
      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        {projects.map((p) => (
          <article key={p.title} className="rounded-lg border p-4 flex flex-col">
            <h3 className="font-semibold text-lg">{p.title}</h3>
            <p className="mt-1 text-sm text-black/70 dark:text-white/70">{p.description}</p>
            <ul className="mt-3 text-sm list-disc pl-5 space-y-1">
              {p.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
            <div className="mt-3 flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <span key={t} className="rounded-full border px-2 py-0.5 text-xs">{t}</span>
              ))}
            </div>
            <div className="mt-4 flex gap-3">
              {p.links.live && (
                <a href={p.links.live} className="text-sm underline" target="_blank" rel="noreferrer">Live Demo</a>
              )}
              {p.links.github && (
                <a href={p.links.github} className="text-sm underline" target="_blank" rel="noreferrer">GitHub</a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
