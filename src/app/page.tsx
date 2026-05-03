import { CursorGlow, Navigation } from "@/features/layout";
import { HeroSection } from "@/features/hero";

export default function Home() {
  return (
    <div className="min-h-[200dvh] bg-linear-to-br overflow-x-hidden">

      <CursorGlow />
      <div className="flex flex-col h-dvh pt-18">
        <Navigation />
        <HeroSection />
      </div>
      <div className="h-dvh bg-brand"></div>
      <div className="h-dvh"></div>
      Hello world
    </div>
  );
}
