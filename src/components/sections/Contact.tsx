import { personalInfo } from "@/data/site";

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 py-12">
      <h2 className="text-2xl font-semibold tracking-tight">Contact</h2>
      <div className="mt-4 grid gap-8 md:grid-cols-2">
        <form
          className="rounded-lg border p-4 space-y-3"
          action={`mailto:${personalInfo.email}`}
          method="post"
          encType="text/plain"
        >
          <div>
            <label className="block text-sm mb-1">Name</label>
            <input name="name" required className="w-full rounded-md border px-3 py-2 bg-transparent" />
          </div>
          <div>
            <label className="block text-sm mb-1">Email</label>
            <input type="email" name="email" required className="w-full rounded-md border px-3 py-2 bg-transparent" />
          </div>
          <div>
            <label className="block text-sm mb-1">Message</label>
            <textarea name="message" rows={5} required className="w-full rounded-md border px-3 py-2 bg-transparent" />
          </div>
          <button className="rounded-md bg-black text-white px-4 py-2 text-sm dark:bg-white dark:text-black" type="submit">
            Send
          </button>
        </form>
        <div className="space-y-2 text-sm">
          <div>
            <span className="font-medium">Email:</span> <a className="underline" href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
          </div>
          <div>
            <span className="font-medium">Phone:</span> {personalInfo.phone}
          </div>
          <div>
            <span className="font-medium">Location:</span> {personalInfo.location}
          </div>
          <div className="flex gap-4 pt-2">
            <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="underline">LinkedIn</a>
            <a href={personalInfo.github} target="_blank" rel="noreferrer" className="underline">GitHub</a>
          </div>
        </div>
      </div>
    </section>
  );
}
