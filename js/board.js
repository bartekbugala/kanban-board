let board = {
  name: "Kanban Board",
  addColumn: function(column) {
    this.element.appendChild(column.element);
    initSortable(column.id);
  },
  element: document.querySelector("#board .column-container")
};

function initSortable(id) {
  let el = document.getElementById(id);
  let sortable = Sortable.create(el, {
    group: "kanban",
    sort: true
  });
}

document.querySelector("#board .create-column").addEventListener("click", function() {
  let name = prompt("Enter a column name");
  let data = new FormData();

  data.append("name", name || Column.name);

  fetch(prefix + baseUrl + "/column", {
    method: "POST",
    headers: myHeaders,
    body: data
  })
    .then(function(resp) {
      return resp.json();
    })
    .then(function(resp) {
      let column = new Column(resp.id, name);
      board.addColumn(column);
    });
});
