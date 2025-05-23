const tourCards = [
  {
    foto: "elbrus",
    title: "Путешествие<br>вокруг Эльбруса",
    location: "Кавказ",
    days: "4 дня",
    nights: "3 ночи",
    stars: 4,
    dates: "12.06–19.06",
    group: "до 15 чел.",
  },
  {
    foto: "belukha",
    title: "Путь к подножию<br>Белухи",
    location: "Алтай",
    days: "14 дней",
    nights: "13 ночей",
    stars: "3",
    dates: "14.06–23.06",
    group: "до 25 чел.",
  },
  {
    foto: "fisht",
    title: "Через Фишт<br>к Чёрному морю <br>и обратно",
    location: "Адыгея",
    days: "7 дней",
    nights: "6 ночей",
    stars: "4",
    dates: "15.07–19.07",
    group: "до 22 чел.",
  },
  {
    foto: "manaraga",
    title: "Восхождение<br>Манарага",
    location: "Урал",
    days: "9 дней",
    nights: "10 ночей",
    stars: "5",
    dates: "12.07–19.07",
    group: "до 7 чел.",
  },
];
export { tourCards };

const catalog = document.querySelector(".tours__list");
const cardTemplate = document.querySelector("#tour-card").content;

let addCard = (tourCard) => {
  const cardElement = cardTemplate
    .querySelector(".tours__list-item")
    .cloneNode(true);
  cardElement.classList.add("swiper-slide");

  // картинка-фон
  const sources = cardElement.querySelectorAll('source');
  sources.forEach(source => {
    const originalSrcset = source.getAttribute('data-srcset');
    if (originalSrcset) {
      const replaced = originalSrcset.replaceAll('[[id]]', tourCard.foto);
      source.setAttribute('srcset', replaced);
    }
  });

  const img = cardElement.querySelector('.tour-card__image');
  if (img) {
    const rawSrc = img.dataset.src;
    const rawSrcset = img.dataset.srcset;
    img.src = rawSrc.replace('[[id]]', tourCard.foto);
    img.srcset = rawSrcset.replaceAll('[[id]]', tourCard.foto);

    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = tourCard.title;
    img.alt = tempDiv.textContent.trim();
  }

  cardElement.querySelector(".tour-card__location-text").textContent = tourCard.location;
  cardElement.querySelector(".tour-card__days-text").textContent = tourCard.days;
  cardElement.querySelector(".tour-card__nights-text").textContent = tourCard.nights;
  cardElement.querySelector(".tour-card__title").innerHTML = tourCard.title;

  const starsIcon = cardElement.querySelector(".tour-card__stars-icon");
  starsIcon.innerHTML = "";
  const starsUse = document.createElementNS("http://www.w3.org/2000/svg", "use");
  starsUse.setAttribute("href", `/__spritemap#sprite-stars-${tourCard.stars}`);
  starsIcon.appendChild(starsUse);

  cardElement.querySelector(".tour-card__dates-dates").textContent = tourCard.dates;
  cardElement.querySelector(".tour-card__group-number").textContent = tourCard.group;

  catalog.append(cardElement);
};

export function showCards(tourCards) {
  for (const tourCard of tourCards) {
    addCard(tourCard);
  }
}
