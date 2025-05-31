const reviews = [
  {
    foto: "frolov",
    text1: "Осенью ходили в&nbsp;поход на&nbsp;Алтай с&nbsp;друзьями. Впечатления потрясающие! Инструкторы, настоящие эксперты, всему научили, все показали. Делились историями о&nbsp;местах, людях, культуре места.",
    text2: "С&nbsp;уверенностью могу сказать, что жизнь разделилась на&nbsp;до&nbsp;этого и&nbsp;после. Ещё никогда не&nbsp;отдыхал так душой и&nbsp;телом. Всем очень рекомендую!",
    name: "Фролов Александр",
    details: "38 лет, Москва"
  },
  {
    foto: "solovyov",
    text1: "Хороший полноценный поход с&nbsp;разнообразными локациями. В&nbsp;начале дорога идёт по&nbsp;лыжне, далее прошли мимо полигона, по&nbsp;болотам, у&nbsp;озёр и&nbsp;лесных ручьёв, остатков дач конца 19&nbsp;века. Было очень интересно!",
    text2: "Инструктор Федор дружелюбный, внимательный к&nbsp;технике безопасности и&nbsp;своим туристам. Всем советую этот тур.",
    name: "Иван Соловьёв",
    details: "25 лет, Владивосток"
  },
  {
    foto: "bazhenova",
    text1: "Ранее не&nbsp;ходила на&nbsp;такие длинные дистанции. В&nbsp;первый день прошли около 30&nbsp;км, физически я&nbsp;устала на&nbsp;18&nbsp;км, поэтому не&nbsp;была уверена, пройду&nbsp;ли до&nbsp;конца. Но&nbsp;я&nbsp;справилась. Второй день прошёл легче, чем ожидала, видимо организм уже привык.",
    text2: "Спасибо ребятам, инструкторам за&nbsp;помощь и&nbsp;поддержку! Я&nbsp;была рада быть в&nbsp;такой компании.",
    name: "Евгения Баженова",
    details: "23 года, Кострома"
  },
  {
    foto: "pirogova",
    text1: "Это был опыт, изменивший мою жизнь! Думала, не&nbsp;справлюсь, но&nbsp;все получилось! Дух захватывает, когда наконец‑то, преодолев все трудности и&nbsp;препятствия, взбираешься на&nbsp;вершину.",
    text2: "У&nbsp;нас собралась потрясающая команда. Все друг друга поддерживали, по&nbsp;вечерам мы&nbsp;сидели вместе у&nbsp;костра и&nbsp;пели песни. Обязательно повторю такое приключение!",
    name: "Елена Пирогова",
    details: "37 лет, Тюмень"
  },

];
export { reviews };

const catalog = document.querySelector(".reviews__list");
const reviewTemplate = document.querySelector("#review").content;

function addReview(review) {
  const reviewElement = reviewTemplate
    .querySelector(".reviews__list-item")
    .cloneNode(true);

  const sources = reviewElement.querySelectorAll("source");
  sources.forEach(function (source) {
    const dataSrcset = source.getAttribute("data-srcset");
    if (dataSrcset) {
      const newSrcset = dataSrcset.replaceAll("[[id]]", review.foto);
      source.setAttribute("srcset", newSrcset);
      source.removeAttribute("data-srcset");
    }
  });

  const img = reviewElement.querySelector("img.review__image");
  if (img) {
    const dataSrcset = img.getAttribute("data-srcset");
    if (dataSrcset) {
      const newSrcset = dataSrcset.replaceAll("[[id]]", review.foto);
      img.setAttribute("srcset", newSrcset);
      img.removeAttribute("data-srcset");
    }

    img.alt = review.name;
  }

  // text1
  const text1 = reviewElement.querySelector(".review__text span p:nth-of-type(1)");
  if (text1) {
    text1.innerHTML = review.text1;
  }

  // text2
  const text2 = reviewElement.querySelector(".review__text span p:nth-of-type(2)");
  if (text2) {
    text2.innerHTML = review.text2;
  }

  // name
  const nameElement = reviewElement.querySelector(".review__name");
  if (nameElement) {
    nameElement.textContent = review.name;
  }

  // details
  const detailsElement = reviewElement.querySelector(".review__details");
  if (detailsElement) {
    detailsElement.textContent = review.details;
  }

  catalog.append(reviewElement);
}

export function showReviews(list) {
  for (let i = 0; i < list.length; i++) {
    addReview(list[i]);
  }
}
