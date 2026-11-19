export const studio = {
  name: "StasMobStudios",
  founded: "2011",
  contacts: {
    email: "info@stasmobstudios.com",
    phone: "+370 682 29864",
    phoneHref: "+37068229864",
    address: ["Džiūkų g. 22 – 26", "Vilnius, Lithuania"],
  },
};

export interface TeamMember {
  key: "stasman" | "artmark" | "kbakas" | "lbakas" | "mval" | "vilsto" | "saulkriz";
  name: string;
  photo: string;
}

export const team: TeamMember[] = [
  { key: "stasman", name: "Stanislovas Mickus", photo: "/team/stasman.jpg" },
  { key: "artmark", name: "Artūras But", photo: "/team/artmark.jpg" },
  { key: "kbakas", name: "Kristijonas Bakas", photo: "/team/kbakas.jpg" },
  { key: "lbakas", name: "Laurynas Bakas", photo: "/team/lbakas.jpg" },
  { key: "mval", name: "Martyna Valentaitė", photo: "/team/mval.jpg" },
  { key: "vilsto", name: "Vilius Stonkaitis", photo: "/team/vilsto.jpg" },
  { key: "saulkriz", name: "Saulius Križinauskas", photo: "/team/saulkriz.jpg" },
];
