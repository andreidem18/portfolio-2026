"use client";

import { useTranslations } from "next-intl";
import { Testimonial, testimonialsData } from "./testimonialsData";
import { TestimonialExpanded } from "./TestimonialExpanded";
import { useState } from "react";
import { TestimonialCard } from "./TestimonialCard";
import { Progress } from "@/components/ui/progress";

export const Testimonials = () => {
  const t = useTranslations("testimonials");
  const [testimonialSelected, setTestimonialSelected] =
    useState<Testimonial | null>(null);
  const currentTestimonial = 1;

  return (
    <section id="testimonials" className="flex flex-col justify-center gap-4 px-10 py-10 h-dvh">
      <h3 className="text-[clamp(1.5rem,3.2vw,2.25rem)] max-w-130 leading-[110%] pb-4">
        {t("title")}
      </h3>
      <ul className="flex gap-20 p-9 pt-12">
        {testimonialsData.slice(0, 2).map((testimonial) => (
          <TestimonialCard
            key={testimonial.name}
            testimonial={testimonial}
            setTestimonialSelected={setTestimonialSelected}
          />
        ))}
      </ul>
      <div className="flex justify-end">
        <div className="flex gap-2 items-center">
          <Progress className="w-30 h-0.75" value={33} />
          <div className="text-sm text-muted-foreground/70 font-semibold" >
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
