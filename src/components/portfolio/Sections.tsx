import { useState, type FormEvent } from "react";
import {
  ArrowRight,
  Award,
  Brain,
  Briefcase,
  Code2,
  Github,
  Languages as LanguagesIcon,

  Cpu,
  Database,
  GraduationCap,
  Layers,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Sparkles,
  Wrench,
} from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";
import {
  aboutHighlights,
  certifications,
  education,
  expertise,
  heroTechLabels,
  internships,
  languages,
  profile,
  projects,
  services,
  skillGroups,
} from "./data";


function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-border bg-surface-2/70 px-3 py-1 text-xs font-medium text-muted-foreground">
      {children}
    </span>
  );
}

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="grid-backdrop pointer-events-none absolute inset-0 opacity-70" />
      <div className="pointer-events-none absolute -top-24 -left-24 h-80 w-80 animate-drift rounded-full bg-primary/15 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 top-32 h-72 w-72 animate-drift rounded-full bg-violet/15 blur-3xl" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-background" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-[1.15fr_0.85fr] lg:px-8">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface-2/60 px-3.5 py-1.5 text-xs font-medium tracking-wide text-primary">
            <Sparkles size={14} /> {profile.tagline}
          </span>
          <h1 className="mt-5 text-4xl font-extrabold leading-[1.08] sm:text-5xl lg:text-6xl">
            {profile.name}
          </h1>
          <p className="mt-3 text-lg font-semibold text-gradient sm:text-xl">{profile.role}</p>
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            {profile.intro}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-transform duration-200 hover:-translate-y-0.5 hover:opacity-95"
            >
              View Projects <ArrowRight size={16} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-surface-2/60 px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary/50"
            >
              Contact Me
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            {[
              { icon: Linkedin, href: profile.linkedin, label: "LinkedIn" },
              { icon: Mail, href: `mailto:${profile.email}`, label: "Email" },
              { icon: Phone, href: `tel:${profile.phone}`, label: "Phone" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={label === "LinkedIn" ? "_blank" : undefined}
                rel="noreferrer"
                aria-label={label}
                className="grid h-11 w-11 place-items-center rounded-xl border border-border bg-surface-2/60 text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-primary/50 hover:text-primary"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="relative mx-auto w-full max-w-xs sm:max-w-sm">
            <div className="absolute inset-0 -m-6 rounded-full bg-gradient-to-tr from-primary/25 to-violet/20 blur-2xl" />
            <div className="relative animate-float-slow rounded-full border border-primary/30 p-2">
              <div className="grid aspect-square place-items-center rounded-full border border-border bg-surface text-6xl font-extrabold tracking-tight text-gradient sm:text-7xl">
                MG
              </div>
            </div>
            <div className="mt-5 flex flex-wrap justify-center gap-2">
              {heroTechLabels.map((label) => (
                <span
                  key={label}
                  className="rounded-full border border-border bg-surface-2/70 px-3 py-1 text-xs font-medium text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
                >
                  {label}
                </span>
              ))}
            </div>
            <p className="mt-4 flex items-center justify-center gap-2 text-center text-xs text-muted-foreground">
              <span className="h-2 w-2 rounded-full bg-primary" />
              {profile.status}
            </p>
          </div>
        </Reveal>

      </div>
    </section>
  );
}

export function About() {
  return (
    <section id="about" className="section-pad">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="About"
          title="A student focused on building real things"
          description="Motivated CSE undergraduate combining coursework with internships, certifications and hands-on projects."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            {
              icon: GraduationCap,
              title: "Academic journey",
              body: "Currently pursuing a B.Tech in Computer Science & Engineering at Adamas University, from 2023 through an expected graduation in 2027.",
            },
            {
              icon: Code2,
              title: "Technology & building",
              body: "Comfortable with C, C++, Python and SQL, and steadily expanding into web development, AI and applied machine learning through projects.",
            },
            {
              icon: Briefcase,
              title: "Hands-on experience",
              body: "Internships across a national institute, a central ministry, a university and an industrial refinery have shown me how technical work happens in practice.",
            },
          ].map((item, i) => (
            <Reveal key={item.title} delay={i * 90}>
              <article className="glass-card h-full p-6">
                <span className="grid h-11 w-11 place-items-center rounded-xl border border-border bg-surface-2 text-primary">
                  <item.icon size={19} />
                </span>
                <h3 className="mt-4 text-lg font-bold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal delay={120}>
          <p className="glass-card mt-6 p-6 text-sm leading-relaxed text-muted-foreground sm:text-base">
            My aim is to keep learning quickly, contribute to teams that build meaningful software, and apply
            what I study to real-world problems — whether that is an academic support platform, an assistive
            translation device or better data for speech systems.
          </p>
        </Reveal>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {aboutHighlights.map((h, i) => (
            <Reveal key={h.value} delay={i * 70}>
              <div className="glass-card h-full p-5 text-center">
                <p className="text-base font-extrabold text-gradient">{h.value}</p>
                <p className="mt-1 text-xs text-muted-foreground">{h.label}</p>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}

export function Education() {
  return (
    <section id="education" className="section-pad bg-surface/40">
      <div className="mx-auto max-w-4xl px-5 lg:px-8">
        <SectionHeading eyebrow="Education" title="Academic background" />
        <div className="relative mt-12 pl-8">
          <span className="absolute left-2.5 top-2 bottom-2 w-px bg-gradient-to-b from-primary/60 via-violet/40 to-transparent" />
          {education.map((item, i) => (
            <Reveal key={item.degree} delay={i * 100}>
              <div className="relative mb-6 last:mb-0">
                <span className="absolute -left-[1.6rem] top-6 grid h-5 w-5 place-items-center rounded-full border border-primary/50 bg-background">
                  <span className="h-2 w-2 rounded-full bg-primary" />
                </span>
                <article className="glass-card p-6">
                  <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4 sm:flex sm:justify-between">
                    <div className="min-w-0">
                      <h3 className="text-lg font-bold">{item.degree}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{item.school}</p>
                    </div>
                    <span className="shrink-0 rounded-full border border-border bg-surface-2/70 px-3 py-1 text-xs font-medium text-primary">
                      {item.period}
                    </span>
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground">{item.note}</p>
                </article>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Experience() {
  return (
    <section id="experience" className="section-pad">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Internships"
          title="Internships & experience"
          description="All roles below are internships completed or undertaken as part of my studies."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {internships.map((job, i) => (
            <Reveal key={job.org} delay={i * 80}>
              <article className="glass-card flex h-full flex-col p-6">
                <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-3">
                  <div className="min-w-0">
                    <h3 className="text-base font-bold sm:text-lg">{job.org}</h3>
                    <p className="mt-1 text-sm font-medium text-primary">{job.role} · Internship</p>
                  </div>
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-border bg-surface-2 text-primary">
                    <Briefcase size={17} />
                  </span>
                </div>
                <p className="mt-2 text-xs text-muted-foreground">{job.period}</p>
                <ul className="mt-4 space-y-2">
                  {job.responsibilities.map((r) => (
                    <li key={r} className="flex gap-2 text-sm leading-relaxed text-muted-foreground">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/70" />
                      {r}
                    </li>
                  ))}
                </ul>
                <div className="mt-4 flex flex-wrap gap-2">
                  {job.tech.map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </div>
                <p className="mt-4 rounded-xl border border-border bg-surface-2/50 p-3 text-sm text-muted-foreground">
                  {job.outcome}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const skillIcons = [Code2, Layers, Brain, Cpu, Database, Wrench, Sparkles];

export function Skills() {
  return (
    <section id="skills" className="section-pad bg-surface/40">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <SectionHeading eyebrow="Skills" title="Technical & professional skills" />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => {
            const Icon = skillIcons[i % skillIcons.length] ?? Code2;
            return (
              <Reveal key={group.title} delay={i * 70}>
                <article className="glass-card h-full p-6">
                  <div className="flex items-center gap-3">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-border bg-surface-2 text-primary">
                      <Icon size={17} />
                    </span>
                    <h3 className="truncate text-base font-bold">{group.title}</h3>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <Tag key={item}>{item}</Tag>
                    ))}
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function Projects() {
  return (
    <section id="projects" className="section-pad">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Projects"
          title="Things I have built"
          description="Academic and personal projects where I applied programming, AI and problem-solving."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 80}>
              <article className="glass-card group flex h-full flex-col overflow-hidden">
                <div className="grid-backdrop relative h-36 border-b border-border bg-gradient-to-br from-primary/15 via-transparent to-violet/15">
                  <div className="absolute inset-0 grid place-items-center">
                    <span className="text-2xl font-extrabold tracking-tight text-gradient transition-transform duration-500 group-hover:scale-105">
                      {p.title}
                    </span>
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-sm font-medium text-primary">{p.subtitle}</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.overview}</p>

                  <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-foreground/80">
                    Problem it solves
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{p.problem}</p>

                  <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-foreground/80">
                    Key features
                  </p>
                  <ul className="mt-1 space-y-1.5">
                    {p.features.map((f) => (
                      <li key={f} className="flex gap-2 text-sm text-muted-foreground">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-violet/80" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-foreground/80">
                    My contribution
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{p.contribution}</p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {p.tech.map((t) => (
                      <Tag key={t}>{t}</Tag>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Certifications() {
  return (
    <section id="certifications" className="section-pad bg-surface/40">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <SectionHeading eyebrow="Certifications" title="Courses & credentials" />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((c, i) => (
            <Reveal key={c.name} delay={i * 70}>
              <article className="glass-card h-full p-6">
                <div className="flex items-start gap-3">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-border bg-surface-2 text-primary">
                    <Award size={17} />
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-base font-bold leading-snug">{c.name}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{c.issuer}</p>
                  </div>
                </div>
                <p className="mt-4 text-sm text-muted-foreground">{c.topic}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Expertise() {
  return (
    <section className="section-pad">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <SectionHeading eyebrow="Focus areas" title="What I work on" />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {expertise.map((e, i) => (
            <Reveal key={e.title} delay={i * 60}>
              <article className="glass-card h-full p-6">
                <h3 className="text-base font-bold">{e.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{e.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const serviceIcons = [Layers, Code2, Brain, Cpu, Sparkles, Wrench];

export function Services() {
  return (
    <section id="services" className="section-pad bg-surface/40">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Services"
          title="What I can do"
          description="Technical capabilities I can contribute to internships, teams and student projects."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const Icon = serviceIcons[i % serviceIcons.length] ?? Code2;
            return (
              <Reveal key={s.title} delay={i * 70}>
                <article className="glass-card h-full p-6">
                  <span className="grid h-11 w-11 place-items-center rounded-xl border border-border bg-surface-2 text-primary">
                    <Icon size={18} />
                  </span>
                  <h3 className="mt-4 text-base font-bold">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function Languages() {
  return (
    <section className="pb-4">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <SectionHeading eyebrow="Languages" title="Languages I speak" />
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          {languages.map((l, i) => (
            <Reveal key={l} delay={i * 80}>
              <span className="glass-card inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold">
                <LanguagesIcon size={16} className="text-primary" />
                {l}
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CallToAction() {
  return (
    <section className="section-pad">
      <div className="mx-auto max-w-4xl px-5 lg:px-8">
        <Reveal>
          <div className="glass-card grid-backdrop relative overflow-hidden p-10 text-center">
            <div className="pointer-events-none absolute -top-16 left-1/2 h-52 w-52 -translate-x-1/2 rounded-full bg-primary/20 blur-3xl" />
            <h2 className="relative text-2xl font-extrabold sm:text-3xl">
              Let's build something <span className="text-gradient">innovative</span> together.
            </h2>
            <a
              href="#contact"
              className="relative mt-6 inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform duration-200 hover:-translate-y-0.5"
            >
              Contact Me <ArrowRight size={16} />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}


export function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const subject = encodeURIComponent(String(form.get("subject") ?? "Portfolio enquiry"));
    const body = encodeURIComponent(
      `Name: ${form.get("name")}\nEmail: ${form.get("email")}\n\n${form.get("message")}`,
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  const inputClass =
    "w-full rounded-xl border border-border bg-surface-2/50 px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary/60";

  return (
    <section id="contact" className="section-pad bg-surface/40">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Contact"
          title="Let's connect"
          description="Open to internships, placements and collaboration on student projects."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <div className="glass-card h-full p-6">
              <h3 className="text-lg font-bold">Contact details</h3>
              <ul className="mt-5 space-y-4">
                {[
                  { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
                  { icon: Phone, label: "Phone", value: profile.phone, href: `tel:${profile.phone}` },
                  { icon: Linkedin, label: "LinkedIn", value: "monmon-ghosh", href: profile.linkedin },
                  {
                    icon: Github,
                    label: "GitHub",
                    value: profile.github || "Add your GitHub link",
                    href: profile.github || "#contact",
                  },

                ].map(({ icon: Icon, label, value, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target={label === "LinkedIn" ? "_blank" : undefined}
                      rel="noreferrer"
                      className="flex items-center gap-3 rounded-xl border border-border bg-surface-2/40 p-3 transition-colors hover:border-primary/50"
                    >
                      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-surface-2 text-primary">
                        <Icon size={17} />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-xs text-muted-foreground">{label}</span>
                        <span className="block truncate text-sm font-medium">{value}</span>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
              <p className="mt-5 flex items-center gap-2 text-xs text-muted-foreground">
                <MapPin size={14} /> Adamas University, West Bengal, India
              </p>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <form onSubmit={handleSubmit} className="glass-card h-full p-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-xs font-medium text-muted-foreground">
                    Name
                  </label>
                  <input id="name" name="name" required placeholder="Your name" className={inputClass} />
                </div>
                <div>
                  <label htmlFor="email" className="mb-1.5 block text-xs font-medium text-muted-foreground">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    className={inputClass}
                  />
                </div>
              </div>
              <div className="mt-4">
                <label htmlFor="subject" className="mb-1.5 block text-xs font-medium text-muted-foreground">
                  Subject
                </label>
                <input id="subject" name="subject" required placeholder="Subject" className={inputClass} />
              </div>
              <div className="mt-4">
                <label htmlFor="message" className="mb-1.5 block text-xs font-medium text-muted-foreground">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  placeholder="Write your message..."
                  className={`${inputClass} resize-y`}
                />
              </div>
              <button
                type="submit"
                className="mt-5 inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-transform duration-200 hover:-translate-y-0.5 hover:opacity-95"
              >
                Send Message <Send size={15} />
              </button>
              {sent ? (
                <p className="mt-3 text-xs text-primary">
                  Your email app should now open with the message ready to send.
                </p>
              ) : null}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto grid max-w-6xl gap-6 px-5 text-center sm:flex sm:items-center sm:justify-between sm:text-left lg:px-8">
        <div>
          <p className="text-base font-bold">{profile.name}</p>
          <p className="mt-1 text-sm text-muted-foreground">{profile.role}</p>
        </div>
        <ul className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
          {[
            { label: "Home", href: "#home" },
            { label: "About", href: "#about" },
            { label: "Projects", href: "#projects" },
            { label: "Contact", href: "#contact" },
          ].map((l) => (
            <li key={l.href}>
              <a href={l.href} className="transition-colors hover:text-primary">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex justify-center gap-3">
          {[
            { icon: Linkedin, href: profile.linkedin, label: "LinkedIn" },
            { icon: Mail, href: `mailto:${profile.email}`, label: "Email" },
            { icon: Phone, href: `tel:${profile.phone}`, label: "Phone" },
            { icon: Github, href: profile.github || "#contact", label: "GitHub" },
          ].map(({ icon: Icon, href, label }) => (

            <a
              key={label}
              href={href}
              target={label === "LinkedIn" ? "_blank" : undefined}
              rel="noreferrer"
              aria-label={label}
              className="grid h-10 w-10 place-items-center rounded-xl border border-border bg-surface-2/60 text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
            >
              <Icon size={17} />
            </a>
          ))}
        </div>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
