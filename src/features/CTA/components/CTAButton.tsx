import { useTranslations } from 'next-intl';
import { ArrowRightIcon } from "lucide-react";
import { useCTATooltip } from "../hooks";

const EMAIL = "andres.david.mm@hotmail.com";
const TOOLTIP_ID = "cta-tooltip";

export const CTAButton = () => {
  const t = useTranslations("contact");
  const {
    copied,
    visible,
    tooltipStyle,
    buttonRef,
    tooltipRef,
    handleCopy,
    handleMouseMove,
    handleFocus,
    setHovered,
    setFocused,
  } = useCTATooltip();

  return (
    <>
      <button
        ref={buttonRef}
        onClick={() => handleCopy(EMAIL)}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onMouseMove={handleMouseMove}
        onFocus={handleFocus}
        onBlur={() => setFocused(false)}
        aria-describedby={TOOLTIP_ID}
        className="group border-t border-border p-5 flex justify-between items-center relative overflow-hidden cursor-pointer lg:px-[5vw]"
      >
        <ArrowRightIcon className="inline-block" />
        <h3 className="font-medium text-[clamp(1rem,4vw,2.5rem)]">
          {t("mainCTA")}
        </h3>
        <div className="absolute left-0 -bottom-full size-full bg-brand text-white p-5 text-[clamp(1rem,4vw,2.5rem)] transition-all duration-500 ease-out group-hover:bottom-0">
          {EMAIL}
        </div>
      </button>
      <div
        ref={tooltipRef}
        id={TOOLTIP_ID}
        role="tooltip"
        className={`fixed z-50 pointer-events-none px-3 py-1.5 rounded-md bg-black text-white text-sm shadow-md border border-border transition-opacity duration-150 ${visible ? "opacity-100" : "opacity-0"}`}
        style={tooltipStyle}
      >
        {copied ? t("copied") : t("copy")}
      </div>
    </>
  );
};
