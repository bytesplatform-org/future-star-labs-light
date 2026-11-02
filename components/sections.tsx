import Image from "next/image";
import type { CSSProperties, ReactNode } from "react";
import orbit from "@/assets/images/orbit.jpg";
import equations from "@/assets/images/equations.jpg";
import bactesign from "@/assets/images/bactesign.jpg";
import seedlings from "@/assets/images/seedlings.jpg";
import { frontiers, groups, method, site, subjects } from "@/lib/content";
import { Frontiers } from "./frontiers";
import { Helix } from "./helix";
import { Lines, Words } from "./type";

const d = (ms: number) => ({ "--d": ms }) as CSSProperties;

/** Section label: "(02) — Method" */
function Label({ n, children, className = "" }: { n: string; children: ReactNode; className?: string }) {
  return (
    <p className={`meta flex items-center gap-3 ${className}`}>
      <span className="text-cyan">({n})</span>
      <span aria-hidden="true" className="h-px w-6 bg-current opacity-40" />
      <span>{children}</span>
    </p>
  );
}

/* ================================================================ HERO */
export function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="relative flex min-h-[100svh] flex-col pt-20 md:pt-[6.5rem]"
    >
      <div className="wrap fade-in">
        <div className="grid grid-cols-12 gap-x-5 border-b border-line pb-3 text-muted">
          <p className="meta col-span-8 md:col-span-4">Integration strategy<span className="hidden sm:inline"> for frontier science</span></p>
          <p className="meta col-span-5 hidden md:col-span-5 md:block">
            {frontiers.map((f) => f.name.split(" ")[0]).join(" · ")}
          </p>
          <p className="meta col-span-4 text-right md:col-span-3">N° 001<span className="hidden sm:inline"> — First principles</span></p>
        </div>
      </div>

      <div className="wrap flex flex-1 flex-col justify-center py-10 md:py-12">
        <h1
          id="hero-title"
          className="display text-[clamp(3.25rem,11.6vw,13rem)] text-ink"
        >
          <Lines
            lines={[
              "Frontier science,",
              <span key="b" className="block pl-[12vw] md:pl-[17vw]">
                <em className="text-cyan">translated</em> into
              </span>,
              "strategy.",
            ]}
          />
        </h1>
      </div>

      {/* The helix: research and enterprise as two strands, integration as the rungs */}
      <figure className="relative fade-in" style={d(500)}>
        <Helix className="block h-[16vh] min-h-[110px] w-full md:h-[20vh]" />
        <figcaption className="wrap mt-3 flex justify-between text-muted">
          <span className="meta flex items-center gap-2">
            <span aria-hidden="true" className="inline-block h-px w-5 bg-ink" /> Research
          </span>
          <span className="meta hidden sm:inline">Fig. 00 — Integration holds the strands together</span>
          <span className="meta flex items-center gap-2">
            Enterprise <span aria-hidden="true" className="inline-block h-px w-5 bg-cyan" />
          </span>
        </figcaption>
      </figure>

      <div className="wrap fade-in pb-8 pt-10 md:pb-10 md:pt-14" style={d(700)}>
        <div className="grid grid-cols-12 items-end gap-x-5 gap-y-8">
          <p className="col-span-12 max-w-[30rem] text-[1.0625rem] leading-relaxed text-ink-2 md:col-span-6 lg:col-span-5">
            Future Star Labs is a consulting practice that helps organisations adopt
            nanotechnology, biomedical engineering, blockchain, nanoelectronics and
            aerospace — using first-principles analysis to turn research into a road map.
          </p>
          <a
            href="#practice"
            className="group col-span-12 flex items-center gap-4 justify-self-start md:col-span-3 md:col-start-10 md:justify-self-end"
          >
            <span className="meta">Scroll to begin</span>
            <span aria-hidden="true" className="relative block h-10 w-px overflow-hidden bg-line">
              <span className="absolute inset-x-0 top-0 h-1/2 animate-[scrollcue_2.4s_var(--ease-in-out)_infinite] bg-ink" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

/* ================================================================ 01 THE GAP */
export function Gap() {
  return (
    <section id="practice" aria-labelledby="gap-title" className="pt-28 md:pt-48">
      <div className="wrap grid grid-cols-12 gap-x-5 gap-y-8">
        <div className="col-span-12 md:col-span-3">
          <Label n="01" className="text-muted md:sticky md:top-28">The gap</Label>
        </div>
        <h2 id="gap-title" className="sr-only">Where breakthroughs stall</h2>
        <Words
          className="display col-span-12 text-[clamp(2.1rem,4.6vw,4.9rem)] !leading-[1.04] md:col-span-9"
          text="Breakthroughs rarely fail in the laboratory. They stall in the distance between what science can do and what an organisation is ready to adopt. Future Star Labs works in _that _distance."
        />
      </div>

      <div className="wrap mt-20 grid grid-cols-12 gap-x-5 gap-y-10 md:mt-32">
        <figure className="col-span-12 md:col-span-8">
          <div data-reveal="image" className="relative aspect-[4/3] overflow-hidden bg-paper-2 md:aspect-[16/10]">
            <div data-parallax="0.08" className="absolute inset-[-8%_0]">
              <Image
                src={orbit}
                alt="Earth's cloud cover seen from orbit, with part of a spacecraft in frame"
                fill
                sizes="(min-width: 1680px) 1080px, (min-width: 768px) 66vw, 100vw"
                placeholder="blur"
                className="object-cover"
              />
            </div>
          </div>
          <figcaption className="mt-3 flex justify-between gap-6 text-muted">
            <span className="meta shrink-0">Fig. 01</span>
            <span className="meta">See the whole system before choosing the part</span>
          </figcaption>
        </figure>

        <div className="col-span-12 flex flex-col justify-end gap-6 md:col-span-4 md:pl-6 lg:pl-12">
          <p data-reveal="up" className="text-[1.0625rem] leading-relaxed text-ink-2">
            We are a consulting company focused on integration strategy. Our work begins
            with market research and project scoping, and ends with something an
            executive team can act on: a road map for strategic adoption.
          </p>
          <p data-reveal="up" style={d(120)} className="text-[1.0625rem] leading-relaxed text-muted">
            Between those two points sits the part most firms skip — reducing a technology
            to what is physically, chemically and economically true.
          </p>
          <span data-reveal="rule" style={d(200)} className="block h-px w-full bg-line-strong" />
          <dl className="grid grid-cols-2 gap-4" data-reveal="up" style={d(260)}>
            <div>
              <dt className="meta text-muted">Practice</dt>
              <dd className="mt-1 text-sm">Integration strategy</dd>
            </div>
            <div>
              <dt className="meta text-muted">Frontiers</dt>
              <dd className="mt-1 text-sm">Five disciplines</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}

/* ================================================================ 02 METHOD */
export function Method() {
  return (
    <section id="method" aria-labelledby="method-title" className="pt-32 md:pt-56">
      <div className="wrap grid grid-cols-12 gap-x-5 gap-y-14">
        <div className="col-span-12 lg:col-span-5">
          <div className="lg:sticky lg:top-28">
            <Label n="02" className="text-muted">Method</Label>
            <h2
              id="method-title"
              data-reveal="lines"
              className="display mt-8 text-[clamp(2.8rem,6vw,6rem)]"
            >
              <Lines lines={["First principles,", <em key="t">then</em>, "a road map."]} />
            </h2>
            <p data-reveal="up" style={d(200)} className="mt-8 max-w-[26rem] text-[1.0625rem] leading-relaxed text-muted">
              Four stages, always in this order. Each one produces something you can hold,
              question and keep.
            </p>
          </div>
        </div>

        <div className="relative col-span-12 lg:col-span-6 lg:col-start-7" data-progress="">
          {/* progress spine */}
          <span aria-hidden="true" className="absolute left-0 top-0 hidden h-full w-px bg-line md:block">
            <span className="absolute inset-0 origin-top bg-ink [transform:scaleY(var(--p,1))]" />
          </span>
          <ol className="md:pl-12">
            {method.map((s, i) => (
              <li
                key={s.n}
                data-reveal="up"
                style={d(i * 60)}
                className="grid grid-cols-[3rem_1fr] gap-x-4 border-t border-line py-10 first:border-t-0 first:pt-0 md:grid-cols-[5.5rem_1fr] md:py-14"
              >
                <span className="display text-[2rem] text-cyan md:text-[3.25rem]" aria-hidden="true">
                  {s.n}
                </span>
                <div>
                  <h3 className="display text-[2rem] !leading-[1.05] md:text-[2.75rem]">
                    <span className="sr-only">Step {s.n}: </span>
                    {s.title}
                  </h3>
                  <p className="mt-4 max-w-[32rem] text-[1.0625rem] leading-relaxed text-muted">{s.body}</p>
                  <p className="meta mt-6 flex items-center gap-3 text-ink">
                    <span aria-hidden="true">→</span> Output: {s.output}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

/* ================================================================ INTERLUDE */
export function Interlude() {
  return (
    <section
      aria-label="Principle"
      className="relative mt-32 h-[88svh] overflow-hidden bg-ink text-paper md:mt-56 md:h-[118svh]"
    >
      <div data-parallax="0.2" className="absolute inset-x-0 -inset-y-[14%]">
        <Image
          src={equations}
          alt=""
          fill
          sizes="100vw"
          placeholder="blur"
          className="object-cover opacity-55"
        />
      </div>
      <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(180deg,rgb(11_27_58/0.55)_0%,rgb(11_27_58/0.05)_40%,rgb(11_27_58/0.85)_100%)]" />

      <div className="wrap relative flex h-full flex-col justify-between py-24 md:py-28">
        <div className="flex justify-between text-paper/70">
          <span className="meta">Fig. 02 — Interlude</span>
          <span className="meta hidden sm:inline">Physics · Chemistry · Mathematics</span>
        </div>
        <blockquote data-reveal="lines" className="display text-[clamp(3.2rem,10.5vw,12rem)]">
          <Lines
            stagger={140}
            lines={[
              "Start with",
              <span key="b">
                what is <em className="text-cyan-soft">true.</em>
              </span>,
              <span key="c" className="block text-right">Build from there.</span>,
            ]}
          />
        </blockquote>
        <div className="flex items-end justify-between gap-6 text-paper/70">
          <p className="max-w-[22rem] text-sm leading-relaxed">
            Hype compounds; so do fundamentals. We only recommend what still holds after
            the assumptions are removed.
          </p>
          <span className="meta shrink-0">FSL / Method</span>
        </div>
      </div>
    </section>
  );
}

/* ================================================================ 03 FRONTIERS */
export function FrontiersSection() {
  return (
    <section id="frontiers" aria-labelledby="frontiers-title" className="pt-32 md:pt-48">
      <div className="wrap">
        <div className="grid grid-cols-12 gap-x-5 gap-y-8 pb-14 md:pb-20">
          <Label n="03" className="col-span-12 text-muted md:col-span-3">Frontiers</Label>
          <h2
            id="frontiers-title"
            data-reveal="lines"
            className="display col-span-12 text-[clamp(2.8rem,6vw,6.25rem)] md:col-span-9"
          >
            <Lines lines={["Five frontiers.", <em key="b">One way of thinking.</em>]} />
          </h2>
          <p
            data-reveal="up"
            className="col-span-12 max-w-[30rem] text-[1.0625rem] leading-relaxed text-muted md:col-span-6 md:col-start-4"
          >
            Different materials, markets and timelines — the same discipline applied to each.
            These are the fields where we advise on integration.
          </p>
        </div>
        <Frontiers />
      </div>
    </section>
  );
}

/* ================================================================ 04 LAB */
export function Lab() {
  return (
    <section id="lab" aria-labelledby="lab-title" className="pt-32 md:pt-56">
      <div className="wrap">
        <div className="grid grid-cols-12 items-end gap-x-5 gap-y-8 border-b border-line pb-10">
          <div className="col-span-12 md:col-span-8">
            <Label n="04" className="text-muted">The lab</Label>
            <h2
              id="lab-title"
              data-reveal="lines"
              className="display mt-8 text-[clamp(3.4rem,10vw,10.5rem)]"
            >
              <Lines lines={[<>From the <em>bench.</em></>]} />
            </h2>
          </div>
          <p data-reveal="up" className="col-span-12 max-w-[22rem] text-[1.0625rem] leading-relaxed text-muted md:col-span-4 md:justify-self-end">
            Not every idea arrives with a client. Some start here, as instruments we build to
            test our own thinking.
          </p>
        </div>

        {/* Project 01 */}
        <article aria-labelledby="p1" className="grid grid-cols-12 gap-x-5 gap-y-8 pt-12 md:pt-20">
          <figure className="col-span-12 md:col-span-7">
            <div data-reveal="image" className="relative aspect-[5/4] overflow-hidden bg-paper-2">
              <Image
                src={bactesign}
                alt="A researcher in blue gloves pipetting samples into a row of vials"
                fill
                sizes="(min-width: 1680px) 940px, (min-width: 768px) 58vw, 100vw"
                placeholder="blur"
                className="object-cover"
              />
            </div>
          </figure>
          <div className="col-span-12 md:col-span-4 md:col-start-9 md:pt-[22%]">
            <p className="meta text-muted" data-reveal="up">Project 01 — Biomedical</p>
            <h3 id="p1" data-reveal="lines" className="display mt-5 text-[clamp(2.8rem,5vw,5rem)]">
              <Lines lines={["BacteSign"]} />
            </h3>
            <p data-reveal="up" style={d(100)} className="mt-6 text-[1.0625rem] leading-relaxed text-ink-2">
              A new tool for doctors and scientists analysing infectious diseases. Search by
              antibiotic type and antibiotic mass to test bacterial susceptibility — and
              shorten the path from sample to decision.
            </p>
            <dl data-reveal="up" style={d(180)} className="mt-10 border-t border-line text-sm">
              {[
                ["Status", "Working demonstration"],
                ["For", "Clinicians & researchers"],
                ["Inputs", "Antibiotic type · mass"],
              ].map(([k, v]) => (
                <div key={k} className="flex justify-between gap-4 border-b border-line py-3">
                  <dt className="meta text-muted">{k}</dt>
                  <dd className="text-right">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </article>

        {/* Project 02 */}
        <article aria-labelledby="p2" className="grid grid-cols-12 gap-x-5 gap-y-8 pt-24 md:pt-40">
          <div className="order-2 col-span-12 md:order-1 md:col-span-4 md:self-end">
            <p className="meta text-muted" data-reveal="up">Project 02 — Agritech</p>
            <h3 id="p2" data-reveal="lines" className="display mt-5 text-[clamp(2.8rem,5vw,5rem)]">
              <Lines lines={["Urban", <em key="s">sensing</em>]} />
            </h3>
            <p data-reveal="up" style={d(100)} className="mt-6 text-[1.0625rem] leading-relaxed text-ink-2">
              Urban farming is rising as city space shrinks, and operators are beginning to
              combine agriculture with real estate. We are developing sensors for soil and
              environmental data collection — the instrumentation that makes small plots
              behave like managed systems.
            </p>
            <dl data-reveal="up" style={d(180)} className="mt-10 border-t border-line text-sm">
              {[
                ["Status", "In development"],
                ["Measures", "Soil · environment"],
                ["Context", "Urban & vertical farming"],
              ].map(([k, v]) => (
                <div key={k} className="flex justify-between gap-4 border-b border-line py-3">
                  <dt className="meta text-muted">{k}</dt>
                  <dd className="text-right">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
          <figure className="order-1 col-span-12 md:order-2 md:col-span-7 md:col-start-6">
            <div data-reveal="image" className="relative aspect-[3/2] overflow-hidden bg-paper-2">
              <Image
                src={seedlings}
                alt="A hand planting seedlings into a tray of soil cells"
                fill
                sizes="(min-width: 1680px) 940px, (min-width: 768px) 58vw, 100vw"
                placeholder="blur"
                className="object-cover"
              />
            </div>
          </figure>
        </article>
      </div>
    </section>
  );
}

/* ================================================================ 05 SUBJECTS */
const dot: Record<string, string> = {
  p: "bg-ink",
  l: "bg-cyan",
  c: "border border-ink bg-transparent",
};

export function Subjects() {
  return (
    <section id="subjects" aria-labelledby="subjects-title" className="pt-32 md:pt-56">
      <div className="wrap">
        <div className="grid grid-cols-12 gap-x-5 gap-y-8 pb-12 md:pb-16">
          <Label n="05" className="col-span-12 text-muted md:col-span-3">Subjects</Label>
          <h2
            id="subjects-title"
            data-reveal="lines"
            className="display col-span-12 text-[clamp(2.6rem,5.4vw,5.5rem)] md:col-span-9"
          >
            <Lines lines={["Fourteen subjects", <><em>we keep</em> returning to.</>]} />
          </h2>
        </div>

        <ol className="grid grid-cols-2 gap-px border border-line bg-line sm:grid-cols-4 lg:grid-cols-7">
          {subjects.map((s, i) => (
            <li
              key={s.sym}
              className="group relative aspect-[1/1] bg-paper p-3 transition-colors duration-500 hover:bg-ink hover:text-paper md:p-4"
            >
              <div data-reveal="up" style={d((i % 7) * 60)} className="flex h-full flex-col justify-between">
              <div className="flex items-start justify-between">
                <span className="meta text-muted transition-colors group-hover:text-paper/60">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span
                  aria-hidden="true"
                  className={`mt-0.5 block size-2 rounded-full ${dot[s.g]} group-hover:border-paper`}
                />
              </div>
              <span
                aria-hidden="true"
                className="display text-[clamp(3rem,5vw,4.5rem)] transition-transform duration-700 ease-[var(--ease-out)] group-hover:-translate-y-1"
              >
                {s.sym}
              </span>
              <span className="text-[0.8125rem] leading-tight">{s.name}</span>
              </div>
            </li>
          ))}
        </ol>
        <ul className="mt-6 flex flex-wrap gap-x-8 gap-y-2" aria-label="Legend">
          {Object.entries(groups).map(([k, v]) => (
            <li key={k} className="meta flex items-center gap-2 text-muted">
              <span aria-hidden="true" className={`block size-2 rounded-full ${dot[k]}`} />
              {v}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ================================================================ 06 TALENT */
const talent = [
  { label: "Postdoctoral positions", v: 48, tone: "bg-cyan" },
  { label: "Private sector", v: 38, tone: "bg-paper" },
  { label: "Other temporary roles", v: 8, tone: "bg-paper/45" },
  { label: "Unemployed the following winter", v: 6, tone: "bg-paper/20" },
];

export function Talent() {
  return (
    <section
      aria-labelledby="talent-title"
      className="mt-32 bg-ink py-28 text-paper md:mt-56 md:py-44"
    >
      <div className="wrap">
        <div className="grid grid-cols-12 gap-x-5 gap-y-10">
          <div className="col-span-12 md:col-span-3">
            <Label n="06" className="text-paper/60">Talent</Label>
          </div>
          <h2
            id="talent-title"
            data-reveal="lines"
            className="display col-span-12 text-[clamp(2.8rem,6.4vw,6.75rem)] md:col-span-9"
          >
            <Lines lines={["The talent exists.", <em key="b" className="text-cyan-soft">The translation doesn’t.</em>]} />
          </h2>
        </div>

        <div className="mt-20 grid grid-cols-12 gap-x-5 gap-y-14 md:mt-32">
          <div className="col-span-12 md:col-span-5" data-reveal="up">
            <p className="display text-[clamp(6rem,15vw,15rem)] !leading-[0.8] tracking-[-0.05em]">
              2,000
            </p>
            <p className="mt-6 max-w-[22rem] text-[1.0625rem] leading-relaxed text-paper/75">
              Roughly how many physics PhDs graduate in the United States each year. About
              15% leave the country — leaving some 1,700 to find their place here.
            </p>
          </div>

          <div className="col-span-12 md:col-span-6 md:col-start-7">
            <p className="meta mb-6 text-paper/60">Where the ~1,700 go</p>
            <ul data-reveal="bars" className="border-t border-paper/20">
              {talent.map((t, i) => (
                <li key={t.label} className="border-b border-paper/20 py-5">
                  <div className="flex items-baseline justify-between gap-4">
                    <span className="text-[0.9375rem]">{t.label}</span>
                    <span className="display text-[2rem] tabular-nums">{t.v}%</span>
                  </div>
                  <div aria-hidden="true" className="mt-3 h-[3px] w-full bg-paper/10">
                    <div
                      className={`bar h-full ${t.tone}`}
                      style={{ width: `${(t.v / 48) * 100}%`, ...d(i * 140) }}
                    />
                  </div>
                </li>
              ))}
            </ul>
            <p className="mt-10 max-w-[30rem] text-[1.0625rem] leading-relaxed text-paper/75">
              A deep bench of scientific talent enters a market that doesn’t yet know how
              to use it. Bridging that gap — from research to roles, from papers to
              products — is part of the work.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================================================================ 07 CAPITAL */
export function Capital() {
  return (
    <section aria-labelledby="capital-title" className="pt-32 md:pt-48">
      <div className="wrap">
        <div className="grid grid-cols-12 gap-x-5 gap-y-8 pb-12 md:pb-20">
          <Label n="07" className="col-span-12 text-muted md:col-span-3">Before you invest</Label>
          <h2 id="capital-title" data-reveal="up" className="col-span-12 max-w-[34rem] text-[1.25rem] leading-snug md:col-span-6 md:text-[1.5rem]">
            When beginning any venture, we ask two questions of every resource committed
            to it.
          </h2>
        </div>

        <div className="border-t border-line">
          <div className="grid grid-cols-12 gap-x-5 py-10 md:py-16">
            <span className="meta col-span-12 mb-4 text-cyan md:col-span-2 md:mb-0 md:pt-6">Q.1</span>
            <p data-reveal="lines" className="display col-span-12 text-[clamp(2.6rem,7.4vw,8rem)] md:col-span-10">
              <Lines lines={["What does the money", <em key="b">buy you?</em>]} />
            </p>
          </div>
          <span data-reveal="rule" className="block h-px w-full bg-line" />
          <div className="grid grid-cols-12 gap-x-5 py-10 md:py-16">
            <span className="meta col-span-12 mb-4 text-cyan md:col-span-2 md:col-start-3 md:mb-0 md:pt-6 md:text-right">Q.2</span>
            <p data-reveal="lines" className="display col-span-12 text-[clamp(2.6rem,7.4vw,8rem)] md:col-span-8 md:col-start-5">
              <Lines lines={["How long until", <>it <em>comes back?</em></>]} />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================================================================ 08 CONTACT */
export function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="relative mt-32 overflow-hidden bg-paper-2 pt-24 md:mt-48 md:pt-36"
    >
      <div className="wrap">
        <Label n="08" className="text-muted">Contact</Label>
        <h2
          id="contact-title"
          data-reveal="lines"
          className="display mt-10 text-[clamp(3.4rem,11vw,12.5rem)]"
        >
          <Lines
            lines={[
              "Bring us",
              "the problem.",
              <em key="c" className="mt-3 block text-[0.52em] text-cyan md:mt-0 md:pl-[36%]">We’ll bring the physics.</em>,
            ]}
          />
        </h2>
      </div>

      <Helix className="mt-14 block h-[14vh] min-h-[90px] w-full md:mt-20" wavelength={700} speed={0.00025} />

      <div className="wrap grid grid-cols-12 gap-x-5 gap-y-12 pb-24 pt-14 md:pb-32 md:pt-20">
        <div className="col-span-12 md:col-span-6">
          <a
            href={site.social.linkedin}
            target="_blank"
            rel="noopener"
            className="group inline-flex items-baseline gap-4 border-b border-ink pb-2"
          >
            <span className="display text-[clamp(2rem,4vw,3.5rem)]">Start a conversation</span>
            <span className="arrow text-2xl">↗</span>
          </a>
          <p className="mt-6 max-w-[26rem] text-[1.0625rem] leading-relaxed text-muted">
            Tell us the technology you’re weighing and the decision you need to make.
            We’ll tell you what holds.
          </p>
        </div>
        <div className="col-span-12 md:col-span-4 md:col-start-9">
          <p className="meta text-muted">Livestreams</p>
          <p className="mt-3 text-[1.0625rem] leading-relaxed">
            Follow us to watch our regular livestreams on the science behind the strategy.
          </p>
          <ul className="mt-6 border-t border-line">
            {[
              ["Instagram", site.social.instagram, "@futurestar33"],
              ["X", site.social.x, "@FutureStar33"],
              ["LinkedIn", site.social.linkedin, "Profile"],
            ].map(([k, href, handle]) => (
              <li key={k} className="border-b border-line">
                <a
                  href={href}
                  target="_blank"
                  rel="noopener"
                  className="group flex items-center justify-between py-3.5 text-[0.9375rem]"
                >
                  <span>{k}</span>
                  <span className="flex items-center gap-3 text-muted transition-colors group-hover:text-ink">
                    <span className="meta">{handle}</span>
                    <span className="arrow">↗</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ================================================================ FOOTER */
export function Footer() {
  return (
    <footer className="bg-ink text-paper">
      <div className="wrap grid grid-cols-12 gap-x-5 gap-y-10 pb-10 pt-20 md:pt-28">
        <p className="col-span-12 max-w-[24rem] text-[1.0625rem] leading-relaxed text-paper/75 md:col-span-5">
          Integration strategy for nanotechnology, biomedical engineering, blockchain,
          nanoelectronics and aerospace.
        </p>
        <nav aria-label="Footer" className="col-span-6 md:col-span-2 md:col-start-8">
          <p className="meta mb-4 text-paper/50">Index</p>
          <ul className="space-y-2 text-[0.9375rem]">
            {[
              ["Method", "#method"],
              ["Frontiers", "#frontiers"],
              ["Lab", "#lab"],
              ["Subjects", "#subjects"],
              ["Contact", "#contact"],
            ].map(([l, h]) => (
              <li key={h}>
                <a className="link-line" href={h}>{l}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="col-span-6 md:col-span-2">
          <p className="meta mb-4 text-paper/50">Follow</p>
          <ul className="space-y-2 text-[0.9375rem]">
            <li><a className="link-line" href={site.social.linkedin} target="_blank" rel="noopener">LinkedIn</a></li>
            <li><a className="link-line" href={site.social.instagram} target="_blank" rel="noopener">Instagram</a></li>
            <li><a className="link-line" href={site.social.x} target="_blank" rel="noopener">X</a></li>
          </ul>
        </div>
      </div>
      <div className="wrap overflow-hidden">
        <p
          aria-hidden="true"
          className="display whitespace-nowrap text-[clamp(3rem,14.9vw,17rem)] !leading-[0.85] text-paper"
        >
          Future Star <em className="text-cyan-soft">Labs</em>
        </p>
      </div>
      <div className="wrap flex flex-col justify-between gap-2 border-t border-paper/15 py-6 text-paper/50 sm:flex-row">
        <p className="meta">© 2026 Future Star Labs. All rights reserved.</p>
        <a href="#top" className="meta link-line self-start text-paper/70">Back to top ↑</a>
      </div>
    </footer>
  );
}
