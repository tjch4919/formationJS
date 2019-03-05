export function PubSub() {
  this.subscribers = new Map();
}

PubSub.prototype.on = function(event, callback) {
  // TODO
  if (!this.subscribers.has(event)) {
    this.subscribers.set(event, [callback]);
  } else {
    this.subscribers.get(event).push(callback);
  }
  return this.subscribers;
};

PubSub.prototype.emit = function(event, data) {
  // TODO
  if (!this.subscribers.has(event)) {
    return false;
  }
  this.subscribers.get(event).forEach(callback => callback(data));
};

// Pour aller plus loin:
// - méthode off(event, callback) pour retirer une souscription
// - on('*') pour réagir à tous les événements
