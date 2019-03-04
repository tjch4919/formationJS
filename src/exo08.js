// essayez d'utiliser l'opérateur spread et rest

// TODO: fonction retournant un objet avec comme propriétés
// la liste des valeurs reçues en arguments et comme valeur
// le nombre de fois où elles sont apparues

export function count(...args) {
  /*let obj = {};
  args.forEach(arg => {
    if (obj.hasOwnProperty(arg)) {
      obj[arg] += 1;
    } else {
      Object.assign(obj, { [arg]: 1 });
    }
  });
  return obj;*/
  return args.reduce(
    (obj, arg) => ({ ...obj, [arg]: (obj[arg] || 0) + 1 }),
    {}
  );
}

// exemple d'utilisation:
count("Carotte", "Chou", "Patate", "Chou", "Chou", "Carotte");
// { Carotte: 2, Chou: 3, Patate: 1 }

// TODO: fonction retournant l'argument apparu le plus de fois
export function mostFrequentIn(...args) {
  let maxEle,
    maxNum = 1;
  args.reduce((p, k) => {
    p[k] ? p[k]++ : (p[k] = 1);
    if (p[k] > maxNum) {
      maxEle = k;
      maxNum++;
    }
    return p;
  }, {});
  return maxEle;
}

// exemple d'utilisation:
mostFrequentIn("Carotte", "Chou", "Patate", "Chou", "Chou", "Carotte") ===
  "Chou";
