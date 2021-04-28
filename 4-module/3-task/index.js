




function highlight(table) {
  // ваш код...
  let rows = table.tBodies[0].rows;
  //console.log (rows);
  for (let tr of rows) {

    if (tr.cells[2].innerHTML === 'm') {
      tr.classList.add('male');
    } else {
      tr.classList.add('female');
    }

    if (tr.cells[1].innerHTML < '18') {
      tr.style.textDecoration = 'line-through'
    }

    if (!tr.cells[3].hasAttribute('data-available')) {
      tr.setAttribute('hidden', 'true');
    }
    if (tr.cells[3].dataset.available === 'true') {
      tr.classList.add('available');
    }
    if (tr.cells[3].dataset.available === 'false') {
      tr.classList.add('unavailable');
    }
  }
}