const translations = {
  en: {
    skip: "Skip to content", navStory: "Our story", navMenu: "The menu", navVisit: "Find us",
    callUs: "Call us", eyebrow: "Caffe · Burger boutique · Sarajevo",
    heroLineOne: "Make room", heroLineTwo: "for good moments.",
    heroDescription: "Coffee that turns into conversation. Burgers worth slowing down for. Come by whenever you need a little more soul in your day.",
    exploreMenu: "Explore the menu", findYourWay: "Find your way here",
    address: "Butmirska cesta 16A | 16B", madeFor: "Made for your moment",
    houseFavourite: "A house favourite",
    solarDescription: "Beetroot bun · double beef", menuPhotoTag: "From our menu",
    burgerPick: "A classic with a twist", healthyBeefBurger: "Healthy Beef Burger",
    juicyBeefPatty: "Juicy beef patty", moreCategories: "Breakfast · pasta · salads · desserts",
    heroBottom: "A little pause in the middle of everything.",
    ribbonOne: "Good coffee", ribbonTwo: "Burgers with character", ribbonThree: "Room for dessert",
    storyLabel: "A place to settle in", storyHeading: "Some days call for<br><em>one more coffee.</em>",
    storyBody: "La Soul is a caffe and burger boutique for the unhurried bits of the day: a familiar face across the table, a favourite on the plate, and nowhere else you need to be just yet.",
    seeWhatOn: "See what's on the menu", coffeeTitle: "Stay for the coffee",
    coffeeText: "Take a seat, take your time. Your table is waiting.",
    burgerTitle: "Come hungry", burgerText: "From breakfast to burgers, there's something for the moment.",
    asideQuote: "Good things<br>happen around<br>a table.",
    menuLabel: "A little something for everyone", menuHeading: "Come for what<br><em>you're craving.</em>",
    menuIntro: "Breakfast, burgers, pasta, salads, sweet things and more. Browse the full menu and find your next favourite.",
    morningMood: "For slow mornings", breakfast: "Breakfast", takeALook: "Take a look",
    signatureStack: "Stacked with character", burgers: "Burgers", andThenSome: "And then some",
    moreGoodness: "More goodness", fullMenu: "See the full menu",
    menuCtaNote: "The full menu is just a click away.", viewFullMenu: "View full menu",
    visitLabel: "We'll save you a seat", visitHeading: "Find your<br><em>way to La Soul.</em>",
    visitIntro: "Drop in for a coffee, a bite, or a little bit of both. We're here in Sarajevo.",
    openMaps: "Open in Maps", mapCaption: "SARAJEVO · BOSNIA & HERZEGOVINA",
    addressLabel: "Come find us", callAhead: "Give us a call",
    hoursNote: "For today's opening hours, please give us a call.",
    footerLine: "A little soul goes a long way."
  },
  bs: {
    skip: "Preskoči na sadržaj", navStory: "Naša priča", navMenu: "Meni", navVisit: "Gdje smo",
    callUs: "Pozovite nas", eyebrow: "Kafić · Burger boutique · Sarajevo",
    heroLineOne: "Napravite mjesta", heroLineTwo: "za lijepe trenutke.",
    heroDescription: "Kafa koja se pretvori u razgovor. Burgeri zbog kojih vrijedi usporiti. Svratite kad god vam u danu zatreba malo više duše.",
    exploreMenu: "Pogledajte meni", findYourWay: "Pronađite nas",
    address: "Butmirska cesta 16A | 16B", madeFor: "Za vaš trenutak",
    houseFavourite: "Omiljeno u kući",
    solarDescription: "Lepinja od cikle · duplo goveđe meso", menuPhotoTag: "Sa našeg menija",
    burgerPick: "Klasik s posebnim dodirom", healthyBeefBurger: "Zdravi goveđi burger",
    juicyBeefPatty: "Sočna goveđa pljeskavica", moreCategories: "Doručak · tjestenina · salate · deserti",
    heroBottom: "Mali predah usred svega.",
    ribbonOne: "Dobra kafa", ribbonTwo: "Burgeri s karakterom", ribbonThree: "Uvijek ima mjesta za desert",
    storyLabel: "Mjesto za predah", storyHeading: "Neki dani traže<br><em>još jednu kafu.</em>",
    storyBody: "La Soul je kafić i burger boutique za one opuštenije dijelove dana: poznato lice preko puta, omiljeno jelo na stolu i još nigdje ne morate žuriti.",
    seeWhatOn: "Pogledajte meni", coffeeTitle: "Ostanite na kafi",
    coffeeText: "Udobno se smjestite i usporite. Vaš sto vas čeka.",
    burgerTitle: "Dođite gladni", burgerText: "Od doručka do burgera, tu je nešto za svaki trenutak.",
    asideQuote: "Lijepe se stvari<br>događaju oko<br>stola.",
    menuLabel: "Za svakoga ponešto", menuHeading: "Dođite po ono<br><em>što vam se jede.</em>",
    menuIntro: "Doručak, burgeri, tjestenina, salate, slatki zalogaji i još mnogo toga. Pregledajte cijeli meni i pronađite svog novog favorita.",
    morningMood: "Za spora jutra", breakfast: "Doručak", takeALook: "Pogledajte",
    signatureStack: "Složeni s karakterom", burgers: "Burgeri", andThenSome: "I još ponešto",
    moreGoodness: "Još dobrih zalogaja", fullMenu: "Pogledajte cijeli meni",
    menuCtaNote: "Cijeli meni vas čeka na jedan klik.", viewFullMenu: "Otvori cijeli meni",
    visitLabel: "Čuvamo vam mjesto", visitHeading: "Pronađite<br><em>put do La Soula.</em>",
    visitIntro: "Svratite na kafu, nešto za pojesti ili oboje. Nalazimo se u Sarajevu.",
    openMaps: "Otvori u mapama", mapCaption: "SARAJEVO · BOSNA I HERCEGOVINA",
    addressLabel: "Posjetite nas", callAhead: "Nazovite nas",
    hoursNote: "Za današnje radno vrijeme, molimo vas da nas pozovete.",
    footerLine: "Malo duše daleko se čuje."
  }
};

function setLanguage(language) {
  const dictionary = translations[language] || translations.en;
  document.documentElement.lang = language;
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const value = dictionary[element.dataset.i18n];
    if (value) element.innerHTML = value;
  });
  document.querySelectorAll("[data-language]").forEach((button) => {
    const active = button.dataset.language === language;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  });
  try { localStorage.setItem("la-soul-language", language); } catch {}
}

document.querySelectorAll("[data-language]").forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.language));
});

const navToggle = document.querySelector("#navToggle");
const siteNav = document.querySelector("#siteNav");

function closeNavigation() {
  navToggle.setAttribute("aria-expanded", "false");
  navToggle.setAttribute("aria-label", "Open navigation");
  siteNav.classList.remove("is-open");
  document.body.classList.remove("nav-open");
}

navToggle.addEventListener("click", () => {
  const expanded = navToggle.getAttribute("aria-expanded") === "true";
  navToggle.setAttribute("aria-expanded", String(!expanded));
  navToggle.setAttribute("aria-label", expanded ? "Open navigation" : "Close navigation");
  siteNav.classList.toggle("is-open", !expanded);
  document.body.classList.toggle("nav-open", !expanded);
});

siteNav.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeNavigation));
document.querySelector("#year").textContent = new Date().getFullYear();

let savedLanguage = "en";
try { savedLanguage = localStorage.getItem("la-soul-language") || "en"; } catch {}
setLanguage(savedLanguage);
