console.log("You are at " + window.location);

// const heading = document.createElement('h3')

// document.body.appendChild(heading)

const el = document.createElement("h2");
// document.body.appendChild(el)
document.body.append(el);
console.dir(el);

const parent = document.createElement("div");
const child = document.createElement("p");
parent.append(child);

document.body.append(parent);

parent.append("some text");

el.style = "font-size: 64px";
el.style.color = "blue";

el.textContent = "THIS IS HEADING";

el.classList = "main-heading box another";

function createCard() {
  const card = document.createElement("div");
  card.className = "card";
  return card;
}

createCard();

document.body.append(createCard());
