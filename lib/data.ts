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
  desc: string;
  price: string;
  tags?: ("ostre" | "wege" | "nowość")[];
};

export type MenuSection = { id: string; title: string; subtitle: string; dishes: Dish[] };

export const menu: MenuSection[] = [
  {
    id: "tacos",
    title: "Tacos",
    subtitle: "Na ręcznie robionych tortillach z kukurydzy",
    dishes: [
      { name: "Tacos al Pastor", desc: "Marynowana wieprzowina, ananas, kolendra, cebula", price: "26 zł", tags: ["nowość"] },
      { name: "Carnitas", desc: "Wolno duszona wieprzowina, salsa verde, limonka", price: "27 zł" },
      { name: "Pollo Asado", desc: "Grillowany kurczak, chipotle, kremowy awokado", price: "25 zł" },
      { name: "Tacos de Hongos", desc: "Pieczone grzyby, czarna fasola, queso fresco", price: "24 zł", tags: ["wege"] },
      { name: "Barbacoa", desc: "Szarpana wołowina, ostra salsa roja, marynowana cebula", price: "29 zł", tags: ["ostre"] },
    ],
  },
  {
    id: "burritos",
    title: "Burritos",
    subtitle: "Wielkie, soczyste, takich w życiu nie jadłeś",
    dishes: [
      { name: "Burrito Grande", desc: "Wołowina, ryż, fasola, ser, guacamole, salsa", price: "38 zł" },
      { name: "Burrito Pollo", desc: "Kurczak, papryka, ryż, kremowy sos chipotle", price: "35 zł" },
      { name: "Burrito Vegetariano", desc: "Bataty, czarna fasola, kukurydza, awokado", price: "33 zł", tags: ["wege"] },
      { name: "Burrito Diablo", desc: "Wołowina, habanero, jalapeño, ostra salsa", price: "39 zł", tags: ["ostre"] },
    ],
  },
  {
    id: "quesadillas",
    title: "Quesadillas & Más",
    subtitle: "Roztopiony ser i chrupiąca tortilla",
    dishes: [
      { name: "Quesadilla de Queso", desc: "Trzy sery, jalapeño, kremowa salsa", price: "28 zł", tags: ["wege"] },
      { name: "Quesadilla Carne", desc: "Wołowina, ser, papryka, guacamole", price: "32 zł" },
      { name: "Nachos Supremos", desc: "Chrupiące chipsy, ser, jalapeño, salsa, śmietana", price: "30 zł", tags: ["wege"] },
      { name: "Elote", desc: "Pieczona kukurydza, majonez, cotija, chili, limonka", price: "18 zł", tags: ["wege"] },
    ],
  },
  {
    id: "bebidas",
    title: "Bebidas",
    subtitle: "Napoje, które gaszą ogień",
    dishes: [
      { name: "Margarita Clásica", desc: "Tequila, limonka, triple sec, sól", price: "24 zł" },
      { name: "Agua de Jamaica", desc: "Mrożony napar z hibiskusa", price: "14 zł", tags: ["wege"] },
      { name: "Horchata", desc: "Kremowy napój ryżowy z cynamonem", price: "15 zł", tags: ["wege"] },
      { name: "Cerveza Mexicana", desc: "Corona / Modelo z limonką", price: "16 zł" },
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
