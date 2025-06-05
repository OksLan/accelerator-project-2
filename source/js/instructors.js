const instructors = [
  {
    foto: "prokofyev",
    name: "Александр<br>Прокофьев",
    description: "Cтрогий и&nbsp;внимательный инструктор, весёлый и&nbsp;общительный человек. Любит природу.",
  },
  {
    foto: "afinogenova",
    name: "Светлана<br>Афиногенова",
    description: "Видеть мир вокруг, познавать его опасности, находить друг друга, становиться ближе, чувствовать &nbsp;&mdash; в&nbsp;этом назначение жизни.",
  },
  {
    foto: "kolesnichenko",
    name: "Надежда<br>Колесниченко",
    description: "Участники говорят, что Надежда ответственная, приятная в&nbsp;общении, и&nbsp;в&nbsp;поездках с&nbsp;ней чувствуешь себя спокойно и&nbsp;уверенно.",
  },
  {
    foto: "kaigorodov",
    name: "Федор<br>Кайгородов",
    description: "Опыт походов: Ходит в&nbsp;походы с&nbsp;2001&nbsp;года. В&nbsp;России побывал в&nbsp;горных районах Хибины, Архыз, много путешествует по&nbsp;Европе.",
  },
    {
    foto: "vastnetsov",
    name: "Даниэль<br>Васнецов",
    description: "Покорял самые сложные вершины. Выбирался из&nbsp;под лавин, дружит с&nbsp;медведями и&nbsp;не&nbsp;только.",
  },
];
export { instructors };

const catalog = document.querySelector(".instructors__list");
const instructorTemplate = document.querySelector("#instructor").content;

let addInstructor = (instructor) => {
  const instructorElement = instructorTemplate
    .querySelector(".instructors__list-item")
    .cloneNode(true);

  const sources = instructorElement.querySelectorAll('source');
  sources.forEach(source => {
    const dataSrcset = source.getAttribute('data-srcset');
    if (dataSrcset) {
      const replaced = dataSrcset.replaceAll('[[id]]', instructor.foto);
      source.setAttribute('srcset', replaced);
      source.removeAttribute('data-srcset'); // удалить data-* чтобы не дублировалось
    }
  });

  const img = instructorElement.querySelector("img.instructor__image");
  if (img) {
    const dataSrcset = img.getAttribute("data-srcset");
    if (dataSrcset) {
      img.setAttribute("srcset", dataSrcset.replaceAll('[[id]]', instructor.foto));
      img.removeAttribute("data-srcset");
    }

    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = instructor.name;
    img.alt = tempDiv.textContent.trim();
  }

  // имя
  const nameElement = instructorElement.querySelector(".instructor__name h7");
  if (nameElement) {
    nameElement.innerHTML = instructor.name;
  }

  // описание
  const descElement = instructorElement.querySelector("span");
  if (descElement) {
    descElement.innerHTML = instructor.description;
  }

  catalog.append(instructorElement);
};

export function showInstructors(list) {
  list.forEach(addInstructor);
}
