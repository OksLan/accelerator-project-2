const cards = [
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
export { cards };

const catalog = document.querySelector(".tours__list");
const cardTemplate = document.querySelector("#card").content;

let addCard = (card) => {
  const cardElement = cardTemplate
    .querySelector(".tours__list-item")
    .cloneNode(true);
  cardElement.classList.add("swiper-slide");

  // картинка-фон
  const sources = cardElement.querySelectorAll('source');
  sources.forEach(source => {
    const originalSrcset = source.getAttribute('data-srcset');
    if (originalSrcset) {
      const replaced = originalSrcset
        .replaceAll('[[id]]', card.foto);
      source.setAttribute('srcset', replaced);
    }
  });

  const img = cardElement.querySelector('.card__image');
  if (img) {
    const rawSrc = img.dataset.src;
    const rawSrcset = img.dataset.srcset;
    img.src = rawSrc.replace('[[id]]', card.foto);
    img.srcset = rawSrcset.replaceAll('[[id]]', card.foto);

    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = card.title;
    img.alt = tempDiv.textContent.trim();
  }

  // location
  cardElement.querySelector(".card__location-text").textContent = card.location;

  // duration
  cardElement.querySelector(".card__days-text").textContent = card.days;
  cardElement.querySelector(".card__nights-text").textContent = card.nights;

  // title
  cardElement.querySelector(".card__title").innerHTML = card.title;

  // stars
  const starsIcon = cardElement.querySelector(".card__stars-icon");
  starsIcon.innerHTML = "";
  const starsUse = document.createElementNS("http://www.w3.org/2000/svg", "use");
  starsUse.setAttribute("href", `/__spritemap#sprite-stars-${card.stars}`);
  starsIcon.appendChild(starsUse);

  // dates
  cardElement.querySelector(".card__dates-dates").textContent = card.dates;

  // group
  cardElement.querySelector(".card__group-number").textContent = card.group;

  catalog.append(cardElement);
};

export function showCards(cards) {
  for (const card of cards) {
    addCard(card);
  }
}
