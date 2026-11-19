import { useTranslation } from "react-i18next";
import { Languages } from "lucide-react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { fallbackLng, languageOptions, normalizeLanguage } from "@/i18n/config";

type LanguageSwitcherProps = {
  className?: string;
};

export const LanguageSwitcher = ({ className }: LanguageSwitcherProps) => {
  const { i18n, t } = useTranslation();

  const currentLanguage =
    normalizeLanguage(i18n.resolvedLanguage ?? i18n.language) ?? fallbackLng;

  return (
    <Select
      value={currentLanguage}
      onValueChange={(language) => {
        void i18n.changeLanguage(language);
      }}
    >
      <SelectTrigger
        aria-label={t("lang.label")}
        className={cn(
          "h-9 w-auto gap-2 rounded-sm border-border bg-transparent px-2.5 font-mono text-[10.5px] uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:border-accent hover:text-foreground focus:ring-0 focus:ring-offset-0",
          className,
        )}
      >
        <Languages className="h-3.5 w-3.5 text-accent" />
        <SelectValue />
      </SelectTrigger>
      <SelectContent className="min-w-[150px] border-border bg-popover">
        {languageOptions.map((language) => (
          <SelectItem
            key={language.value}
            value={language.value}
            className="font-mono text-[11px] uppercase tracking-[0.12em]"
          >
            {language.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
