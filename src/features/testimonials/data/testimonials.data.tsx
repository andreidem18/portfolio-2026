import messages from "@/messages/en.json";
import {
  brayanMunozImage,
  camiloRomeroImage,
  gabrielMartinezImage,
  jesusFernandezImage,
  jorgeRiveraImage,
} from "@/assets/images";
import { StaticImageData } from "next/image";

type TestimonialKey = keyof typeof messages.testimonials;

export interface Testimonial {
  name: string;
  profession: string;
  testimonial: TestimonialKey;
  photoUrl: StaticImageData;
}

export const testimonialsData = [
  {
    name: "Jorge Rivera",
    profession: "UI/UX Designer",
    testimonial: "jorgeRivera" as const,
    photoUrl: jorgeRiveraImage,
  },
  {
    name: "Camilo Romero",
    profession: "Tech Lead",
    testimonial: "camiloRomero" as const,
    photoUrl: camiloRomeroImage,
  },
  {
    name: "Brayan Muñoz",
    profession: "Fullstack Developer",
    testimonial: "brayanMunoz" as const,
    photoUrl: brayanMunozImage,
  },
  {
    name: "Jesús Fernandez",
    profession: "Fullstack Developer",
    testimonial: "jesusFernandez" as const,
    photoUrl: jesusFernandezImage,
  },
  {
    name: "Gabriel Martinez",
    profession: "Fullstack Developer",
    testimonial: "gabrielMartinez" as const,
    photoUrl: gabrielMartinezImage,
  },
];
