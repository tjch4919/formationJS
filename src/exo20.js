import data from "../test/fakedata.json";

export const query = array =>
  Object.assign(array, {
    //TODO: implémenter les méthodes
    where(field, condition) {
      let res = array.filter(obj=>condition(obj[field]));
      return query(res);
     },
    orderBy(field) { 
      let ordered =  array.sort((obj1, obj2)=>obj1[field]<obj2[field]?-1:1);
      return query(ordered)
    },
    take(number) {
      return query(array.slice(0,number));
     }
  });

// exemple d'utilisation
console.log(
  query(data)
    .where("age", n => n >= 18)
    .orderBy("lastName")
    .take(5)
    .map(user => `${user.firstName} ${user.lastName}`)
    .join("\n")
);
