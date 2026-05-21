"use client";

import { useTranslations } from "next-intl";
import { testimonialsData } from "../data/testimonials.data";
import { TestimonialExpanded } from "./TestimonialExpanded";
import { TestimonialCard } from "./TestimonialCard";
import { Progress } from "@/components/ui/progress";
import { useTestimonials } from "../hooks/useTestimonials";

export const Testimonials = () => {
  const t = useTranslations("testimonials");
  const {
    currentTestimonial,
    progressValue,
    sectionRef,
    setTestimonialSelected,
    testimonialSelected,
    trackRef,
    viewportRef,
  } = useTestimonials();

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="flex flex-col justify-center gap-4 py-10 h-dvh bg-brand"
    >
      <h3 className="text-[clamp(1.5rem,3.2vw,2.25rem)] max-w-130 leading-[110%] pb-4 text-white  px-10">
        {t.rich("title", { bold: (chunks) => <span className="font-bold">{chunks}</span> })}
      </h3>
      <div ref={viewportRef} className="overflow-hidden">
        <ul
          ref={trackRef}
          className="flex  px-10 gap-20 p-9 pt-12 will-change-transform [&>li]:shrink-0 [&>li]:basis-full md:[&>li]:basis-[calc((100%-5rem)/2)]"
        >
          {testimonialsData.map((testimonial) => (
            <TestimonialCard
              key={testimonial.name}
              testimonial={testimonial}
              setTestimonialSelected={setTestimonialSelected}
            />
          ))}
        </ul>
      </div>
      <div className="flex justify-end px-10">
        <div className="flex gap-2 items-center">
          <Progress className="w-30 h-0.75 bg-brand" value={progressValue} indicatorClassName="bg-white" />
          <div className="text-sm text-white font-semibold">
            {currentTestimonial} / {testimonialsData.length}
          </div>
        </div>
      </div>
      <TestimonialExpanded
        testimonialSelected={testimonialSelected}
        setTestimonialSelected={setTestimonialSelected}
      />
    </section>
  );
};
