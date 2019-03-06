export const person = {
  name: "",
  first: "",
  getFullName() {
    return `${this.first} ${this.name}`;
  }
};

// TODO : assigner person comme prototype
export const user = {
  rights: [],
  hasRight(right) {
    return this.rights.includes(right);
  }
};
Object.setPrototypeOf(user, person);

// TODO: assigner user comme prototype
export const bob = {
  name: "Afett",
  first: "Bob",
  rights: ["create", "read"]
};
Object.setPrototypeOf(bob,user);

// 1) avec Object.setPrototypeOf
// 2) avec Object.create et avec Object.assign
