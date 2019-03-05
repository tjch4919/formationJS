export function deduplicateArray(arr) {
  // TODO: retirer les valeurs en double dans l'array et retourner l'array filtrée
  // 1 - avec les méthodes filter et indexOf
  return arr.filter((elem, i, array) => array.indexOf(elem) === i);
  // 2 - avec un Set et l'opérateur spread
  return [...new Set(arr)];
}

export function getPropertyFromValue(obj, val) {
  // TODO: retourner la clé de la propriété de obj ayant comme valeur val
  // 1 - avec les méthodes find et Object.keys
  return Object.keys(obj).find(value => obj[value] === val);
  // 2 - avec une Map et Object.entries
  return new Map(Object.entries(obj).map(([x, y]) => [y, x])).get(val);
  return new Map(Object.entries(obj).map(entry => entry.reverse())).get(val);
}
