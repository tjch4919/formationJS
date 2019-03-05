export function Observable(setup) {
  //TODO
  this.observers = [];
  setup({
    emit: data => {
      this.observers.forEach(observer => observer.onValue(data));
    },
    complete: () => {
      this.observers.forEach(observer => observer.onComplete());
    }
  });
}

Observable.prototype.subscribe = function(observer) {
  //TODO
  this.observers.push(observer);
  observer.unsubscribe = () => {
    this.observers.filter(obs => obs !== observer);
  };
  return observer;
};
