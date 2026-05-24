import { TextChanging } from "./TextChanging";
import { ScrollCTA } from "./ScrollCTA";

export const HeroSection = () => {
  return (
    <section
      id="top"
      className="grow p-5 px-15 relative bg-[linear-gradient(145deg,#ffffff_0%,#f0f0f0_25%,#e8e8ff_55%,#c8c6fb_100%)]"
    >
      <div className="absolute bottom-12">
        <strong className=" text-5xl">Andres/</strong>
        <TextChanging />
        <ScrollCTA />
      </div>
    </section>
  );
};
