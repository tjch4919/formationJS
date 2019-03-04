export function parseUserData(data) {
  // TODO: retourner un nouvel objet avec les propriétés de l'objet data
  // et ces valeurs par défaut pour les propriétés manquantes :
  const defaults = { name: "Anonymous", isAdmin: false };

  // 1 - en utilisant Object.assign
  return Object.assign({}, defaults, data);
  // 2 - en utilisant l'opérateur spread sur les properties
  return { ...defaults, ...data };
  // 3 - en utilisant le destructuring et les paramètres par défaut pour parseUserData
  let { name = "Anonymous", isAdmin = false, ...props } = data;
  return { name, isAdmin, ...props };
}
