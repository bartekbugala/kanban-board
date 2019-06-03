// CORS fix
const prefix = "https://cors-anywhere.herokuapp.com/";
const baseUrl = "https://kodilla.com/pl/bootcamp-api";
const myHeaders = {
  "X-Client-Id": "4058",
  "X-Auth-Token": "7d10d2376dc2b0842f29fefd93eda957"
};

fetch(prefix + baseUrl + "/board", { headers: myHeaders })
  .then(function(resp) {
    return resp.json();
  })
  .then(function(resp) {
    setupColumns(resp.columns);
  });

function setupColumns(columns) {
  columns.forEach(function(column) {
    let col = new Column(column.id, column.name);
    board.addColumn(col);
    setupCards(col, column.cards);
  });
}

function setupCards(col, cards) {
  cards.forEach(function(card) {
    let cardObj = new Card(card.id, card.name);
    col.addCard(cardObj);
  });
}

function generateTemplate(name, data, basicElement) {
  let template = document.getElementById(name).innerHTML;
  let element = document.createElement(basicElement || "div");
  element.classList.add("column-wrapper");

  Mustache.parse(template);
  element.innerHTML = Mustache.render(template, data);

  return element;
}
