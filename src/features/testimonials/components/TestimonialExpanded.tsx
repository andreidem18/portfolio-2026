import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { Testimonial } from "../data/testimonialsData";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { QuoteIcon } from "lucide-react";

interface Props {
  testimonialSelected: Testimonial | null;
  setTestimonialSelected: (testimonial: Testimonial | null) => void;
}

export const TestimonialExpanded = ({
  testimonialSelected,
  setTestimonialSelected,
}: Props) => {
  const t = useTranslations("testimonials");
  const [cachedTestimonial, setCachedTestimonial] =
    useState<Testimonial | null>(null);

  if (testimonialSelected && testimonialSelected !== cachedTestimonial) {
    setCachedTestimonial(testimonialSelected);
  }

  const testimonial = testimonialSelected ?? cachedTestimonial;

  const onOpenChange = (value: boolean) => {
    if (!value) {
      setTestimonialSelected(null);

      setTimeout(() => {
        setCachedTestimonial(null);
      }, 600);
    }
  };

  return (
    <Dialog open={Boolean(testimonialSelected)} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-2xl ">
        <DialogTitle className="sr-only">
          {testimonial?.name} expanded
        </DialogTitle>
        <DialogDescription className="sr-only" />

        {testimonial && (
          <div className="flex flex-col gap-6">
            <div className="flex gap-4 items-center">
              <Image
                src={testimonial.photoUrl}
                alt={testimonial.name}
                className="rounded-full w-16 h-16"
              />
              <div className="flex flex-col">
                <b>{testimonial.name}</b>
                <span className="text-sm text-muted-foreground">
                  {testimonial.profession}
                </span>
              </div>
            </div>
            <div className="flex gap-3 flex-col relative">
              <QuoteIcon
                className="absolute -left-4.5 -top-4 rotate-180 text-muted-foreground/20"
                size={20}
              />
              {t.rich(testimonial.testimonial, {
                p: (chunks) => <p>{chunks}</p>,
              })}
              <QuoteIcon
                className="absolute -bottom-3 -right-2 text-muted-foreground/20"
                size={20}
              />
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};
