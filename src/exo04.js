export function addWatcher(obj, prop, getter, setter) {
  // change le descripteur de la propriété prop de l'objet obj pour appeler les fonctions:
  // - getter lorsque la propriété prop est accédée
  // - setter lorsque la propriété prop est modifiée
  // il doit toujours être possible d'écrire et de lire une valeur pour la propriété prop
  let value = obj[prop];
  Object.defineProperty(obj, prop, {
    get() {
      getter(value);
      return value;
    },
    set(newValue) {
      setter(newValue);
      value = newValue;
      return true;
    }
  });
}

export function setPrivatesAndConstants(obj) {
  // changer le descripteur de chaque propriété de l'objet:
  // énumérable si la clé ne commence pas par par un _
  // mutable et configurable si la clé ne commence pas par une majuscule (regex: /[A-Z]/)
  for (let key in obj) {
    Object.defineProperty(obj, key, {
      enumerable: !key.startsWith("_"),
      configurable: !key.match(/[A-Z]/),
      writable: !key.match(/[A-Z]/)
    });
  }
}
