"use client";

import {
  ArrowUpRight,
  BriefcaseBusiness,
  GitBranch,
  IdCard,
  Mail,
  MapPin,
  Moon,
  Network,
  Rocket,
  Sparkles,
  Sun,
  Terminal,
  UsersRound
} from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

const profile = {
  name: "Sandeep Jindal",
  role: "Engineering leader and builder",
  location: "London",
  company: "Meta",
  email: "jindalsandeep47@gmail.com",
  github: "https://github.com/sandeepjindal",
  linkedin: "https://www.linkedin.com/in/jindalsandeep47/",
  website: "https://www.zeroentropy.co.in/",
  newsletter: "https://growwwithme.substack.com/?utm_campaign=profile_chips",
  coaching: "https://topmate.io/sandeep_jindal",
  avatar: "https://avatars.githubusercontent.com/u/1520955?v=4"
};

const nav = ["About", "Experience", "Projects", "Skills", "Contact"];

const stats = [
  { label: "Public repos", value: "62" },
  { label: "GitHub since", value: "2012" },
  { label: "Followers", value: "17" }
];

const experience = [
  {
    title: "Software Engineer",
    company: "Meta",
    detail:
      "Building with a systems mindset in one of the most demanding product and infrastructure environments.",
    icon: BriefcaseBusiness
  },
  {
    title: "Engineering leader",
    company: "Agoda, Swiggy, Oracle, HelloFresh",
    detail:
      "Led and scaled engineering work across travel OTA, ecommerce retail, payments, finance, and platform domains.",
    icon: UsersRound
  },
  {
    title: "Founder and mentor",
    company: "Zero Entropy",
    detail:
      "Exploring AI-native learning, practical architecture, career mentoring, and writing for engineers who want to grow with intention.",
    icon: Sparkles
  }
];

const projects = [
  {
    name: "Pattern Pilot",
    href: "https://github.com/sandeepjindal/pattern-pilot",
    description: "AI-assisted way to learn design patterns through a focused JavaScript experience.",
    stack: ["JavaScript", "AI learning", "Design patterns"],
    accent: "blue"
  },
  {
    name: "Health Analyzer",
    href: "https://github.com/sandeepjindal/health-analyzer",
    description: "Python project for turning health-related inputs into clearer analysis and signals.",
    stack: ["Python", "Analysis", "Product thinking"],
    accent: "teal"
  },
  {
    name: "AI Builder Course",
    href: "https://github.com/sandeepjindal/ai-builder-course",
    description: "Learning material and experiments for people building with modern AI workflows.",
    stack: ["Python", "AI", "Education"],
    accent: "rose"
  },
  {
    name: "Kafka Processing Framework",
    href: "https://github.com/sandeepjindal/kafka-processing-framework",
    description: "A systems-oriented repository around streaming, processing, and backend foundations.",
    stack: ["Kafka", "Backend", "Distributed systems"],
    accent: "amber"
  }
];

const skills = [
  "Engineering leadership",
  "Distributed systems",
  "Backend architecture",
  "Payments and finance",
  "Travel platforms",
  "Ecommerce systems",
  "AI product building",
  "Java",
  "Scala",
  "Python",
  "JavaScript",
  "Kafka",
  "Kubernetes",
  "Mentoring"
];

const principles = [
  {
    title: "Calm systems",
    text: "Design for failure modes, migration paths, observability, and operational rollback before scale turns small cracks into incidents.",
    icon: Network
  },
  {
    title: "Sharper teams",
    text: "Raise the quality of decisions by clarifying intent early, creating useful review loops, and mentoring engineers into ownership.",
    icon: UsersRound
  },
  {
    title: "Useful AI",
    text: "Treat AI as leverage for thinking, learning, prototyping, and code intent rather than a shortcut around engineering judgment.",
    icon: Rocket
  }
];

const contactPaths = [
  {
    title: "Engineering coaching",
    text: "Book a focused session for career strategy, engineering leadership, architecture judgment, or interview preparation.",
    href: profile.coaching,
    label: "Book on Topmate",
    icon: UsersRound
  },
  {
    title: "Newsletter",
    text: "Read notes on technology, AI, engineering craft, leadership, and personal growth.",
    href: profile.newsletter,
    label: "Read Growwwithme",
    icon: Sparkles
  },
  {
    title: "Direct conversation",
    text: "Reach out for thoughtful engineering problems, mentoring ideas, product conversations, or collaboration.",
    href: `mailto:${profile.email}`,
    label: "Send email",
    icon: Mail
  }
];

/**
 * Toggles the document's color theme between light and dark modes.
 */
function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <button
      type="button"
      aria-label="Toggle color theme"
      title="Toggle color theme"
      onClick={toggleTheme}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border hairline bg-[var(--surface)] text-[var(--foreground)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
    >
      {isDark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}

/**
 * Reveals content with a scroll-triggered fade and upward motion.
 *
 * @param children - The content to animate.
 * @param className - Additional classes applied to the animated container.
 * @param delay - The animation delay in seconds.
 */
function FadeIn({
  children,
  className = "",
  delay = 0
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * Renders a centered section heading with an eyebrow label, title, and supporting text.
 *
 * @param eyebrow - The short label displayed above the title
 * @param title - The section title
 * @param copy - The supporting description displayed below the title
 */
function SectionHeading({
  eyebrow,
  title,
  copy
}: {
  eyebrow: string;
  title: string;
  copy: string;
}) {
  return (
    <FadeIn className="mx-auto mb-10 max-w-3xl text-center">
      <p className="mb-3 font-mono text-xs uppercase tracking-[0.18em] text-[var(--accent)]">
        {eyebrow}
      </p>
      <h2 className="text-balance text-3xl font-semibold md:text-5xl">{title}</h2>
      <p className="mt-4 text-base leading-7 text-[var(--muted)] md:text-lg">{copy}</p>
    </FadeIn>
  );
}

/**
 * Renders the fixed site header with navigation, GitHub access, and theme controls.
 */
function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b hairline bg-[color-mix(in_srgb,var(--background)_82%,transparent)] backdrop-blur-xl">
      <div className="container-shell flex h-16 items-center justify-between">
        <a href="#top" className="flex items-center gap-3 font-semibold">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--foreground)] text-sm text-[var(--background)]">
            SJ
          </span>
          <span className="hidden sm:inline">Sandeep Jindal</span>
        </a>
        <nav className="hidden items-center gap-6 text-sm text-[var(--muted)] md:flex">
          {nav.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="transition hover:text-[var(--foreground)]">
              {item}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a
            href={profile.github}
            aria-label="GitHub profile"
            title="GitHub profile"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border hairline bg-[var(--surface)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
          >
            <GitBranch size={18} />
          </a>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}

/**
 * Renders the portfolio hero section with an introduction, contact links, and profile summary.
 */
function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-24 md:pt-28">
      <div className="absolute inset-x-0 top-16 h-80 kbd-grid opacity-70" />
      <div className="container-shell relative grid gap-10 pb-14 pt-8 md:gap-12 md:pb-20 md:pt-12 lg:min-h-[86vh] lg:grid-cols-[1.04fr_0.96fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border hairline bg-[var(--surface)] px-3 py-2 text-sm text-[var(--muted)]">
            <MapPin size={15} />
            London · {profile.company} · Open to meaningful engineering conversations
          </div>
          <h1 className="text-balance text-4xl font-semibold leading-[1.04] sm:text-5xl md:text-7xl">
            Building resilient products, systems, and engineering teams.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--muted)] md:text-xl">
            I am Sandeep Jindal, an engineering leader and software engineer focused on
            scalable platforms, practical AI, and the human systems that make great software last.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[var(--foreground)] px-6 font-medium text-[var(--background)] transition hover:scale-[1.02]"
            >
              <Mail size={18} />
              Contact
            </a>
            <a
              href={profile.linkedin}
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full border hairline bg-[var(--surface)] px-6 font-medium transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              <IdCard size={18} />
              LinkedIn
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="surface hidden rounded-[8px] p-4 sm:block"
        >
          <div className="overflow-hidden rounded-[6px] border hairline bg-[var(--surface-strong)]">
            <div className="flex items-center justify-between border-b hairline px-4 py-3">
              <div className="flex gap-2">
                <span className="h-3 w-3 rounded-full bg-[#ef4444]" />
                <span className="h-3 w-3 rounded-full bg-[#f59e0b]" />
                <span className="h-3 w-3 rounded-full bg-[#10b981]" />
              </div>
              <span className="font-mono text-xs text-[var(--muted)]">portfolio.ts</span>
            </div>
            <div className="grid gap-0 md:grid-cols-[0.84fr_1.16fr]">
              <div className="border-b hairline p-5 md:border-b-0 md:border-r">
                <Image
                  src={profile.avatar}
                  alt="Sandeep Jindal"
                  width={460}
                  height={460}
                  priority
                  className="aspect-square w-full rounded-[6px] object-cover"
                />
              </div>
              <div className="p-5">
                <div className="mb-5 flex items-center gap-2 font-mono text-sm text-[var(--accent-2)]">
                  <Terminal size={16} />
                  verified_profile
                </div>
                <dl className="grid gap-4">
                  {stats.map((item) => (
                    <div key={item.label} className="flex items-end justify-between border-b hairline pb-3">
                      <dt className="text-sm text-[var(--muted)]">{item.label}</dt>
                      <dd className="text-2xl font-semibold">{item.value}</dd>
                    </div>
                  ))}
                </dl>
                <div className="mt-5 rounded-[6px] bg-[color-mix(in_srgb,var(--accent)_10%,transparent)] p-4 text-sm leading-6 text-[var(--muted)]">
                  “Out of Curiosity. e^(pi * i) = 1”
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/**
 * Renders the About section with an introductory heading and a grid of guiding principles.
 */
function About() {
  return (
    <section id="about" className="border-t hairline py-20 md:py-28">
      <div className="container-shell">
        <SectionHeading
          eyebrow="About"
          title="A builder with a leader’s operating system."
          copy="Public profiles point to a career across Meta, Agoda, Swiggy, Oracle, HelloFresh, and founder/mentor work. The connective tissue is durable engineering: clear systems, clear teams, clear tradeoffs."
        />
        <div className="grid gap-4 md:grid-cols-3">
          {principles.map((item, index) => {
            const Icon = item.icon;
            return (
              <FadeIn key={item.title} delay={index * 0.08} className="surface rounded-[8px] p-6">
                <Icon className="mb-5 text-[var(--accent)]" size={26} />
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 leading-7 text-[var(--muted)]">{item.text}</p>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/**
 * Renders a timeline of professional experience entries.
 */
function Experience() {
  return (
    <section id="experience" className="py-20 md:py-28">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Experience"
          title="From product scale to platform judgment."
          copy="A timeline shaped around confirmed public signals, with exact dates intentionally left out where they are not public."
        />
        <div className="mx-auto max-w-3xl">
          {experience.map((item, index) => {
            const Icon = item.icon;
            return (
              <FadeIn key={item.title} delay={index * 0.08} className="relative pl-10">
                <div className="absolute bottom-0 left-[15px] top-10 w-px bg-[var(--border)]" />
                <div className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full border hairline bg-[var(--surface-strong)]">
                  <Icon size={16} />
                </div>
                <div className="pb-10">
                  <p className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--accent)]">
                    {item.company}
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold">{item.title}</h3>
                  <p className="mt-3 leading-7 text-[var(--muted)]">{item.detail}</p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/**
 * Displays featured project cards with descriptions, technology tags, and links.
 */
function Projects() {
  const accentClasses = useMemo(
    () => ({
      blue: "bg-blue-500/12 text-blue-600 dark:text-blue-300",
      teal: "bg-teal-500/12 text-teal-700 dark:text-teal-300",
      rose: "bg-rose-500/12 text-rose-700 dark:text-rose-300",
      amber: "bg-amber-500/14 text-amber-700 dark:text-amber-300"
    }),
    []
  );

  return (
    <section id="projects" className="border-y hairline py-20 md:py-28">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Featured projects"
          title="Small repos, sharp signals."
          copy="A curated selection from public GitHub activity, chosen to show AI learning, data analysis, and backend systems instincts."
        />
        <div className="grid gap-4 md:grid-cols-2">
          {projects.map((project, index) => (
            <FadeIn key={project.name} delay={index * 0.08}>
              <a
                href={project.href}
                className="surface group block h-full rounded-[8px] p-6 transition hover:-translate-y-1 hover:border-[var(--accent)]"
              >
                <div className="mb-8 flex items-start justify-between gap-4">
                  <span
                    className={`rounded-full px-3 py-1 font-mono text-xs ${
                      accentClasses[project.accent as keyof typeof accentClasses]
                    }`}
                  >
                    {project.stack[0]}
                  </span>
                  <ArrowUpRight className="transition group-hover:translate-x-1 group-hover:-translate-y-1" size={20} />
                </div>
                <h3 className="text-2xl font-semibold">{project.name}</h3>
                <p className="mt-3 min-h-20 leading-7 text-[var(--muted)]">{project.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.stack.map((tag) => (
                    <span key={tag} className="rounded-full border hairline px-3 py-1 text-sm text-[var(--muted)]">
                      {tag}
                    </span>
                  ))}
                </div>
              </a>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/**
 * Renders the skills section with an overview and a list of technical skills.
 */
function Skills() {
  return (
    <section id="skills" className="py-20 md:py-28">
      <div className="container-shell grid gap-12 lg:grid-cols-[0.86fr_1.14fr] lg:items-start">
        <FadeIn>
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.18em] text-[var(--accent)]">Skills</p>
          <h2 className="text-balance text-3xl font-semibold md:text-5xl">
            Technical depth with organizational range.
          </h2>
          <p className="mt-5 text-lg leading-8 text-[var(--muted)]">
            The strongest signal across the public footprint is a mix of backend foundations,
            AI curiosity, architecture writing, and coaching.
          </p>
        </FadeIn>
        <FadeIn delay={0.1} className="flex flex-wrap gap-3">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border hairline bg-[var(--surface)] px-4 py-2 text-sm font-medium text-[var(--foreground)]"
            >
              {skill}
            </span>
          ))}
        </FadeIn>
      </div>
    </section>
  );
}

/**
 * Renders the contact section with coaching, newsletter, and contact options.
 */
function Contact() {
  return (
    <section id="contact" className="border-t hairline py-20 md:py-28">
      <div className="container-shell">
        <FadeIn className="mx-auto max-w-4xl rounded-[8px] border hairline bg-[var(--foreground)] p-8 text-[var(--background)] md:p-12">
          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <p className="mb-3 font-mono text-xs uppercase tracking-[0.18em] opacity-70">Contact</p>
              <h2 className="text-balance text-3xl font-semibold md:text-5xl">
                Reach out for systems, teams, writing, or coaching.
              </h2>
              <p className="mt-4 max-w-2xl leading-7 opacity-75">
                Best fit: deep engineering problems, leadership conversations, mentoring,
                practical AI/product ideas, and focused career growth.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
              <a
                href={profile.coaching}
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[var(--background)] px-5 font-medium text-[var(--foreground)]"
              >
                <UsersRound size={18} />
                Coaching
              </a>
              <a
                href={profile.newsletter}
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-[color-mix(in_srgb,var(--background)_30%,transparent)] px-5 font-medium"
              >
                <Sparkles size={18} />
                Newsletter
              </a>
            </div>
          </div>
        </FadeIn>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {contactPaths.map((item, index) => {
            const Icon = item.icon;
            return (
              <FadeIn key={item.title} delay={index * 0.08}>
                <a href={item.href} className="surface block h-full rounded-[8px] p-5 transition hover:-translate-y-1 hover:border-[var(--accent)]">
                  <Icon className="mb-4 text-[var(--accent)]" size={22} />
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="mt-2 min-h-24 leading-7 text-[var(--muted)]">{item.text}</p>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[var(--accent)]">
                    {item.label}
                    <ArrowUpRight size={16} />
                  </span>
                </a>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/**
 * Renders the site footer with the current year and external profile links.
 */
function Footer() {
  return (
    <footer className="border-t hairline py-8">
      <div className="container-shell flex flex-col gap-4 text-sm text-[var(--muted)] sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Sandeep Jindal</p>
        <div className="flex items-center gap-4">
          <a href={profile.github} className="transition hover:text-[var(--foreground)]">
            GitHub
          </a>
          <a href={profile.linkedin} className="transition hover:text-[var(--foreground)]">
            LinkedIn
          </a>
          <a href={profile.website} className="transition hover:text-[var(--foreground)]">
            Website
          </a>
          <a href={profile.newsletter} className="transition hover:text-[var(--foreground)]">
            Newsletter
          </a>
          <a href={profile.coaching} className="transition hover:text-[var(--foreground)]">
            Coaching
          </a>
        </div>
      </div>
    </footer>
  );
}

/**
 * Renders the portfolio homepage and its primary sections.
 */
export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}
