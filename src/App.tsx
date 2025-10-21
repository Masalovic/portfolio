import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Globe,
  Mail,
  Phone,
  Download,
  ExternalLink,
  Languages,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import tgoStudyCover from "@/assets/tgo-case-cover.png";
import tgoCover from "@/assets/tgo-cover.png";
import neshamaCover from "@/assets/neshamaflow-cover.png";
import ufgCover from "@/assets/ufg-cover.png";
import ttCover from "@/assets/tt-cover.png";


/* =======================
   Copy: EN / SR (balanced, a little witty)
   ======================= */
const COPY = {
  en: {
    nav: { about: "About", work: "Work", skills: "Skills", contact: "Contact" },
    hero: {
      title: "Self-taught Designer & Frontend Developer",
      subtitle:
        "I design with curiosity and ship with care. Clean systems, fast UIs, and details that earn trust — because pretty is nice, but useful wins.",
      ctaPrimary: "View My Work",
      ctaSecondary: "Download CV",
    },
    about: {
      title: "About",
      text: "I'm a self-taught UI/UX designer and frontend developer who enjoys turning messy ideas into calm, usable products. I bridge research, structure, and code — from flows and systems to React and Flutter — with a bias for clarity, accessibility, and speed.",
      facts: [
        "5+ years building products across European markets",
        "From UX research & systems thinking to React & Flutter",
        "Focused on real outcomes: clarity, speed, and trust",
      ],
      current: {
        title: "Currently",
        lines: [
          "Designing and building tidy UI systems with React + TypeScript.",
          "Exploring AI-assisted flows for travel, wellness, and hiring.",
          "Open to teams where design and engineering work as one.",
        ],
      },
    },
    skills: {
      title: "Skills",
      groups: [
        {
          name: "Design",
          items: [
            "Product thinking",
            "UX research",
            "Wireframes",
            "Design systems",
            "Prototyping",
            "Accessibility",
          ],
        },
        {
          name: "Tools",
          items: [
            "Figma",
            "FigJam",
            "Notion",
            "Jira",
            "Adobe Express",
            "Canva",
          ],
        },
        {
          name: "Frontend",
          items: [
            "React",
            "TypeScript",
            "JavaScript",
            "Tailwind",
            "Framer Motion",
            "Flutter (cross-platform)",
          ],
        },
      ],
    },
    work: {
      title: "Selected Work",
      liveSites: "Live Projects",
      caseStudy: "Case Study",
      open: "Open",
      viewCase: "View case study",
      role: "Role",
      year: "Year",
      impact: "Impact",
      responsibilities: "Responsibilities",
      process: "Process",
      results: "Results",
    },
    contact: {
      title: "Contact",
      text: "Let’s talk. I’m open to full-time roles and thoughtful freelance collaborations.",
      email: "Email",
      phone: "Phone",
    },
  },
  sr: {
    nav: {
      about: "O meni",
      work: "Projekti",
      skills: "Veštine",
      contact: "Kontakt",
    },
    hero: {
      title: "Samouka dizajnerka i frontend developerka",
      subtitle:
        "Dizajniram radoznalo, isporučujem pažljivo. Čisti sistemi, brzi interfejsi i detalji koji grade poverenje — jer lepo je dobro, ali korisno pobeđuje.",
      ctaPrimary: "Pogledaj projekte",
      ctaSecondary: "Preuzmi CV",
    },
    about: {
      title: "O meni",
      text: "Samouka sam UI/UX dizajnerka i frontend developerka koja voli da pretvara haotične ideje u mirne, upotrebljive proizvode. Spajam istraživanje, strukturu i kod — od tokova i sistema do React-a i Flutter-a — sa fokusom na jasnoću, pristupačnost i brzinu.",
      facts: [
        "5+ godina rada na proizvodima za evropska tržišta",
        "Od UX istraživanja i sistemskog razmišljanja do React-a i Flutter-a",
        "Fokus na stvarne rezultate: jasnoću, brzinu i poverenje",
      ],
      current: {
        title: "Trenutno",
        lines: [
          "Dizajniram i gradim uredne UI sisteme u React-u i TypeScript-u.",
          "Istražujem AI tokove za putovanja, wellness i zapošljavanje.",
          "Otvorena sam za timove gde dizajn i inženjering rade zajedno.",
        ],
      },
    },
    skills: {
      title: "Veštine",
      groups: [
        {
          name: "Dizajn",
          items: [
            "Produktno razmišljanje",
            "UX istraživanje",
            "Wireframe-ovi",
            "Dizajn sistemi",
            "Prototipovi",
            "Pristupačnost",
          ],
        },
        {
          name: "Alati",
          items: [
            "Figma",
            "FigJam",
            "Notion",
            "Jira",
            "Adobe Express",
            "Canva",
          ],
        },
        {
          name: "Frontend",
          items: [
            "React",
            "TypeScript",
            "Tailwind",
            "JavaScript",
            "Framer Motion",
            "Flutter (više platformi)",
          ],
        },
      ],
    },
    work: {
      title: "Projekti",
      liveSites: "Produkcioni projekti",
      caseStudy: "Studija slučaja",
      open: "Otvori",
      viewCase: "Pogledaj studiju",
      role: "Uloga",
      year: "Godina",
      impact: "Uticaj",
      responsibilities: "Odgovornosti",
      process: "Proces",
      results: "Rezultati",
    },
    contact: {
      title: "Kontakt",
      email: "Email",
      phone: "Telefon",
    },
  },
} as const;

/* =======================
   Projects (added Neshama Flow)
   ======================= */
const PROJECTS = [
  {
    slug: "neshama-flow",
    title: "Neshama Flow",
    role: "Solo — Design & Development",
    year: "2025",
    tags: ["Wellness", "AI", "Mobile App", "Flutter"],
    link: "https://neshamaflow.pages.dev/",
    cover:
      neshamaCover,
    summaryEN:
      "Self-initiated wellness app built with Flutter — mindfulness, cycle tracking, and AI-guided rituals. Designed and developed end-to-end.",
    summarySR:
      "Samostalno razvijena wellness aplikacija u Flutter-u — svesnost, praćenje ciklusa i AI rituali vođene podrške. Od ideje do lansiranja.",
  },
  {
    slug: "ufg",
    title: "Universe Force Group",
    role: "UI/UX, Web Design, Frontend",
    year: "2024–2025",
    tags: ["Corporate site", "Design system", "Performance"],
    link: "https://universeforcegroup.com/en/",
    cover:
      ufgCover,
    summaryEN:
      "Corporate website for a multi-brand group. Tokens, typography, and a light component library — built for clarity, SEO, and speed.",
    summarySR:
      "Korporativni sajt za multi-brend grupu. Tokeni, tipografija i laka biblioteka komponenti — fokus na jasnoći, SEO i brzini.",
  },
  {
    slug: "tripgoon-web",
    title: "TripGoOn (Website)",
    role: "Product Design, Web UI",
    year: "2025",
    tags: ["Travel", "Marketing site", "AI"],
    link: "https://tripgoon.com/",
    cover:
      tgoCover,
    summaryEN:
      "Marketing site for an AI travel planner. Clear IA and conversion-first hero sections.",
    summarySR:
      "Marketing sajt za AI planer putovanja. Jasna arhitektura informacija i hero sekcije usmerene na konverziju.",
  },
  {
    slug: "talents-trend",
    title: "Talents Trend",
    role: "Brand & UI, Web",
    year: "2025",
    tags: ["SaaS", "Recruitment", "Conversion"],
    link: "https://talentstrend.com/",
    cover:
      ttCover,
    summaryEN:
      "SaaS site for talent intelligence & sourcing. Clean identity and a high-clarity landing.",
    summarySR:
      "SaaS sajt za talent intelligence i sourcing. Čist vizuelni identitet i jasna landing stranica.",
  },
];

/* =======================
   Featured Case Study (TripGoOn app)
   ======================= */
const CASE_STUDY = {
  title: "TripGoOn – Mobile App",
  role: ["Product Design", "UI/UX", "Design System"],
  year: "2025",
  figma: "https://www.figma.com/", // TODO: replace with real Figma link
  cover:
    tgoStudyCover,
  impactEN: [
    "Time-to-itinerary reduced from 15 → 4 minutes (prototype tests).",
    "Clearer IA improved task completion by 27%.",
  ],
  impactSR: [
    "Vreme do itinerera smanjeno sa 15 → 4 min (testovi prototipa).",
    "Jasnija IA povećala završavanje zadatka za 27%.",
  ],
  responsibilitiesEN: [
    "Flows & wireframes",
    "Design tokens & components",
    "Interactive prototypes",
    "Usability tests",
  ],
  responsibilitiesSR: [
    "Tokovi i wireframe-ovi",
    "Dizajn tokeni i komponente",
    "Interaktivni prototipovi",
    "Testovi upotrebljivosti",
  ],
  processEN: [
    {
      h: "Problem",
      p: "Travel planning across flights, stays, and activities is fragmented and slow.",
    },
    {
      h: "Approach",
      p: "Map core journeys, prioritize speed and clarity, build a modular UI system.",
    },
    {
      h: "Design",
      p: "Card-based search, progressive filters, inline cart, and clear checkout states.",
    },
  ],
  processSR: [
    {
      h: "Problem",
      p: "Planiranje putovanja kroz letove, smeštaj i aktivnosti je fragmentisano i sporo.",
    },
    {
      h: "Pristup",
      p: "Mapiranje ključnih putanja, prioritet brzina i jasnoća, modularni UI sistem.",
    },
    {
      h: "Dizajn",
      p: "Kartice za pretragu, progresivni filteri, inline korpa i jasna stanja naplate.",
    },
  ],
  resultsEN: [
    "Higher comprehension in first-time users (qualitative).",
    "Foundation for multi-platform rollout (Flutter).",
  ],
  resultsSR: [
    "Bolje razumevanje kod novih korisnika (kvalitativno).",
    "Osnova za više platformi (Flutter).",
  ],
};

/* ======================= */

function Section({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <section
      id={id}
      className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-14 md:py-20"
    >
      {children}
    </section>
  );
}

export default function Portfolio() {
  const [lang, setLang] = useState<"en" | "sr">("en");
  const t = useMemo(() => COPY[lang], [lang]);
  const [showCase, setShowCase] = useState(false);

  return (
    <div className="min-h-screen bg-white text-neutral-900">
      {/* Header */}
      <header className="sticky top-0 z-30 backdrop-blur bg-white/80 border-b">
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="font-semibold tracking-tight">Marija Masalović</div>

          <nav className="hidden md:flex items-center gap-6 text-sm text-neutral-600">
            <a href="#about" className="hover:text-neutral-900">
              {t.nav.about}
            </a>
            <a href="#skills" className="hover:text-neutral-900">
              {t.nav.skills}
            </a>
            <a href="#work" className="hover:text-neutral-900">
              {t.nav.work}
            </a>
            <a href="#contact" className="hover:text-neutral-900">
              {t.nav.contact}
            </a>
          </nav>

          <div className="flex items-center gap-2">
            {/* Show current language; click toggles */}
            <Button
              variant="ghost"
              size="sm"
              title={
                lang === "en" ? "Switch to Serbian" : "Prebaci na engleski"
              }
              onClick={() => setLang(lang === "en" ? "sr" : "en")}
            >
              <Languages className="w-4 h-4 mr-2" />
              {lang.toUpperCase()}
            </Button>

            <Button
              size="sm"
              onClick={() =>
                document
                  .getElementById("work")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              {t.hero.ctaPrimary} <ArrowUpRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <Section id="hero">
        <div className="grid md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-7">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-5xl font-semibold leading-tight tracking-tight"
            >
              {t.hero.title}
            </motion.h1>
            <p className="mt-4 text-neutral-600 max-w-2xl">{t.hero.subtitle}</p>

            <div className="mt-6 flex items-center gap-3">
              <Button
                onClick={() =>
                  document
                    .getElementById("work")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                {t.hero.ctaPrimary}
                <ArrowUpRight className="w-4 h-4 ml-2" />
              </Button>
              <Button
                variant="outline"
                onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
                  e.preventDefault()
                }
              >
                {t.hero.ctaSecondary}
                <Download className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* About */}
      <Section id="about">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
          {t.about.title}
        </h2>

        {/* single content column on the left; right column removed */}
        <div className="mt-4 md:grid md:grid-cols-12 md:gap-8">
          <div className="md:col-span-7">
            <p className="text-neutral-700 leading-relaxed">{t.about.text}</p>

            {/* facts moved here, under the paragraph */}
            <ul className="mt-6 text-neutral-700 space-y-2 list-disc pl-5">
              {t.about.facts.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>
          </div>

           {/* i18n "Currently" card */}
          <div className="md:col-span-5">
            <Card className="shadow-sm">
              <CardHeader>
                <CardTitle className="text-base">
                  {t.about.current.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-neutral-600 space-y-2">
                {t.about.current.lines.map((line, i) => (
                  <div key={i}>• {line}</div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>

      {/* Skills */}
      <Section id="skills">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
          {t.skills.title}
        </h2>
        <div className="mt-6 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {t.skills.groups.map((g, i) => (
            <Card key={i} className="shadow-sm">
              <CardHeader>
                <CardTitle className="text-base">{g.name}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-neutral-600 flex flex-wrap gap-2">
                {g.items.map((item, j) => (
                  <span
                    key={j}
                    className="px-2 py-1 rounded-full border text-neutral-700"
                  >
                    {item}
                  </span>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Work */}
      <Section id="work">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
          {t.work.title}
        </h2>

        {/* Live projects */}
        <h3 className="mt-8 text-sm uppercase tracking-wider text-neutral-500">
          {t.work.liveSites}
        </h3>
        <div className="mt-3 grid md:grid-cols-3 gap-4">
          {PROJECTS.map((p) => (
            <Card key={p.slug} className="group overflow-hidden shadow-sm">
              <div className="aspect-[16/10] bg-neutral-100 overflow-hidden">
                <img
                  src={p.cover}
                  alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-base flex items-center justify-between">
                  <span>{p.title}</span>
                  <a
                    className="text-neutral-500 hover:text-neutral-900"
                    href={p.link}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${t.work.open} ${p.title}`}
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-neutral-600 space-y-3">
                <div className="flex items-center gap-3 text-neutral-700">
                  <span className="px-2 py-0.5 rounded-full border text-xs">
                    {t.work.role}: {p.role}
                  </span>
                  <span className="px-2 py-0.5 rounded-full border text-xs">
                    {t.work.year}: {p.year}
                  </span>
                </div>
                <p>{lang === "en" ? p.summaryEN : p.summarySR}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 rounded-full bg-neutral-100 text-neutral-700 text-xs border"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Case study */}
        <h3 className="mt-10 text-sm uppercase tracking-wider text-neutral-500">
          {t.work.caseStudy}
        </h3>
        <Card className="mt-3 shadow-sm">
          <div className="aspect-[16/8] bg-neutral-100 overflow-hidden">
            <img
              src={CASE_STUDY.cover}
              alt={CASE_STUDY.title}
              className="w-full h-full object-cover"
            />
          </div>
          <CardHeader>
            <CardTitle className="text-lg">{CASE_STUDY.title}</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-neutral-700 space-y-4">
            <div className="flex flex-wrap items-center gap-3">
              <span className="px-2 py-0.5 rounded-full border text-xs">
                {t.work.role}: {CASE_STUDY.role.join(", ")}
              </span>
              <span className="px-2 py-0.5 rounded-full border text-xs">
                {t.work.year}: {CASE_STUDY.year}
              </span>
              <a
                className="inline-flex items-center text-neutral-700 hover:text-neutral-900"
                href={CASE_STUDY.figma}
                target="_blank"
                rel="noreferrer"
              >
                <Globe className="w-4 h-4 mr-1" /> Figma
              </a>
            </div>

            <div>
              <h4 className="font-medium">{t.work.impact}</h4>
              <ul className="list-disc pl-5 mt-2 space-y-1 text-neutral-700">
                {(lang === "en"
                  ? CASE_STUDY.impactEN
                  : CASE_STUDY.impactSR
                ).map((i, idx) => (
                  <li key={idx}>{i}</li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-medium">{t.work.responsibilities}</h4>
              <ul className="list-disc pl-5 mt-2 space-y-1 text-neutral-700">
                {(lang === "en"
                  ? CASE_STUDY.responsibilitiesEN
                  : CASE_STUDY.responsibilitiesSR
                ).map((i, idx) => (
                  <li key={idx}>{i}</li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-medium">{t.work.process}</h4>
              <div className="grid md:grid-cols-3 gap-4 mt-2">
                {(lang === "en"
                  ? CASE_STUDY.processEN
                  : CASE_STUDY.processSR
                ).map((s, idx) => (
                  <div key={idx} className="p-4 border rounded-xl">
                    <div className="text-sm font-semibold">{s.h}</div>
                    <div className="text-neutral-700 mt-1">{s.p}</div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-medium">{t.work.results}</h4>
              <ul className="list-disc pl-5 mt-2 space-y-1 text-neutral-700">
                {(lang === "en"
                  ? CASE_STUDY.resultsEN
                  : CASE_STUDY.resultsSR
                ).map((i, idx) => (
                  <li key={idx}>{i}</li>
                ))}
              </ul>
            </div>

            <div className="pt-2">
              <Button onClick={() => setShowCase(true)}>
                {t.work.viewCase}
              </Button>
            </div>
          </CardContent>
        </Card>

        {showCase && (
          <div
            className="fixed inset-0 z-40 bg-black/40 flex items-center justify-center p-4"
            onClick={() => setShowCase(false)}
          >
            <div
              className="bg-white rounded-2xl max-w-3xl w-full p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between">
                <div className="font-semibold">{CASE_STUDY.title}</div>
                <Button variant="ghost" onClick={() => setShowCase(false)}>
                  Close
                </Button>
              </div>
              <div className="mt-4 space-y-4 text-sm text-neutral-700">
                <p>{lang === "en" ? "Available soon." : "Uskoro dostupno."}</p>
                {/* <a
                  href={CASE_STUDY.figma}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center text-neutral-800 border rounded-lg px-3 py-2 w-fit hover:bg-neutral-50"
                >
                  <ExternalLink className="w-4 h-4 mr-2" /> Open Figma file
                </a> */}
              </div>
            </div>
          </div>
        )}
      </Section>

      {/* Contact */}
      <Section id="contact">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
          {t.contact.title}
        </h2>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <Button
            variant="outline"
            onClick={() =>
              (window.location.href = "mailto:marijamasalovic9@gmail.com")
            }
          >
            <Mail className="w-4 h-4 mr-2" />
            {t.contact.email}
          </Button>
          <Button
            variant="outline"
            onClick={() => (window.location.href = "tel:+381601929232")}
          >
            <Phone className="w-4 h-4 mr-2" />
            {t.contact.phone}
          </Button>
        </div>
        <p className="mt-6 text-xs text-neutral-500">
          © {new Date().getFullYear()} Marija Masalović — built with React,
          Tailwind, and Framer Motion.
        </p>
      </Section>
    </div>
  );
}
