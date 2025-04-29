const cards = [
  {
    foto: "elbrus@1x",
    foto_2x: "elbrus@2x",
    title: "Путешествие<br>вокруг Эльбруса",
    location: "Кавказ",
    days: "4 дня",
    nights: "3 ночи",
    stars: 4,
    dates: "12.06–19.06",
    group: "до 15 чел.",
  },
  
  // {
  //   foto: "belukha@1x",
  //   foto_2x: "belukha@2x",
  //   title: "Путь к подножию<br>Белухи",
  //   location: "Алтай",
  //   days: "14 дней",
  //   nights: "13 ночей",
  //   stars: "",
  //   dates: "14.06–23.06",
  //   group: "до 25 чел.",
  // },
  // {
  //   foto: "fisht@1x",
  //   foto_2x: "fisht@2x",
  //   title: "Через Фишт<br>к Чёрному морю <br>и обратно",
  //   location: "Адыгея",
  //   days: "7 дней",
  //   nights: "6 ночей",
  //   stars: "",
  //   dates: "15.07–19.07",
  //   group: "до 22 чел.",
  // },
  // {
  //   foto: "",
  //   foto_2x: "",
  //   title: "Восхождение<br>Манарага",
  //   location: "Урал",
  //   days: "9 дней",
  //   nights: "10 ночей",
  //   stars: "",
  //   dates: "12.07–19.07",
  //   group: "до 7 чел.",
  // },
];
export { cards };

const catalog = document.querySelector(".tours__list");
const cardTemplate = document.querySelector("#card").content; //template

let addCard = (card) => {
  const cardElement = cardTemplate
    .querySelector(".tours__list-item")
    .cloneNode(true);
  cardElement.querySelector(
    ".card__image-webp"
  ).srcset = `img/cards/${card.foto}.webp, img/cards/${card.foto_2x}.webp`;
  cardElement.querySelector(
    ".card__image-png"
  ).srcset = `img/cards/${card.foto}.png, img/cards/${card.foto_2x}.png`;
  cardElement.querySelector(".card__image").src += `${card.foto}.png`;
  cardElement.querySelector(".card__image").srcset += `${card.foto_2x}.png`;
  cardElement.querySelector(".card__title").textContent = card.title;
  cardElement.querySelector(".card__location").textContent = card.location;
  cardElement.querySelector(".card__days").textContent = card.days;
  cardElement.querySelector(".card__nights").textContent = card.nights;

  cardElement.querySelector(".card__stars").textContent = `stars${card.stars}.svg`;
  cardElement.querySelector(".card__dates").textContent = card.dates;
  cardElement.querySelector(".card__group").textContent = card.group;

  catalog.append(cardElement);
};

export function showCards(cards) {
  for (const card of cards) {
    addCard(card);
  }
}
