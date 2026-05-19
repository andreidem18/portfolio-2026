import { _Translator } from "next-intl";
import messages from "@/messages/en.json";

export const getExperienceItems = (t: _Translator<typeof messages, "experience">) => [
  {
    id: 1,
    title: t("finaipro.title"),
    start: new Date(2024, 5),
    end: new Date(2026, 2),
    company: "Finaipro",
    items: t.rich("finaipro.items", {
      li: chunks => <li>{chunks}</li>
    })
  },
  {
    id: 2,
    title: t("academlo.title"),
    start: new Date(2021, 11),
    end: new Date(2024, 5),
    company: "Academlo",
    items: t.rich("academlo.items", {
      li: chunks => <li>{chunks}</li>
    })
  },
  {
    id: 3,
    title: t("aisd.title"),
    start: new Date(2021, 7),
    end: new Date(2022, 0),
    company: "AI & SD",
    items: t.rich("aisd.items", {
      li: chunks => <li>{chunks}</li>
    })
  },
]
