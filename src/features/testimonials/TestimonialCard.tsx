import Image from "next/image";
import { Testimonial } from "./testimonialsData";
import { useTranslations } from "next-intl";
import { Maximize2Icon, QuoteIcon } from "lucide-react";

interface Props {
  testimonial: Testimonial;
  setTestimonialSelected: (testimonial: Testimonial | null) => void;
}

export const TestimonialCard = ({
  testimonial,
  setTestimonialSelected,
}: Props) => {
  const t = useTranslations("testimonials");
  return (
    <li key={testimonial.name} className="relative w-full">
      <button
        onClick={() => setTestimonialSelected(testimonial)}
        className="leading-[130%] border rounded-3xl relative p-7 px-11 bg-off-white z-20 h-full text-left font-normal cursor-pointer duration-200 hover:-translate-y-2 group"
      >
        <Image
          src={testimonial.photoUrl}
          alt={testimonial.name}
          width={70}
          height={70}
          className="rounded-full absolute -top-5 -left-7 h-17.5! object-cover"
        />
        <p className="italic line-clamp-10 md:line-clamp-5">
          {t.rich(testimonial.testimonial, {
            p: (chunks) => <>{chunks}</>,
          })}
        </p>
        <div className="pt-3 pb-2 flex gap-1 justify-end items-center group-hover:animate-bounce text-sm">
          {t("expand")} <Maximize2Icon size={14} />
        </div>
        <div className="relative">
          <QuoteIcon
            className="absolute -left-7 -top-4 rotate-180 text-muted-foreground/30"
            size={20}
          />
          <div className="flex gap-1 flex-col">
            <b>{testimonial.name}</b>
            <span className="text-sm text-muted-foreground">
              {testimonial.profession}
            </span>
          </div>
        </div>
      </button>
      <QuoteIcon
        className="absolute -bottom-5 -right-9 text-muted-foreground/20"
        size={60}
      />
    </li>
  );
};
