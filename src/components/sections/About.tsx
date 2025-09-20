import { education, personalInfo, skills } from "@/data/site";

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-12">
      <h2 className="text-2xl font-semibold tracking-tight">About Me</h2>
      <div className="mt-4 grid gap-8 md:grid-cols-2">
        <div className="space-y-3">
          <p>
            {personalInfo.summary}
          </p>
          <ul className="text-sm text-black/70 dark:text-white/70 list-disc pl-5">
            <li>AI-powered chat agent with memory (Nr_ChatSupport)</li>
            <li>LinkedIn automation tooling</li>
            <li>Cybersecurity focus: OWASP Top 10, secure coding</li>
          </ul>
        </div>
        <div>
          <div className="rounded-lg border p-4">
            <h3 className="font-medium">Education</h3>
            <ul className="mt-2 text-sm space-y-1">
              {education.map((e) => (
                <li key={e.degree}>
                  <div>{e.degree}</div>
                  <div className="text-black/60 dark:text-white/60">{e.institution} • {e.cgpa}</div>
                </li>
              ))}
            </ul>
            <h3 className="mt-4 font-medium">Languages spoken</h3>
            <ul className="mt-2 text-sm flex flex-wrap gap-2">
              {skills.languagesSpoken.map((l) => (
                <li key={l.name} className="rounded-full border px-2 py-0.5 text-xs">{l.name} ({l.level})</li>
              ))}
            </ul>
            <h3 className="mt-4 font-medium">Soft skills</h3>
            <ul className="mt-2 text-sm flex flex-wrap gap-2">
              {skills.softSkills.map((s) => (
                <li key={s} className="rounded-full border px-2 py-0.5 text-xs">{s}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
