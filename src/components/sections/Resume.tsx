"use client";

import { useEffect, useState } from "react";
import { certificates, education, experience, personalInfo } from "@/data/site";
import clsx from "clsx";

type TabKey = "overview" | "experience" | "education" | "certificates" | "preview";

export function Resume() {
  const [pdfAvailable, setPdfAvailable] = useState<boolean | null>(null);
  const [active, setActive] = useState<TabKey>("overview");

  useEffect(() => {
    let cancelled = false;
    fetch(personalInfo.resumeUrl, { method: "GET", cache: "no-store" })
      .then((res) => {
        if (cancelled) return;
        const contentType = res.headers.get("content-type") || "";
        const okPdf = res.ok && contentType.toLowerCase().includes("pdf");
        setPdfAvailable(okPdf);
      })
      .catch(() => {
        if (!cancelled) setPdfAvailable(false);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const tabs: { key: TabKey; label: string }[] = [
    { key: "overview", label: "Overview" },
    { key: "experience", label: "Experience" },
    { key: "education", label: "Education" },
    { key: "certificates", label: "Certificates" },
    { key: "preview", label: "PDF Preview" },
  ];

  return (
    <section id="resume" className="mx-auto max-w-6xl px-4 py-12">
      <div className="flex items-center justify-between gap-3">
        <h2 className="text-2xl font-semibold tracking-tight">Resume</h2>
        <div className="flex gap-3">
          <a href={personalInfo.resumeUrl} download className="rounded-md bg-black text-white px-4 py-2 text-sm dark:bg-white dark:text-black">Download</a>
          <a href={`mailto:${personalInfo.email}`} className="rounded-md border px-4 py-2 text-sm">Contact</a>
        </div>
      </div>

      <div className="mt-6 overflow-x-auto">
        <div className="inline-flex rounded-full border p-1 bg-black/5 dark:bg-white/5">
          {tabs.map((t) => (
            <button
              key={t.key}
              onClick={() => setActive(t.key)}
              className={clsx(
                "px-3 py-1.5 text-xs rounded-full transition",
                active === t.key ? "bg-white text-black dark:bg-white dark:text-black" : "text-white/80"
              )}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-6 rounded-lg border p-4">
        {active === "overview" && (
          <div className="space-y-2 text-sm text-black/80 dark:text-white/80">
            <p>{personalInfo.summary}</p>
            <p>
              Location: {personalInfo.location} • Email: {personalInfo.email} • Phone: {personalInfo.phone}
            </p>
            <p>
              Links: <a className="underline" href={personalInfo.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
              {" · "}
              <a className="underline" href={personalInfo.github} target="_blank" rel="noreferrer">GitHub</a>
            </p>
          </div>
        )}

        {active === "experience" && (
          <div className="space-y-4">
            {experience.map((x) => (
              <div key={x.title} className="rounded-md border p-3">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="font-medium">{x.title} — {x.org}</div>
                  <div className="text-xs text-black/60 dark:text-white/60">{x.period}</div>
                </div>
                <ul className="mt-2 list-disc pl-5 text-sm space-y-1">
                  {x.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}

        {active === "education" && (
          <div className="space-y-3">
            {education.map((e) => (
              <div key={e.degree} className="rounded-md border p-3">
                <div className="font-medium">{e.degree}</div>
                <div className="text-sm text-black/70 dark:text-white/70">{e.institution}</div>
                <div className="text-xs text-black/60 dark:text-white/60">{e.cgpa}</div>
              </div>
            ))}
          </div>
        )}

        {active === "certificates" && (
          <div className="flex flex-wrap gap-2">
            {certificates.length === 0 && (
              <p className="text-sm text-black/70 dark:text-white/70">Add certificates in data to display here.</p>
            )}
            {certificates.map((c) => (
              <a key={c.title} href={c.link} target="_blank" rel="noreferrer" className="rounded-full border px-3 py-1 text-xs hover:bg-black/5 dark:hover:bg-white/10">
                {c.title}
              </a>
            ))}
          </div>
        )}

        {active === "preview" && (
          <div className="text-sm text-black/70 dark:text-white/70">
            {pdfAvailable === null && <p>Checking for resume file…</p>}
            {pdfAvailable === false && (
              <div>
                <p className="mb-2">Resume preview unavailable.</p>
                <p>
                  Add your PDF at <code className="px-1 py-0.5 rounded bg-white/10 dark:bg-white/10">public/resume.pdf</code> to enable the embedded preview.
                </p>
              </div>
            )}
            {pdfAvailable && (
              <div className="mt-2 w-full">
                <div className="mb-4 flex gap-2">
                  <a 
                    href={personalInfo.resumeUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-4 py-2 text-sm text-white hover:bg-blue-700"
                  >
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Open PDF in New Tab
                  </a>
                  <a 
                    href={personalInfo.resumeUrl} 
                    download
                    className="inline-flex items-center gap-2 rounded-md border border-gray-300 px-4 py-2 text-sm hover:bg-gray-50 dark:border-gray-600 dark:hover:bg-gray-800"
                  >
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Download PDF
                  </a>
                </div>
                <div className="aspect-[4/3] w-full rounded-lg border bg-gray-50 dark:bg-gray-900">
                  <object
                    data={personalInfo.resumeUrl}
                    type="application/pdf"
                    className="h-full w-full rounded-lg"
                  >
                    <div className="flex h-full items-center justify-center">
                      <div className="text-center">
                        <p className="mb-2">PDF preview not supported in this browser.</p>
                        <a 
                          href={personalInfo.resumeUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-blue-600 underline hover:text-blue-800 dark:text-blue-400"
                        >
                          Click here to view the PDF
                        </a>
                      </div>
                    </div>
                  </object>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
