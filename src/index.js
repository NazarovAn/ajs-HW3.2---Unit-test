import './css/main.css';
import sortByHealth from './js/app';
import { renderList, renderListAfterSort } from './js/renderList';

const charactersArray = [
  { name: 'мечник', health: 10 },
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 80 },
  { name: 'рыцарь', health: 90 },
  { name: 'берсерк', health: 5 },
  { name: 'копейщик', health: 60 },
  { name: 'арбалетчик', health: 100 },
  { name: 'мечник', health: 60 },
];

renderList(charactersArray);
sortByHealth(charactersArray);
renderListAfterSort(charactersArray);
