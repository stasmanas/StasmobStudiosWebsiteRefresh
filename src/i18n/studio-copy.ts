import { useTranslation } from "react-i18next";

export interface CapabilityText {
  id: string;
  title: string;
  description: string;
  items: string;
}

export interface TeamMemberText {
  role: string;
  skills: string;
  note?: string;
}

export interface HistoryEntry {
  year: string;
  title: string;
  text: string;
}

export const useCapabilities = (): CapabilityText[] => {
  const { t } = useTranslation();

  return [
    {
      id: "mobile",
      title: t("cap.mobile.title"),
      description: t("cap.mobile.desc"),
      items: t("cap.mobile.items"),
    },
    {
      id: "web",
      title: t("cap.web.title"),
      description: t("cap.web.desc"),
      items: t("cap.web.items"),
    },
    {
      id: "museums",
      title: t("cap.museums.title"),
      description: t("cap.museums.desc"),
      items: t("cap.museums.items"),
    },
    {
      id: "cloud",
      title: t("cap.cloud.title"),
      description: t("cap.cloud.desc"),
      items: t("cap.cloud.items"),
    },
    {
      id: "creative",
      title: t("cap.creative.title"),
      description: t("cap.creative.desc"),
      items: t("cap.creative.items"),
    },
    {
      id: "consulting",
      title: t("cap.consulting.title"),
      description: t("cap.consulting.desc"),
      items: t("cap.consulting.items"),
    },
  ];
};

export const useTeamTexts = (): Record<string, TeamMemberText> => {
  const { t } = useTranslation();

  return {
    stasman: { role: t("team.stasman.role"), skills: t("team.stasman.skills") },
    artmark: { role: t("team.artmark.role"), skills: t("team.artmark.skills") },
    kbakas: { role: t("team.kbakas.role"), skills: t("team.kbakas.skills") },
    lbakas: { role: t("team.lbakas.role"), skills: t("team.lbakas.skills") },
    mval: { role: t("team.mval.role"), skills: t("team.mval.skills") },
    vilsto: { role: t("team.vilsto.role"), skills: t("team.vilsto.skills") },
    saulkriz: {
      role: t("team.saulkriz.role"),
      skills: t("team.saulkriz.skills"),
      note: t("team.saulkriz.note"),
    },
  };
};

export const useHistory = (): HistoryEntry[] => {
  const { t } = useTranslation();

  return [
    { year: "2011", title: t("history.y2011.title"), text: t("history.y2011.text") },
    { year: "2013", title: t("history.y2013.title"), text: t("history.y2013.text") },
    { year: "2015", title: t("history.y2015.title"), text: t("history.y2015.text") },
    { year: "2017", title: t("history.y2017.title"), text: t("history.y2017.text") },
    { year: "2023", title: t("history.y2023.title"), text: t("history.y2023.text") },
  ];
};

export const useCompetencies = (): string[] => {
  const { t } = useTranslation();

  return [
    t("competency.programming"),
    t("competency.branding"),
    t("competency.contentManagement"),
    t("competency.prototyping"),
    t("competency.creativeWorks"),
    t("competency.performance"),
    t("competency.consulting"),
  ];
};
