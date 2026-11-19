import { useTranslation } from "react-i18next";
import type { CategoryId } from "@/data/projects";

export interface ProjectText {
  date: string;
  tags: string;
  tagline: string;
  summary: string;
  body: string[];
}

const paragraphs = (value: string) =>
  value
    .split("\n\n")
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);

/**
 * Project copy keyed by slug. Every key is written literally so the i18n
 * coverage report can see it; nothing here is built from a template string.
 */
export const useProjectTexts = (): Record<string, ProjectText> => {
  const { t } = useTranslation();

  return {
    trashsignal: {
      date: t("project.trashsignal.date"),
      tags: t("project.trashsignal.tags"),
      tagline: t("project.trashsignal.tagline"),
      summary: t("project.trashsignal.summary"),
      body: paragraphs(t("project.trashsignal.body")),
    },
    pom: {
      date: t("project.pom.date"),
      tags: t("project.pom.tags"),
      tagline: t("project.pom.tagline"),
      summary: t("project.pom.summary"),
      body: paragraphs(t("project.pom.body")),
    },
    sjaskunas: {
      date: t("project.sjaskunas.date"),
      tags: t("project.sjaskunas.tags"),
      tagline: t("project.sjaskunas.tagline"),
      summary: t("project.sjaskunas.summary"),
      body: paragraphs(t("project.sjaskunas.body")),
    },
    tuskulenai: {
      date: t("project.tuskulenai.date"),
      tags: t("project.tuskulenai.tags"),
      tagline: t("project.tuskulenai.tagline"),
      summary: t("project.tuskulenai.summary"),
      body: paragraphs(t("project.tuskulenai.body")),
    },
    trakai: {
      date: t("project.trakai.date"),
      tags: t("project.trakai.tags"),
      tagline: t("project.trakai.tagline"),
      summary: t("project.trakai.summary"),
      body: paragraphs(t("project.trakai.body")),
    },
    dotstory: {
      date: t("project.dotstory.date"),
      tags: t("project.dotstory.tags"),
      tagline: t("project.dotstory.tagline"),
      summary: t("project.dotstory.summary"),
      body: paragraphs(t("project.dotstory.body")),
    },
    myriorama: {
      date: t("project.myriorama.date"),
      tags: t("project.myriorama.tags"),
      tagline: t("project.myriorama.tagline"),
      summary: t("project.myriorama.summary"),
      body: paragraphs(t("project.myriorama.body")),
    },
    runwayhd: {
      date: t("project.runwayhd.date"),
      tags: t("project.runwayhd.tags"),
      tagline: t("project.runwayhd.tagline"),
      summary: t("project.runwayhd.summary"),
      body: paragraphs(t("project.runwayhd.body")),
    },
    whispers: {
      date: t("project.whispers.date"),
      tags: t("project.whispers.tags"),
      tagline: t("project.whispers.tagline"),
      summary: t("project.whispers.summary"),
      body: paragraphs(t("project.whispers.body")),
    },
    medraid: {
      date: t("project.medraid.date"),
      tags: t("project.medraid.tags"),
      tagline: t("project.medraid.tagline"),
      summary: t("project.medraid.summary"),
      body: paragraphs(t("project.medraid.body")),
    },
    epmc: {
      date: t("project.epmc.date"),
      tags: t("project.epmc.tags"),
      tagline: t("project.epmc.tagline"),
      summary: t("project.epmc.summary"),
      body: paragraphs(t("project.epmc.body")),
    },
    elka: {
      date: t("project.elka.date"),
      tags: t("project.elka.tags"),
      tagline: t("project.elka.tagline"),
      summary: t("project.elka.summary"),
      body: paragraphs(t("project.elka.body")),
    },
    audiozinas: {
      date: t("project.audiozinas.date"),
      tags: t("project.audiozinas.tags"),
      tagline: t("project.audiozinas.tagline"),
      summary: t("project.audiozinas.summary"),
      body: paragraphs(t("project.audiozinas.body")),
    },
    pickerlight: {
      date: t("project.pickerlight.date"),
      tags: t("project.pickerlight.tags"),
      tagline: t("project.pickerlight.tagline"),
      summary: t("project.pickerlight.summary"),
      body: paragraphs(t("project.pickerlight.body")),
    },
    "muze-android": {
      date: t("project.muzeAndroid.date"),
      tags: t("project.muzeAndroid.tags"),
      tagline: t("project.muzeAndroid.tagline"),
      summary: t("project.muzeAndroid.summary"),
      body: paragraphs(t("project.muzeAndroid.body")),
    },
    "appcamp-ios": {
      date: t("project.appcampIos.date"),
      tags: t("project.appcampIos.tags"),
      tagline: t("project.appcampIos.tagline"),
      summary: t("project.appcampIos.summary"),
      body: paragraphs(t("project.appcampIos.body")),
    },
  };
};

export const useCategoryNames = (): Record<CategoryId, string> => {
  const { t } = useTranslation();

  return {
    apps: t("category.apps"),
    web: t("category.web"),
    museums: t("category.museums"),
    commerce: t("category.commerce"),
    creative: t("category.creative"),
  };
};
