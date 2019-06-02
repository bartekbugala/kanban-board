let board = {
    name: 'Kanban Board',
    addColumn: function (column) {
        this.element.appendChild(column.element);
        initSortable(column.id);
    },
    element: document.querySelector('#board .column-container')
};

function initSortable(id) {
    let el = document.getElementById(id);
    let sortable = Sortable.create(el, {
        group: 'kanban',
        sort: true
    });
}

document.querySelector('#board .create-column').addEventListener('click', function () {
    let name = prompt('Enter a column name');
    let column = new Column(name || 'Unnamed');
    board.addColumn(column);
});