// retourne un objet où les valeurs des propriétés sont devenues les clés et les clés les valeurs
// { a: "b" } => { b: "a" }

export function invertKeysAndValues(obj) {
  let objToBEReturned = {};
  Object.entries(obj).forEach(function([x, y]) {
    Object.assign(objToBEReturned, { [y]: x });
  });
  return objToBEReturned;
}
