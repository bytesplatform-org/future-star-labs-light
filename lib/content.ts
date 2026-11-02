import type { StaticImageData } from "next/image";
import microscopes from "@/assets/images/microscopes.jpg";
import cells from "@/assets/images/cells.jpg";
import network from "@/assets/images/network.jpg";
import engineer from "@/assets/images/engineer.jpg";
import launch from "@/assets/images/launch.jpg";

export const site = {
  name: "Future Star Labs",
  url: "https://futurestarlabs.com",
  description:
    "Future Star Labs is a consulting practice for integration strategy in nanotechnology, biomedical engineering, blockchain, nanoelectronics and aerospace — turning market research and first-principles analysis into road maps for adoption.",
  social: {
    linkedin: "https://www.linkedin.com/in/andre-childs-69659478/",
    instagram: "https://www.instagram.com/futurestar33/",
    x: "https://www.x.com/FutureStar33",
  },
};

export const nav = [
  { n: "02", label: "Method", href: "#method" },
  { n: "03", label: "Frontiers", href: "#frontiers" },
  { n: "04", label: "Lab", href: "#lab" },
  { n: "05", label: "Subjects", href: "#subjects" },
  { n: "08", label: "Contact", href: "#contact" },
];

export const method = [
  {
    n: "01",
    title: "Market research",
    body: "We map the landscape before the technology — who is adopting, what it costs, and where the value actually lands.",
    output: "Landscape brief",
  },
  {
    n: "02",
    title: "Project scoping",
    body: "We define the problem precisely enough that physics, chemistry and data — not momentum — can answer it.",
    output: "Scope & constraints",
  },
  {
    n: "03",
    title: "First-principles analysis",
    body: "We reduce the opportunity to its fundamentals — materials, energy, biology, information — and rebuild only from what holds.",
    output: "Feasibility model",
  },
  {
    n: "04",
    title: "Road map for adoption",
    body: "We sequence the integration: what to pilot now, what to partner on, and what to deliberately wait for.",
    output: "Strategic road map",
  },
];

export type Frontier = {
  n: string;
  name: string;
  body: string;
  tags: string[];
  image: StaticImageData;
  alt: string;
};

export const frontiers: Frontier[] = [
  {
    n: "01",
    name: "Nanotechnology",
    body: "Materials engineered at the scale of atoms — thin films, colloids and interfaces, and the structures that give matter new behaviour.",
    tags: ["Thin films", "Meta optics", "Colloids"],
    image: microscopes,
    alt: "A row of optical microscopes on a laboratory bench",
  },
  {
    n: "02",
    name: "Biomedical engineering",
    body: "Diagnostics and electrophysiology — the instruments clinicians and researchers rely on to decide faster and with more certainty.",
    tags: ["Diagnostics", "Electrophysiology"],
    image: cells,
    alt: "Fluorescence micrograph of cells stained blue and magenta",
  },
  {
    n: "03",
    name: "Blockchain",
    body: "Distributed ledgers assessed as infrastructure rather than speculation — useful wherever trust is the expensive part of a system.",
    tags: ["Ledgers", "Data analysis"],
    image: network,
    alt: "City lights forming a network across the Earth at night, seen from orbit",
  },
  {
    n: "04",
    name: "Nanoelectronics",
    body: "Thermoelectrics, devices and vacuum systems — the hardware frontier where conventional silicon begins to run out of road.",
    tags: ["Thermoelectrics", "Vacuum systems"],
    image: engineer,
    alt: "An engineer working at a laptop inside an electronics test rig",
  },
  {
    n: "05",
    name: "Aerospace",
    body: "Thermodynamics, materials and robotics for environments that tolerate no error and reward every gram saved.",
    tags: ["Thermodynamics", "Robotics"],
    image: launch,
    alt: "A rocket lifting off from a launch pad above a plume of exhaust",
  },
];

/* The fourteen subjects from the Future Star Labs curriculum, set as a
   periodic table. `g` groups them: p = physical, l = life, c = computational. */
export const subjects = [
  { sym: "Ph", name: "Physics", g: "p" },
  { sym: "Ch", name: "Chemistry", g: "p" },
  { sym: "Td", name: "Thermodynamics", g: "p" },
  { sym: "Te", name: "Thermoelectrics", g: "p" },
  { sym: "Tf", name: "Thin Films", g: "p" },
  { sym: "Mo", name: "Meta Optics", g: "p" },
  { sym: "Ms", name: "Material Structures", g: "p" },
  { sym: "Ci", name: "Colloids & Interfaces", g: "p" },
  { sym: "Vs", name: "Vacuum Systems", g: "p" },
  { sym: "Ep", name: "Electrophysiology", g: "l" },
  { sym: "Hb", name: "Keeping a Healthy Body", g: "l" },
  { sym: "Rb", name: "Robotics", g: "c" },
  { sym: "Da", name: "Data Analysis", g: "c" },
  { sym: "Bc", name: "Blockchain", g: "c" },
] as const;

export const groups = {
  p: "Physical sciences",
  l: "Life sciences",
  c: "Computation & systems",
} as const;
