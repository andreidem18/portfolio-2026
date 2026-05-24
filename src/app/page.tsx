import { CursorGlow, Navigation } from "@/features/layout";
import { HeroSection } from "@/features/hero";
import { AboutMeSection } from "@/features/aboutMe";
import { Experience } from "@/features/experience";
import { Testimonials } from "@/features/testimonials";
import { ProjectsSection } from "@/features/projects";
import { MyStackSection } from "@/features/stack/components/MyStackSection";
import { CTASection } from "@/features/CTA";
import { Footer } from "@/features/footer";

export default function Home() {
  return (
    <div className="min-h-[200dvh] bg-linear-to-br ">

      <CursorGlow />
      <div className="flex flex-col h-dvh pt-18">
        <Navigation />
        <HeroSection />
      </div>
      <AboutMeSection />
      <Experience />
      <MyStackSection />
      <ProjectsSection />
      <Testimonials />
      <CTASection />
      <Footer />
    </div>
  );
}
