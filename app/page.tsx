import { Header } from "@/components/header";
import {
  Capital,
  Contact,
  Footer,
  FrontiersSection,
  Gap,
  Hero,
  Interlude,
  Lab,
  Method,
  Subjects,
  Talent,
} from "@/components/sections";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <Gap />
        <Method />
        <Interlude />
        <FrontiersSection />
        <Lab />
        <Subjects />
        <Talent />
        <Capital />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
