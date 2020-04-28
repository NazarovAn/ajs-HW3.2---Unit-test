export default function sortByHealth(arr) {
  arr.sort((a, b) => {
    if (a.health < b.health) {
      return 1;
    } if (a.health === b.health) {
      return 0;
    }
    return -1;
  });
  return arr;
}
