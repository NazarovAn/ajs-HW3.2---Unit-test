function renderList(arr) {
  const table = document.querySelector('.before_sort');

  arr.forEach((element) => {
    table.insertAdjacentHTML('beforeend', `<li class="li_item">Персонаж ${element.name} - здоровье ${element.health}</li>`);
  });
}

function renderListAfterSort(arr) {
  const table = document.querySelector('.after_sort');

  arr.forEach((element) => {
    table.insertAdjacentHTML('beforeend', `<li class="li_item">Персонаж ${element.name} - здоровье ${element.health}</li>`);
  });
}

export { renderList, renderListAfterSort };
