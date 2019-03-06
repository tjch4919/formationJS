import data from "../test/fakedata.json";

// TODO: implémenter une fonction qui compose plusieurs fonctions
// compose(f,g,h)(x) <=> h(g(f(x)))

export function compose(f, ...funcs) {
  return (...args)=>funcs.reduce((result,fn)=>fn(result), f(...args));
  
  return (...args)=>{
    let result = f(...args);
    funcs.forEach(func=>result = func(result));
    return result;
  };
}

// les fonctions composées doivent être pures et non mutables
export const where = (field, condition, array) => array.filter(({ [field]: value }) => condition(value))
export const orderBy = (field, array) => [...array].sort((a, b) => a[field] < b[field] ? -1 : 1);
export const take = (number, array) => array.slice(0, number)
export const map = (transform, array) => array.map(transform)

// exemple d'utilisation
const query = compose(
    data => where("age", n => n >= 18, data),
    results => orderBy("lastName", results),
    results => take(5, results),
    results => map(user => `${user.firstName} ${user.lastName}`, results)
)

console.log(
    query(data).join("\n")
);
