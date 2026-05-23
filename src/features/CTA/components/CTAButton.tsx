import { useTranslations } from 'next-intl';
import {
  TooltipProvider,
  TooltipTrigger,
  TooltipContent,
  Tooltip,
} from "@/components/ui/tooltip";
import { ArrowRightIcon } from "lucide-react";
import { useState } from "react";

const EMAIL = "andres.david.mm@hotmail.com";

export const CTAButton = () => {
  const [copied, setCopied] = useState(false);
  const [hovered, setHovered] = useState(false);
  const t = useTranslations("contact");

  const handleCopy = () => {
    navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <TooltipProvider>
      <Tooltip open={copied || hovered}>
        <TooltipTrigger asChild>
          <button
            onClick={handleCopy}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
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
        </TooltipTrigger>
        <TooltipContent>{copied ? t("copied") : t("copy")}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
