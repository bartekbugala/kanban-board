const baseUrl = 'https://kodilla.com/pl/bootcamp-api';
const myHeaders = {
  'X-Client-Id': 'X-Client-Id',
  'X-Auth-Token': 'X-Auth-Token'
};



// OGÓLNA FUNKCJA
function randomString() {
    let chars = '0123456789abcdefghiklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXTZ';
    let str = '';
    for (let i = 0; i < 10; i++) {
        str += chars[Math.floor(Math.random() * chars.length)];
    }
    return str;
}

function generateTemplate(name, data, basicElement) {
    let template = document.getElementById(name).innerHTML;
    let element = document.createElement(basicElement || 'div');
    element.classList.add('column-wrapper');

    Mustache.parse(template);
    element.innerHTML = Mustache.render(template, data);

    return element;
}

 // CREATING COLUMNS
 let todoColumn = new Column('To do');
 let doingColumn = new Column('Doing');
 let doneColumn = new Column('Done');

 // ADDING COLUMNS TO THE BOARD
 board.addColumn(todoColumn);
 board.addColumn(doingColumn);
 board.addColumn(doneColumn);

 // CREATING CARDS
 let card1 = new Card('New task');
 let card2 = new Card('Create kanban boards');

 // ADDING CARDS TO COLUMNS
 todoColumn.addCard(card1);
 doingColumn.addCard(card2);