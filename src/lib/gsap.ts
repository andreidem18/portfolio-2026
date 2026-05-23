import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);
gsap.registerPlugin(TextPlugin);

export default gsap;
