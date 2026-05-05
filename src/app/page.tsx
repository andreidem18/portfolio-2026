import { CursorGlow, Navigation } from "@/features/layout";
import { HeroSection } from "@/features/hero";
import { AboutMeSection } from "@/features/aboutMe";
import { Experience } from "@/features/experience";

export default function Home() {
  return (
    <div className="min-h-[200dvh] bg-linear-to-br overflow-x-hidden">

      <CursorGlow />
      <div className="flex flex-col h-dvh pt-18">
        <Navigation />
        <HeroSection />
      </div>
      <AboutMeSection />
      <Experience />
      <div className="h-dvh"></div>
      Hello world
    </div>
  );
}
