/*
 Funkcja generująca ciąg znaków z daty - można wykorzystać jako element składowy generowania unikalnego klucza.
 Opcjonalny argument w posiaci liczby na początku pozwala usunąć początkowe znaki ciągu liczbowego
*/
function uniqueStringFromDate(removeFromStart = 0) {
    let timeInMs = Date.now();
    let str = timeInMs.toString();
    str = str.substring(removeFromStart);
    return str;
}


let table = {
    name: 'project',
    element: document.getElementById('board')
};

let column = {
    id: 1234567,
    name: document.createElement('div')
};

let card = {
    id: '12312312',
    description: 'Create Kanban app',
    color: 'green',
    element: document.createElement('div')
};