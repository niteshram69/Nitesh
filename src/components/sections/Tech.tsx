import { skills } from "@/data/site";

export function Tech() {
  const blocks = [
    { title: "Languages", items: skills.languages },
    { title: "Frameworks", items: skills.frameworks },
    { title: "Databases", items: skills.databases },
    { title: "Tools", items: skills.tools },
    { title: "Cybersecurity", items: skills.cybersecurity },
  ];
  return (
    <section id="tech" className="mx-auto max-w-6xl px-4 py-12">
      <h2 className="text-2xl font-semibold tracking-tight">Tech Stack</h2>
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {blocks.map((b) => (
          <div key={b.title} className="rounded-lg border p-4">
            <h3 className="font-medium">{b.title}</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {b.items.map((i) => (
                <span key={i} className="rounded-full border px-2 py-0.5 text-xs">{i}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
