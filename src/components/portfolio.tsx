"use client";

import { motion, useScroll } from "framer-motion";
import {
  certifications,
  contact,
  impactStoryGroups,
  productPhilosophy,
  selectedProductWork,
  skills
} from "@/lib/portfolio-data";
import { GlassCard, Section } from "@/components/ui";

const navItems = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "philosophy", label: "Philosophy" },
  { id: "impact-stories", label: "Impact Stories" },
  { id: "selected-work", label: "Selected Work" },
  { id: "skills", label: "Skills" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" }
];

/** Scroll animations: avoid opacity:0 on mobile where IntersectionObserver can miss first paint */
const sectionMotion = {
  hidden: { opacity: 1, y: 16 },
  show: { opacity: 1, y: 0 }
};

const scrollViewport = {
  once: true,
  amount: "some" as const,
  margin: "0px 0px 120px 0px"
};

function ContactCard({
  href,
  label,
  value,
  icon,
  external
}: {
  href: string;
  label: string;
  value: string;
  icon: "email" | "phone" | "linkedin";
  external?: boolean;
}) {
  const iconMap = {
    email: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M3 6.75h18v10.5H3z" />
        <path d="m4.5 8.25 7.5 6 7.5-6" />
      </svg>
    ),
    phone: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M7.5 3.75h3l1.5 3.75-1.875 1.5a15 15 0 0 0 4.125 4.125l1.5-1.875 3.75 1.5v3A2.25 2.25 0 0 1 18 18a14.25 14.25 0 0 1-12-12A2.25 2.25 0 0 1 7.5 3.75Z" />
      </svg>
    ),
    linkedin: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
        <path d="M6.75 8.25a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3ZM5.5 9.5h2.5v9H5.5v-9Zm5 0H13v1.25h.03c.34-.64 1.17-1.31 2.4-1.31 2.57 0 3.07 1.69 3.07 3.9v5.16H16v-4.57c0-1.09-.02-2.49-1.52-2.49-1.52 0-1.76 1.19-1.76 2.41v4.65H10.5v-9Z" />
      </svg>
    )
  };

  return (
    <motion.a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      whileHover={{ y: -4 }}
      className="premium-card glass group flex h-full min-h-[108px] items-center gap-4 rounded-2xl p-5 transition hover:shadow-[0_14px_34px_rgba(95,131,255,0.25)]"
    >
      <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/15 bg-white/[0.05] text-cyan-200">
        {iconMap[icon]}
      </span>
      <span className="min-w-0">
        <span className="block text-xs uppercase tracking-wider text-slate-400">{label}</span>
        <span className="mt-1 block break-words text-sm font-medium text-white group-hover:text-cyan-100 sm:truncate sm:break-normal">{value}</span>
      </span>
    </motion.a>
  );
}

function PAIBlock({ title, text }: { title: "Problem" | "Approach" | "Impact"; text: string }) {
  const icon = title === "Problem" ? "P" : title === "Approach" ? "A" : "I";
  return (
    <div className="min-w-0 rounded-xl border border-white/10 bg-white/[0.03] p-4">
      <p className="flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-cyan-200">
        <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-cyan-200/30 bg-cyan-300/10 text-[10px]">
          {icon}
        </span>
        {title}
      </p>
      <p className="mt-3 break-words text-sm leading-relaxed text-slate-300">{text}</p>
    </div>
  );
}

export default function Portfolio() {
  const { scrollYProgress } = useScroll();

  return (
    <main className="relative min-w-0 overflow-x-clip">
      <div className="pointer-events-none absolute left-[-140px] top-[180px] h-[360px] w-[360px] rounded-full bg-indigo-500/20 blur-[120px]" />
      <div className="pointer-events-none absolute right-[-100px] top-[520px] h-[300px] w-[300px] rounded-full bg-cyan-400/15 blur-[110px]" />

      <motion.div className="fixed left-0 top-0 z-[60] h-1 w-full origin-left bg-gradient-to-r from-indigo-400 via-cyan-300 to-purple-400" style={{ scaleX: scrollYProgress }} />

      <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-[#090b14]/70 backdrop-blur-xl">
        <nav className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6 md:px-8">
          <a href="#hero" className="text-sm font-semibold tracking-wide text-white">Manthan Srivastav</a>
          <ul className="hidden gap-5 md:flex">
            {navItems.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className="text-xs uppercase tracking-wide text-slate-300 transition hover:text-white">{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <Section id="hero" className="min-h-[100dvh] min-h-screen pt-28 sm:pt-32">
        <motion.div initial="hidden" animate="show" variants={sectionMotion} transition={{ duration: 0.6 }}>
          <GlassCard className="premium-card relative overflow-x-clip p-6 shadow-glow sm:p-8 md:p-12">
            <div className="pointer-events-none absolute right-[-80px] top-[-80px] h-52 w-52 rounded-full bg-indigo-400/20 blur-[90px]" />
            <div className="pointer-events-none absolute bottom-[-80px] left-[-80px] h-48 w-48 rounded-full bg-cyan-300/20 blur-[90px]" />

            <p className="mb-4 text-sm uppercase tracking-[0.24em] text-cyan-200">Product Operator Portfolio</p>
            <h1 className="max-w-5xl break-words text-3xl font-bold leading-[1.08] text-white sm:text-4xl md:text-6xl lg:text-7xl">
              Building Scalable Product Experiences with{" "}
              <span className="gradient-text-animated">Growth, AI & Monetization</span>
            </h1>
            <p className="mt-5 max-w-3xl text-base text-slate-300 md:text-lg">
              Functioning as a Technical Product Manager across growth, engagement,
              monetization, and AI-enabled product execution.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {[
                "74% Revenue Growth",
                "0.4 -> 0.7 eCPM",
                "34.82% 15th Episode Completion",
                "3% Premium Conversion Rate"
              ].map((chip) => (
                <span key={chip} className="rounded-full border border-white/15 bg-white/[0.04] px-3 py-1 text-xs text-slate-200">
                  {chip}
                </span>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#impact-stories" className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:scale-[1.03]">
                View Experience
              </a>
              <a href="/resume.pdf" download className="rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white transition hover:border-white/50">
                Download Resume
              </a>
              <a href="#contact" className="rounded-full border border-indigo-300/40 bg-indigo-500/20 px-6 py-3 text-sm font-medium text-indigo-100 transition hover:bg-indigo-500/30">
                Contact Me
              </a>
            </div>
          </GlassCard>
        </motion.div>
      </Section>

      <Section id="about" className="pt-8">
        <motion.div initial="hidden" whileInView="show" viewport={scrollViewport} variants={sectionMotion} transition={{ duration: 0.55 }}>
          <GlassCard className="p-5 sm:p-8 md:p-10">
          <h2 className="text-2xl font-semibold text-white sm:text-3xl">About</h2>
          <p className="mt-5 break-words text-slate-300">Currently functioning as a Technical Product Manager with experience across Kuku and Tata Play, focused on monetization, retention, engagement systems, experimentation, and AI automation. Works closely with engineering, business, growth, and analytics teams to execute high-impact product outcomes.</p>
          </GlassCard>
        </motion.div>
      </Section>

      <Section id="philosophy" className="pt-8">
        <motion.h2 initial="hidden" whileInView="show" viewport={scrollViewport} variants={sectionMotion} className="mb-6 break-words text-2xl font-semibold text-white sm:mb-8 sm:text-3xl">
          Product Philosophy
        </motion.h2>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {productPhilosophy.map((item) => (
            <motion.div key={item.title} initial={{ opacity: 1, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={scrollViewport} className="premium-card hover-lift glass min-w-0 rounded-2xl p-5 sm:p-6">
              <p className="text-lg font-medium text-white">{item.title}</p>
              <p className="mt-3 break-words text-sm leading-relaxed text-slate-300">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section id="impact-stories" className="pt-8">
        <motion.h2 initial="hidden" whileInView="show" viewport={scrollViewport} variants={sectionMotion} className="mb-2 break-words text-2xl font-semibold text-white sm:text-3xl">
          Impact Stories
        </motion.h2>
        <p className="mb-8 max-w-3xl break-words text-slate-300 sm:mb-10">
          Case-study narratives across monetization, platform systems, engagement, personalization,
          and product execution outcomes.
        </p>
        <div className="space-y-6 sm:space-y-8">
          {impactStoryGroups.map((group, groupIndex) => (
            <motion.section
              key={group.company}
              initial={{ opacity: 1, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={scrollViewport}
              transition={{ duration: 0.45, delay: groupIndex * 0.04 }}
              className="premium-card glass min-w-0 rounded-3xl p-4 sm:p-6 md:p-8"
            >
              <div className="mb-5 flex flex-col gap-2 sm:mb-6 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:gap-3">
                <p className="break-words rounded-full border border-white/15 bg-white/[0.04] px-3 py-1 text-[11px] uppercase tracking-wider text-slate-200 sm:text-xs">
                  {group.company}
                </p>
                <p className="shrink-0 text-[11px] uppercase tracking-widest text-slate-400 sm:text-xs">{group.duration}</p>
              </div>
              <div className="space-y-5 sm:space-y-6">
                {group.stories.map((story) => (
                  <article key={story.title} className="premium-card hover-lift min-w-0 rounded-2xl border border-white/10 bg-[#0e1324]/70 p-4 sm:p-5 md:p-6">
                    <p className="mb-3 inline-flex max-w-full break-words rounded-full border border-white/15 bg-white/[0.04] px-3 py-1 text-[10px] uppercase tracking-widest text-cyan-100 sm:text-[11px]">
                      {group.company}
                    </p>
                    <h3 className="break-words text-lg font-semibold text-white sm:text-xl md:text-2xl">{story.title}</h3>
                    <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                      {story.metrics.map((metric) => (
                        <div key={`${story.title}-${metric.label}`} className="glass min-w-0 rounded-2xl p-4">
                          <p className="break-words text-xl font-semibold text-white sm:text-2xl md:text-3xl">{metric.metric}</p>
                          <p className="mt-2 break-words text-xs uppercase tracking-wider text-slate-300">{metric.label}</p>
                        </div>
                      ))}
                    </div>
                    <div className="my-5 h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                      <PAIBlock title="Problem" text={story.problem} />
                      <PAIBlock title="Approach" text={story.approach} />
                      <PAIBlock title="Impact" text={story.impact.join(" ")} />
                    </div>
                  </article>
                ))}
              </div>
            </motion.section>
          ))}
        </div>
      </Section>

      <Section id="selected-work" className="pt-8">
        <motion.h2 initial="hidden" whileInView="show" viewport={scrollViewport} variants={sectionMotion} className="mb-6 break-words text-2xl font-semibold text-white sm:mb-8 sm:text-3xl">
          Selected Product Work
        </motion.h2>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {selectedProductWork.map((work) => (
            <motion.article key={work.title} initial={{ opacity: 1, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={scrollViewport} className="premium-card hover-lift glass min-w-0 rounded-2xl p-5 sm:p-6">
              <h3 className="text-lg font-medium text-white sm:text-xl">{work.title}</h3>
              <p className="mt-3 break-words text-sm leading-relaxed text-slate-300">{work.text}</p>
            </motion.article>
          ))}
        </div>
      </Section>

      <Section id="skills" className="pt-8">
        <motion.h2 initial="hidden" whileInView="show" viewport={scrollViewport} variants={sectionMotion} className="mb-6 break-words text-2xl font-semibold text-white sm:mb-8 sm:text-3xl">Skills</motion.h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {Object.entries(skills).map(([category, categorySkills]) => (
            <motion.div key={category} initial={{ opacity: 1, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={scrollViewport} className="glass min-w-0 rounded-2xl p-5 sm:p-6">
              <h3 className="mb-4 text-lg font-medium text-white">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {categorySkills.map((skill, i) => (
                  <motion.span key={skill} initial={{ opacity: 1, scale: 1 }} whileInView={{ opacity: 1, scale: 1 }} viewport={scrollViewport} transition={{ delay: i * 0.02 }} className="rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs text-slate-200 hover:animate-float hover:border-indigo-300/60">{skill}</motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section id="certifications" className="pt-8">
        <motion.h2 initial="hidden" whileInView="show" viewport={scrollViewport} variants={sectionMotion} className="mb-6 break-words text-2xl font-semibold text-white sm:mb-8 sm:text-3xl">Certifications</motion.h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {certifications.map((cert) => (
            <motion.article
              key={cert.title}
              initial={{ opacity: 1, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={scrollViewport}
              className="premium-card hover-lift glass min-w-0 overflow-x-clip rounded-2xl"
            >
              {cert.previewImage ? (
                <a href={cert.fileUrl} target="_blank" rel="noreferrer" className="block max-w-full">
                  <img
                    src={cert.previewImage}
                    alt={cert.title}
                    className={`max-h-48 min-h-0 w-full max-w-full ${
                      cert.previewFit === "contain" ? "bg-white object-contain p-2" : "object-cover object-top"
                    }`}
                  />
                </a>
              ) : (
                <div className="flex min-h-[11rem] items-center justify-center border-b border-white/10 bg-gradient-to-br from-indigo-500/15 to-cyan-400/10 px-4 py-8">
                  <p className="break-words text-center text-xs uppercase tracking-[0.2em] text-slate-300 sm:text-sm">Certificate Document</p>
                </div>
              )}
              <div className="space-y-3 p-4 sm:p-5">
                <p className="break-words text-lg font-semibold text-white">{cert.title}</p>
                <p className="break-words text-sm text-slate-300">{cert.issuer}</p>
                {(cert.issueDate || cert.expiryDate) && (
                  <p className="text-xs text-slate-400">
                    {cert.issueDate ? `Issued: ${cert.issueDate}` : ""}
                    {cert.issueDate && cert.expiryDate ? "  |  " : ""}
                    {cert.expiryDate ? `Expires: ${cert.expiryDate}` : ""}
                  </p>
                )}
                <div className="flex flex-wrap gap-2 pt-1">
                  <a
                    href={cert.fileUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-white/20 px-3 py-1.5 text-xs text-white transition hover:border-cyan-300/60"
                  >
                    View Certificate
                  </a>
                  <a
                    href={cert.fileUrl}
                    download
                    className="rounded-full border border-indigo-300/30 bg-indigo-500/15 px-3 py-1.5 text-xs text-indigo-100 transition hover:bg-indigo-500/25"
                  >
                    Download
                  </a>
                  {cert.verifyUrl ? (
                    <a
                      href={cert.verifyUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full border border-cyan-300/30 bg-cyan-400/10 px-3 py-1.5 text-xs text-cyan-100 transition hover:bg-cyan-400/20"
                    >
                      Verify
                    </a>
                  ) : null}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </Section>

      <Section id="contact" className="pt-8">
        <motion.div initial="hidden" whileInView="show" viewport={scrollViewport} variants={sectionMotion}>
          <GlassCard className="p-5 sm:p-8 md:p-10">
          <h2 className="text-2xl font-semibold text-white sm:text-3xl">Contact</h2>
          <p className="mt-4 break-words text-slate-300">Let&apos;s build scalable product experiences together.</p>
          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
            <ContactCard href={`mailto:${contact.email}`} label="Email" value={contact.email} icon="email" />
            <ContactCard href="tel:+917042618954" label="Phone" value={contact.phone} icon="phone" />
            <ContactCard href={contact.linkedin} label="LinkedIn" value="LinkedIn" icon="linkedin" external />
          </div>
          </GlassCard>
        </motion.div>
      </Section>
    </main>
  );
}
