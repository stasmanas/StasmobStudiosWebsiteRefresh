export const studio = {
  name: "StasMobStudios",
  founded: "2011",
  city: "Vilnius, Lithuania",
  tagline: "We are an innovative mobile application and web development studio.",
  claim: "Everything starts from respecting your own business.",
  intro:
    "StasMobStudios was started as a life goal for the highest quality and creativity — a hard-working, goal-oriented creative and new-tech collaboration incubator.",
  about: [
    "You are always welcome to reach us about mobile solutions for your business. We will get back with an offer.",
    "Since 2011 we have moved into mobile platform development by merging web technologies into it, and later on into native and cross-platform mobile development.",
    "We bring experience from enterprise systems, telecommunication, the government sector, creative works and start-ups — and fuel it with the newest technologies.",
  ],
  contacts: {
    email: "info@stasmobstudios.com",
    phone: "+370 682 29864",
    phoneHref: "+37068229864",
    skype: "smubikas",
    address: ["Džiūkų g. 22 – 26", "Vilnius, Lithuania"],
  },
};

export interface Capability {
  title: string;
  description: string;
  items: string[];
}

export const capabilities: Capability[] = [
  {
    title: "Mobile applications",
    description:
      "Native and cross-platform products for Android and iOS, from a first prototype to store releases.",
    items: ["Android", "iOS", "Flutter", "Xamarin", "Ionic"],
  },
  {
    title: "Web platforms & e-commerce",
    description:
      "Sites and shops that carry real business: catalogues, content, payments, accounts and the admin behind them.",
    items: ["Web platforms", "E-shops", "CMS", "Angular", "React"],
  },
  {
    title: "Museums & culture",
    description:
      "Exhibition terminals, beacon guides and audio walks where the software has to work in a real room, with real visitors.",
    items: ["Exhibition terminals", "Beacon guides", "Audio", "Multilingual"],
  },
  {
    title: "Cloud & infrastructure",
    description:
      "Backends, accounts and deployments on public cloud — including the unglamorous migrations that make them reliable.",
    items: ["Google Cloud", "Linux", "Databases", "MEAN stack", "DevOps"],
  },
  {
    title: "Creative & sound",
    description:
      "Audio collages, installations and broadcasts — the projects where engineering and art share the same deadline.",
    items: ["Audio", "Video", "Installations", "Broadcasting"],
  },
  {
    title: "Product & start-up consulting",
    description:
      "Scoping, prototyping and delivery practice for teams building their first product or their next version.",
    items: ["Prototyping", "SCRUM", "Agile", "Start-up consulting"],
  },
];

export interface TeamMember {
  name: string;
  role: string;
  photo: string;
  skills: string;
  note?: string;
}

export const team: TeamMember[] = [
  {
    name: "Stanislovas Mickus",
    role: "Lead developer, CEO",
    photo: "/team/stasman.jpg",
    skills: "Android, Linux, Flutter, Xamarin, Web, AI, Mac OS X, databases, MEAN stack, cloud, Agile.",
  },
  {
    name: "Artūras But",
    role: "Art designer, illustrator",
    photo: "/team/artmark.jpg",
    skills: "Adobe Creative Suite, AutoCAD, hand drawing, arts.",
  },
  {
    name: "Kristijonas Bakas",
    role: "Art designer",
    photo: "/team/kbakas.jpg",
    skills: "Adobe Creative Suite, 3D, Maya — and everything else that is needed.",
  },
  {
    name: "Laurynas Bakas",
    role: "Creative director",
    photo: "/team/lbakas.jpg",
    skills: "HTML5, CSS3, JavaScript, PHP, WordPress, Google Analytics.",
  },
  {
    name: "Martyna Valentaitė",
    role: "Digital designer, content strategist",
    photo: "/team/mval.jpg",
    skills:
      "Design for web and print, brand identity, UX, illustration, information architecture, online marketing, video production.",
  },
  {
    name: "Vilius Stonkaitis",
    role: "System administrator",
    photo: "/team/vilsto.jpg",
    skills: "Mac OS X, Linux and Windows servers, IT infrastructure, networks, security.",
  },
  {
    name: "Saulius Križinauskas",
    role: "Music composer, special FX",
    photo: "/team/saulkriz.jpg",
    skills: "Guitar, MIDI devices, Ableton Live, Logic Pro.",
    note: "Still rockin' under the sun.",
  },
];

export const competencies = [
  "Programming languages and development platforms",
  "Branding and marketing",
  "Content management",
  "Prototyping technologies, SCRUM, Agile",
  "Creative works, video and audio installation",
  "Audio and video performance",
  "Start-up consulting",
];

export const history = [
  {
    year: "2011",
    title: "Moving to mobile",
    text: "We started moving to mobile platforms by merging web technologies into them.",
  },
  {
    year: "2013",
    title: "Native and cross-platform",
    text: "From mobile web into native and cross-platform apps for Android, iOS and Xamarin, including our open source Muze Player.",
  },
  {
    year: "2015",
    title: "Business systems",
    text: "Warehouse management, education infrastructure and cloud migrations for organisations that needed the work to hold up.",
  },
  {
    year: "2017",
    title: "Culture and craft",
    text: "Museum guides, exhibition terminals, publishing for children with visual impairment and satellite broadcasting.",
  },
  {
    year: "2023",
    title: "Cross-platform and community",
    text: "Flutter products and community platforms, including TrashSignal, built with local governments and communities.",
  },
];
