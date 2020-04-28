import sortByHealth from '../app';

describe('sortByHealth', () => test.each([
  ['different health', [{ name: 'мечник', health: 10 }, { name: 'маг', health: 100 }, { name: 'лучник', health: 80 }],
    [{ name: 'маг', health: 100 }, { name: 'лучник', health: 80 }, { name: 'мечник', health: 10 }]],
  ['same health', [{ name: 'копейщик', health: 60 }, { name: 'арбалетчик', health: 100 }, { name: 'мечник', health: 60 }],
    [{ name: 'арбалетчик', health: 100 }, { name: 'копейщик', health: 60 }, { name: 'мечник', health: 60 }]],
])(
  ('%s'),
  (level, amount, expected) => {
    const result = sortByHealth(amount);
    expect(result).toEqual(expected);
  },
));
