export type CategoryId = "apps" | "web" | "museums" | "commerce" | "creative";

export interface Category {
  id: CategoryId;
  label: string;
}

export const categories: Category[] = [
  { id: "apps", label: "Mobile apps" },
  { id: "web", label: "Web platforms" },
  { id: "museums", label: "Museums & culture" },
  { id: "commerce", label: "E-commerce" },
  { id: "creative", label: "Creative & sound" },
];

export interface Project {
  slug: string;
  title: string;
  /** Short positioning line shown under the title. */
  tagline: string;
  /** Display date, as published on the original site. */
  date: string;
  year: string;
  client?: string;
  tags: string[];
  category: CategoryId;
  featured: boolean;
  summary: string;
  description: string[];
  link?: { label: string; href: string };
  cover: string;
  gallery: string[];
}

export const projects: Project[] = [
  {
    slug: "trashsignal",
    title: "TrashSignal",
    tagline: "A community platform for a cleaner planet",
    date: "March 2026",
    year: "2026",
    client: "TrashSignal",
    tags: ["iOS", "Android", "Cross-platform", "Flutter", "Ecology"],
    category: "apps",
    featured: true,
    summary:
      "A Flutter app for cleaning up the Earth: a community feed plus maps for reporting and cleaning trashy places, run together with local governments and communities.",
    description: [
      "TrashSignal is a Flutter cross-platform project for cleaning Mother Earth. It combines a community feed with maps for reporting and cleaning trashy places.",
      "The app works in collaboration with local governments and communities, so a report does not end in a database — it turns into an organised cleanup. You can help too.",
    ],
    cover: "/work/trashsignal/cover.jpg",
    gallery: ["/work/trashsignal/g1.jpg", "/work/trashsignal/g2.jpg", "/work/trashsignal/g3.jpg"],
  },
  {
    slug: "pom",
    title: "Pray on Mandala",
    tagline: "A Nepalese sacred shop and story",
    date: "August 2023",
    year: "2023",
    client: "Pray on Mandala — Nepal Brotherhood",
    tags: ["E-shop", "Web", "Sacred"],
    category: "commerce",
    featured: true,
    summary:
      "An experience from Kathmandu and journeys through the Himalaya, built around mandala meditation and a shop of mountain honey, malas and sacred packages.",
    description: [
      "This is an experience from Kathmandu and journeys in Himalia, Pokhara and other ancient and sacred places in Nepal. It is built on mandala meditations and a simple idea: pay your own way to true richness, and feel relief in Nepalese divine and rich culture.",
      "The shop gathers mountain bee honey, malas for your hands and sacred packages — a small window into the depth of the mountains for everyone who cannot travel there.",
    ],
    cover: "/work/pom/cover.jpg",
    gallery: ["/work/pom/g1.jpg", "/work/pom/g2.jpg", "/work/pom/g3.jpg"],
  },
  {
    slug: "sjaskunas",
    title: "Solveiga Jaskunas",
    tagline: "A personal platform for an investor and mentor",
    date: "2026",
    year: "2026",
    client: "Solveiga Jaskunas",
    tags: ["Investment", "Mentoring", "Web", "Portfolio"],
    category: "web",
    featured: true,
    summary:
      "A new profile site made in cooperation with Solveiga Jaskunas, built to help her spread her network, mentor and become more visible for speaking events.",
    description: [
      "Made in cooperation with Solveiga Jaskunas, this profile site replaced a static presence with a platform for her work as an investor and mentor.",
      "The structure puts her thinking, experience and speaking topics first, so event organisers and founders can find the right entry point quickly.",
    ],
    cover: "/work/sjaskunas/cover.jpg",
    gallery: ["/work/sjaskunas/g1.jpg", "/work/sjaskunas/g2.jpg", "/work/sjaskunas/g3.jpg"],
  },
  {
    slug: "tuskulenai",
    title: "Homo Sovieticus",
    tagline: "Tuskulėnai Museum exhibition",
    date: "2018 — 2019",
    year: "2019",
    client: "AMVesta",
    tags: ["Museum", "Web", "Angular", "CMS", "Backend"],
    category: "museums",
    featured: true,
    summary:
      "CMS, backend and web terminals running Angular animations for the Tuskulėnai Museum exhibition about everyday life during the Soviet occupation of Lithuania.",
    description: [
      "Homo Sovieticus describes people's lives during the Soviet occupation in Lithuania. The exhibition houses donated objects from daily life, documents and video from the epoch.",
      "We developed the CMS, the backend and the web terminals, with Angular animations carrying visitors through the material in the exhibition hall.",
    ],
    cover: "/work/tuskulenai/cover.jpg",
    gallery: ["/work/tuskulenai/g1.jpg", "/work/tuskulenai/g3.jpg"],
  },
  {
    slug: "trakai",
    title: "Trakai Castle Guide",
    tagline: "A beacon-driven museum app",
    date: "July 2018",
    year: "2018",
    client: "AMVesta",
    tags: ["Museum", "Android", "Ionic"],
    category: "museums",
    featured: true,
    summary:
      "The guide application for the Trakai Castle Museum, using beacons to navigate audio and photographic exhibits on maps.",
    description: [
      "This is the guide application for the famous Lithuanian Trakai Castle Museum. Beacons let the app know where a visitor stands, and the exposition follows.",
      "Audio guides and photographs are arranged on maps of the castle, in Lithuanian and for international visitors alike.",
    ],
    cover: "/work/trakai/cover.jpg",
    gallery: ["/work/trakai/g1.jpg", "/work/trakai/g2.jpg", "/work/trakai/g3.jpg"],
  },
  {
    slug: "dotstory",
    title: "DotStory",
    tagline: "Books for children with visual impairment",
    date: "2017",
    year: "2017",
    client: "VšĮ „Verslas ar Menas“ — DotStory",
    tags: ["E-shop", "Social project", "Publishing"],
    category: "commerce",
    featured: false,
    summary:
      "An e-shop and social project publishing website for DotStory: books for children with visual impairment, with braille, touch signs and scented illustrations.",
    description: [
      "DotStory sells books for children with visual impairment, featuring braille and touch signs for beautiful illustrations. And that is not all.",
      "DotStory also runs social projects to close the integration gap for these kids and add extra quality to their lives — including a smells project. The site carries both the shop and the movement.",
    ],
    link: { label: "taskoistorija.lt", href: "https://taskoistorija.lt" },
    cover: "/work/dotstory/cover.jpg",
    gallery: ["/work/dotstory/g1.jpg", "/work/dotstory/g2.jpg"],
  },
  {
    slug: "myriorama",
    title: "Myriorama",
    tagline: "A sonic journey in the form of an audio collage",
    date: "9 June 2017",
    year: "2017",
    client: "Vladas Dieninis & Gintautas Rožė",
    tags: ["Art", "Sound", "Web"],
    category: "creative",
    featured: false,
    summary:
      "The web home of Myriorama, an audio collage that develops gradually, with dream logic, murky tempo and organic and synthetic sounds.",
    description: [
      "Myriorama is a sonic journey gradually developing in the form of an audio collage. The soundtrack is based on dream logic, coalescence between different soundscapes, slow and murky tempo, organic and synthetic sounds.",
      "The narrative created for Salomė Lamas' film Trial by Fire, performed at the Contemporary Art Centre during the Scanorama film festival, became the origin of the piece. The site gives it a place to be listened to as one work.",
      "Code by Stanislovas Mickus, design by Tadas Karpanavičius.",
    ],
    link: { label: "myriorama.lt", href: "https://myriorama.lt" },
    cover: "/work/myriorama/cover.jpg",
    gallery: ["/work/myriorama/g1.jpg"],
  },
  {
    slug: "runwayhd",
    title: "RunwayHD",
    tagline: "Flight planning for pilots",
    date: "June 2017",
    year: "2017",
    client: "Zenitech, Airbox Aero",
    tags: ["Android", "Cross-platform", "Aviation"],
    category: "apps",
    featured: true,
    summary:
      "An Xamarin cross-platform app that lets pilots plan routes, read terrain and depth maps, file flight plans, track flights and use the device as a dashboard.",
    description: [
      "RunwayHD is an Xamarin cross-platform project for pilots: plan routes, see terrain, get and use depth maps and charts, file flight plans, track your flights and use it as a dashboard.",
      "We made the initial release and the releases that followed, working alongside the aviation team at Zenitech and Airbox Aero.",
    ],
    cover: "/work/runwayhd/cover.jpg",
    gallery: ["/work/runwayhd/g1.jpg", "/work/runwayhd/g2.jpg", "/work/runwayhd/g3.jpg"],
  },
  {
    slug: "whispers",
    title: "Whispers",
    tagline: "Broadcasting human heritage into space",
    date: "March 2017",
    year: "2017",
    client: "Whispers Team",
    tags: ["Creativity", "Web", "Broadcasting"],
    category: "web",
    featured: true,
    summary:
      "The website and a video transport-stream generation server for DVB-S satellite broadcasting, running on Google Cloud and the MEAN stack, ready to scale.",
    description: [
      "Whispers is a project with a romantic idea: broadcasting human heritage into space. We developed the website and the video TS generation server for DVB-S satellite broadcasting.",
      "Everything runs on Google Cloud and the MEAN development stack, ready for scaling on public cloud infrastructure.",
    ],
    link: { label: "whispers.to", href: "https://www.whispers.to/" },
    cover: "/work/whispers/cover.jpg",
    gallery: ["/work/whispers/g1.jpg", "/work/whispers/g2.jpg"],
  },
  {
    slug: "medraid",
    title: "Medinė raidė",
    tagline: "Wooden letters, delivered",
    date: "January 2016 — ongoing",
    year: "2016",
    client: "Medinė raidė",
    tags: ["E-shop", "Craft", "Web"],
    category: "commerce",
    featured: true,
    summary:
      "A project born to let people dream in meaningful words and letters, and make it real by posting all of it to their doorsteps.",
    description: [
      "Medinė raidė (Wooden letter) lets people dream in meaningful words and letters and make it all a reality by posting it to their doorsteps.",
      "The site pairs a letter builder with an e-shop and gallery, so a word becomes a finished piece before anyone reaches a checkout.",
    ],
    link: { label: "medineraide.lt", href: "http://www.medineraide.lt" },
    cover: "/work/medraid/cover.jpg",
    gallery: ["/work/medraid/g1.jpg", "/work/medraid/g2.jpg", "/work/medraid/g3.jpg"],
  },
  {
    slug: "epmc",
    title: "EPMC",
    tagline: "Vocational training centre online",
    date: "2015 — 2016",
    year: "2016",
    client: "Elektrėnai vocational training centre",
    tags: ["Web", "Cloud infrastructure", "Education"],
    category: "web",
    featured: false,
    summary:
      "Website and infrastructure development for the Elektrėnai vocational training centre: a new site, Moodle and accounts moved to Google Cloud and Google Apps.",
    description: [
      "Website and infrastructure development for EPMC (Elektrėnai vocational training centre).",
      "The new website shipped together with a migration of Moodle and staff accounts to Google Cloud and Google Apps, replacing a set of separate local systems.",
    ],
    link: { label: "epmc.lt", href: "http://www.epmc.lt" },
    cover: "/work/epmc/cover.jpg",
    gallery: ["/work/epmc/g1.jpg"],
  },
  {
    slug: "elka",
    title: "Elka LED",
    tagline: "New Year wishes on a Christmas tree",
    date: "New Year 2016",
    year: "2016",
    client: "Gluk Media",
    tags: ["Web", "Installation", "Celebration"],
    category: "creative",
    featured: false,
    summary:
      "A collaboration with Gluk Media to bring New Year wishes onto the Christmas tree in Minsk, Belarus.",
    description: [
      "In collaboration with Gluk Media we brought New Year wishes onto the Christmas tree in Minsk, Belarus.",
      "Visitors sent wishes from the web; the installation rendered them as light on the tree — a web back end driving a public, physical moment.",
    ],
    cover: "/work/elka/cover.jpg",
    gallery: ["/work/elka/g1.jpg"],
  },
  {
    slug: "audiozinas",
    title: "Audiožinas",
    tagline: "An audiovisual poetry magazine",
    date: "16 September 2015",
    year: "2015",
    client: "Tarp festival",
    tags: ["Audiovisual", "Poetry", "Web"],
    category: "creative",
    featured: false,
    summary:
      "Audiožinas debuted a new genre in audiovisual poetry at the tenth Tarp festival in Lithuania, uniting writers, audio engineers and festival guests.",
    description: [
      "Audiožinas debuted a new genre in audiovisual poetry at the tenth Tarp festival in Lithuania.",
      "It unites writers, audio engineers and the gifts of the festival's guests into a journey through poems, materialised sound expressions and glimpses of calls in unpredictable places.",
    ],
    link: { label: "tarpfest.lt/audiozinas", href: "http://www.tarpfest.lt/audiozinas" },
    cover: "/work/audiozinas/cover.jpg",
    gallery: ["/work/audiozinas/g1.jpg"],
  },
  {
    slug: "pickerlight",
    title: "PickerLight",
    tagline: "Warehouse management on a phone",
    date: "July 2015",
    year: "2015",
    client: "Dagos",
    tags: ["Business", "Android", "Logistics"],
    category: "apps",
    featured: false,
    summary:
      "An Android project making warehouse management easy and adaptable to client needs, removing the need for specialised hardware.",
    description: [
      "PickerLight makes warehouse management easy and adaptable to client needs. It eliminates the need for specialised hardware equipment.",
      "The app uses Android device capabilities to scan and search products, add comments and photos to their details, and handle client orders by gathering the needed products, leaving notes and sending them on for further processing.",
    ],
    cover: "/work/pickerlight/cover.jpg",
    gallery: ["/work/pickerlight/g1.jpg", "/work/pickerlight/g2.jpg", "/work/pickerlight/g3.jpg"],
  },
  {
    slug: "muze-android",
    title: "Muze Player",
    tagline: "An open source Android music player",
    date: "December 2013",
    year: "2013",
    tags: ["Open source", "Android", "Music"],
    category: "apps",
    featured: false,
    summary:
      "A first beta of Muze Player: a music player as simple and easy to use as possible, visually appealing and with the essential features.",
    description: [
      "We released the first beta version of Muze Player, a music player for Android. The development goals were simple: make a player as simple and easy to use as possible, visually appealing and with the essential features.",
      "A further redesign phase started afterwards, with the source opened for other developers to join.",
    ],
    cover: "/work/muze-android/cover.jpg",
    gallery: ["/work/muze-android/g1.jpg", "/work/muze-android/g2.jpg"],
  },
  {
    slug: "appcamp-ios",
    title: "AppCamp",
    tagline: "A virtual dome, built with a gyroscope",
    date: "September 2013",
    year: "2013",
    client: "TeleSoftas",
    tags: ["iOS", "Contest", "Mobile"],
    category: "apps",
    featured: false,
    summary:
      "A mobile app using the gyro sensor to project a virtual dome environment, made for the AppCamp mobile apps contest in Lithuania.",
    description: [
      "Made for AppCamp 2013, the mobile apps contest in Lithuania, in collaboration with TeleSoftas.",
      "The app uses the device's gyroscope to project a virtual dome environment for RPG authors — an early step in TeleSoftas' direction that later became Hour of the Wolf.",
    ],
    cover: "/work/appcamp-ios/cover.jpg",
    gallery: ["/work/appcamp-ios/g1.jpg"],
  },
];

export const getProject = (slug?: string) => projects.find((project) => project.slug === slug);

export const featuredProjects = projects.filter((project) => project.featured);

export const categoryLabel = (id: CategoryId) =>
  categories.find((category) => category.id === id)?.label ?? id;
