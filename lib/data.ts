// Single source of truth for restaurant content. ponytail: plain TS module, no CMS.

export const restaurant = {
  name: "Los Dos",
  tagline: "Auténtica cocina mexicana en el corazón de Poznań",
  address: "Zeylanda 12/2, 60-808 Poznań",
  phone: "791 327 482",
  phoneHref: "tel:+48791327482",
  instagram: "https://www.instagram.com/losdos.poznan",
  instagramHandle: "@losdos.poznan",
  rating: 5,
  reviewCount: 5013,
  mapsQuery: "Los Dos Mexican Restaurant, Zeylanda 12/2, 60-808 Poznań",
};

// Open every day, same hours - the data reflects that rather than faking variety.
export const hours: { day: string; open: string }[] = [
  { day: "Poniedziałek", open: "12:00 – 21:00" },
  { day: "Wtorek", open: "12:00 – 21:00" },
  { day: "Środa", open: "12:00 – 21:00" },
  { day: "Czwartek", open: "12:00 – 21:00" },
  { day: "Piątek", open: "12:00 – 21:00" },
  { day: "Sobota", open: "12:00 – 21:00" },
  { day: "Niedziela", open: "12:00 – 21:00" },
];

export type Dish = {
  name: string;
  desc?: string;
  price: string;
  tags?: ("ostre" | "wege" | "nowość")[];
};

export type MenuSection = { id: string; title: string; subtitle: string; dishes: Dish[] };

// Menu transcribed from the restaurant's printed card (Los Dos Mexican bar).
export const menu: MenuSection[] = [
  {
    id: "tacos",
    title: "Tacosy",
    subtitle: "Na miękkich tortillach, trzy sztuki w porcji",
    dishes: [
      { name: "Pollo", desc: "Szarpany kurczak, mozzarella, piklowana czerwona cebula, sos mango-mięta, kolendra", price: "34 zł" },
      { name: "Chorizo", desc: "Długo pieczona wieprzowina, grillowane chorizo, piklowana czerwona cebula, kapusta, sos chipotle, kolendra", price: "34 zł" },
      { name: "Al Pastore", desc: "Wieprzowina adobo z grilla, świeży ananas, sos chipotle, piklowane jalapeño, kolendra", price: "34 zł" },
      { name: "Krewetki", desc: "Smashowane krewetki, pasta z pomidorów San Marzano, guacamole, kapusta, kolendra, sos XO", price: "48 zł", tags: ["nowość"] },
      { name: "Wege", desc: "Tofu achiote, mozzarella, frijoles refritos, sos chipotle, piklowana czerwona cebula, kolendra", price: "34 zł", tags: ["wege"] },
    ],
  },
  {
    id: "burrito",
    title: "Burrito",
    subtitle: "Pszenny placek z obfitym, mięsno-warzywnym farszem",
    dishes: [
      { name: "Burrito", desc: "Szarpany kurczak, mozzarella, ryż rojo, frijoles refritos, kukurydza, piklowana cebula, kapusta, sos chipotle, kolendra", price: "42 zł" },
    ],
  },
  {
    id: "bowle",
    title: "Bowle",
    subtitle: "Miska pełna dobroci, bez tortilli",
    dishes: [
      { name: "Bowl z kurczakiem", desc: "Szarpany kurczak, ryż rojo, kukurydza, pikle, kolendra", price: "34 zł" },
      { name: "Bowl z wieprzowiną", desc: "Szarpana wieprzowina, frytki, mozzarella, piklowana cebula, kolendra", price: "34 zł" },
      { name: "Bowl wege", desc: "Tofu achiote, ryż rojo, mozzarella, pikle, kolendra", price: "34 zł", tags: ["wege"] },
    ],
  },
  {
    id: "dodatki",
    title: "Dodatki",
    subtitle: "Do podzielenia się, albo nie",
    dishes: [
      { name: "Nachosy", price: "8 zł" },
      { name: "Maślana kukurydza z tajín", price: "9 zł" },
      { name: "Frytki", price: "12 zł" },
      { name: "Frytki z batatów", price: "16 zł" },
      { name: "Guacamole", price: "8 zł" },
    ],
  },
  {
    id: "salsy",
    title: "Sosy i salsy",
    subtitle: "Od łagodnych po piekielne",
    dishes: [
      { name: "Chipotle", price: "4 zł" },
      { name: "Mango-mięta", price: "4 zł" },
      { name: "Salsa verde", price: "4 zł" },
      { name: "Salsa carolina reaper", price: "4 zł", tags: ["ostre"] },
      { name: "Śmietana", price: "4 zł" },
      { name: "Frijoles refritos", price: "4 zł" },
    ],
  },
  {
    id: "napoje",
    title: "Napoje",
    subtitle: "Coś do popicia",
    dishes: [
      { name: "Pomarańcza", price: "8 zł" },
      { name: "Kiwi", price: "8 zł" },
      { name: "Oranżada", price: "8 zł" },
      { name: "Tonic", price: "8 zł" },
      { name: "Woda gazowana", price: "7 zł" },
      { name: "Woda niegazowana", price: "7 zł" },
    ],
  },
];

export type Review = { name: string; when: string; text: string; rating: number };

export const reviews: Review[] = [
  { name: "Karolina Springer", when: "17 godzin temu", rating: 5, text: "Bardzo bardzo dobre tacos!! 🤩 Obsługa super, klimat genialny, wrócę na pewno." },
  { name: "Marika Augustyn", when: "wczoraj", rating: 5, text: "W końcu porządne porcje tacosów, którymi można się najeść i to w normalnej cenie! Bardzo fajne tortille i ciekawe wariacje, z trzech które zamówiliśmy każde było pyszne." },
  { name: "Aleks Sokołowski", when: "wczoraj", rating: 5, text: "OJ TAK WIELKIEGO BURRITO W ŻYCIU NIE JADŁEM! Po prostu przefantastyczne! A tacosy również wyśmienite! Nowa knajpa i zdecydowanie warta odwiedzenia 😁" },
  { name: "Tomasz Wieczorek", when: "3 dni temu", rating: 5, text: "Autentyczny meksykański smak w sercu Poznania. Salsa robiona na miejscu czuć od pierwszego kęsa." },
  { name: "Natalia Kowalczyk", when: "tydzień temu", rating: 5, text: "Klimat jak w małej knajpce w Oaxaca. Horchata obowiązkowa, a guacamole najlepsze w mieście." },
  { name: "Bartosz Lewandowski", when: "2 tygodnie temu", rating: 5, text: "Ostre, świeże, sycące. Burrito Diablo nie jest dla mięczaków, uwielbiam to miejsce." },
];

export const nav = [
  { href: "/", label: "Start" },
  { href: "/menu", label: "Menu" },
  { href: "/about", label: "O nas" },
  { href: "/reviews", label: "Opinie" },
  { href: "/contact", label: "Kontakt" },
];
