export type CategoryId = "apps" | "web" | "museums" | "commerce" | "creative";

export const categoryIds: CategoryId[] = ["apps", "web", "museums", "commerce", "creative"];

export interface Project {
  slug: string;
  /** Proper noun, identical in every language. */
  title: string;
  /** Numeric year, used for sorting and the "recent" band. */
  year: string;
  client?: string;
  category: CategoryId;
  featured: boolean;
  link?: { label: string; href: string };
  cover: string;
  gallery: string[];
}

/**
 * Structural project data only. Every piece of visible copy (date, tags, tagline,
 * summary, case study) lives in public/locales/*.json under project.<slug>.*.
 */
export const projects: Project[] = [
  {
    slug: "trashsignal",
    title: "TrashSignal",
    year: "2026",
    client: "TrashSignal",
    category: "apps",
    featured: true,
    cover: "/work/trashsignal/cover.jpg",
    gallery: ["/work/trashsignal/g1.jpg", "/work/trashsignal/g2.jpg", "/work/trashsignal/g3.jpg"],
  },
  {
    slug: "pom",
    title: "Pray on Mandala",
    year: "2023",
    client: "Pray on Mandala — Nepal Brotherhood",
    category: "commerce",
    featured: true,
    cover: "/work/pom/cover.jpg",
    gallery: ["/work/pom/g1.jpg", "/work/pom/g2.jpg", "/work/pom/g3.jpg"],
  },
  {
    slug: "sjaskunas",
    title: "Solveiga Jaskunas",
    year: "2026",
    client: "Solveiga Jaskunas",
    category: "web",
    featured: true,
    cover: "/work/sjaskunas/cover.jpg",
    gallery: ["/work/sjaskunas/g1.jpg", "/work/sjaskunas/g2.jpg", "/work/sjaskunas/g3.jpg"],
  },
  {
    slug: "tuskulenai",
    title: "Homo Sovieticus",
    year: "2019",
    client: "AMVesta",
    category: "museums",
    featured: true,
    cover: "/work/tuskulenai/cover.jpg",
    gallery: ["/work/tuskulenai/g1.jpg", "/work/tuskulenai/g3.jpg"],
  },
  {
    slug: "trakai",
    title: "Trakai Castle Guide",
    year: "2018",
    client: "AMVesta",
    category: "museums",
    featured: true,
    cover: "/work/trakai/cover.jpg",
    gallery: ["/work/trakai/g1.jpg", "/work/trakai/g2.jpg", "/work/trakai/g3.jpg"],
  },
  {
    slug: "dotstory",
    title: "DotStory",
    year: "2017",
    client: "VšĮ „Verslas ar Menas“ — DotStory",
    category: "commerce",
    featured: false,
    link: { label: "taskoistorija.lt", href: "https://taskoistorija.lt" },
    cover: "/work/dotstory/cover.jpg",
    gallery: ["/work/dotstory/g1.jpg", "/work/dotstory/g2.jpg"],
  },
  {
    slug: "myriorama",
    title: "Myriorama",
    year: "2017",
    client: "Vladas Dieninis & Gintautas Rožė",
    category: "creative",
    featured: false,
    link: { label: "myriorama.lt", href: "https://myriorama.lt" },
    cover: "/work/myriorama/cover.jpg",
    gallery: ["/work/myriorama/g1.jpg"],
  },
  {
    slug: "runwayhd",
    title: "RunwayHD",
    year: "2017",
    client: "Zenitech, Airbox Aero",
    category: "apps",
    featured: true,
    cover: "/work/runwayhd/cover.jpg",
    gallery: ["/work/runwayhd/g1.jpg", "/work/runwayhd/g2.jpg", "/work/runwayhd/g3.jpg"],
  },
  {
    slug: "whispers",
    title: "Whispers",
    year: "2017",
    client: "Whispers Team",
    category: "web",
    featured: true,
    link: { label: "whispers.to", href: "https://www.whispers.to/" },
    cover: "/work/whispers/cover.jpg",
    gallery: ["/work/whispers/g1.jpg", "/work/whispers/g2.jpg"],
  },
  {
    slug: "medraid",
    title: "Medinė raidė",
    year: "2016",
    client: "Medinė raidė",
    category: "commerce",
    featured: true,
    link: { label: "medineraide.lt", href: "http://www.medineraide.lt" },
    cover: "/work/medraid/cover.jpg",
    gallery: ["/work/medraid/g1.jpg", "/work/medraid/g2.jpg", "/work/medraid/g3.jpg"],
  },
  {
    slug: "epmc",
    title: "EPMC",
    year: "2016",
    client: "Elektrėnai vocational training centre",
    category: "web",
    featured: false,
    link: { label: "epmc.lt", href: "http://www.epmc.lt" },
    cover: "/work/epmc/cover.jpg",
    gallery: ["/work/epmc/g1.jpg"],
  },
  {
    slug: "elka",
    title: "Elka LED",
    year: "2016",
    client: "Gluk Media",
    category: "creative",
    featured: false,
    cover: "/work/elka/cover.jpg",
    gallery: ["/work/elka/g1.jpg"],
  },
  {
    slug: "audiozinas",
    title: "Audiozinas",
    year: "2015",
    client: "Tarp festival",
    category: "creative",
    featured: false,
    link: { label: "tarpfest.lt/audiozinas", href: "http://www.tarpfest.lt/audiozinas" },
    cover: "/work/audiozinas/cover.jpg",
    gallery: ["/work/audiozinas/g1.jpg"],
  },
  {
    slug: "pickerlight",
    title: "PickerLight",
    year: "2015",
    client: "Dagos",
    category: "apps",
    featured: false,
    cover: "/work/pickerlight/cover.jpg",
    gallery: ["/work/pickerlight/g1.jpg", "/work/pickerlight/g2.jpg", "/work/pickerlight/g3.jpg"],
  },
  {
    slug: "muze-android",
    title: "Muze Player",
    year: "2013",
    category: "apps",
    featured: false,
    cover: "/work/muze-android/cover.jpg",
    gallery: ["/work/muze-android/g1.jpg", "/work/muze-android/g2.jpg"],
  },
  {
    slug: "appcamp-ios",
    title: "AppCamp",
    year: "2013",
    client: "TeleSoftas",
    category: "apps",
    featured: false,
    cover: "/work/appcamp-ios/cover.jpg",
    gallery: ["/work/appcamp-ios/g1.jpg"],
  },
];

export const getProject = (slug?: string) => projects.find((project) => project.slug === slug);

export const featuredProjects = projects.filter((project) => project.featured);
