import { Hero, Storytelling, Carte, Contact } from "@/ui/slices";
import { Footer } from "@/ui/components";
export default function Home() {
  return (
    <>
      <Hero />
      <Storytelling />
      <Carte />
      <Contact />
      <Footer />
    </>
  );
}
