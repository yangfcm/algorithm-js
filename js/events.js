/**
 * @name events
 * @description Create an *event* library out of the Events class.
 * The Events class should have methods 'on', 'trigger' and 'off'
 */
class Events {
  constructor() {
    this.events = {};
  }

  /**
   * @name on
   * @param {string} eventName
   * @param {function} callback
   * @description Register an event handler
   */
  on(eventName, callback) {
    if (this.events[eventName]) {
      this.events[eventName].push(callback);
    } else {
      this.events[eventName] = [callback];
    }
  }

  /**
   * @name trigger
   * @param {string} eventName
   * @description Trigger all callbacks associated with a given eventName
   */
  trigger(eventName) {
    if (this.events[eventName]) {
      for (let cb of this.events[eventName]) {
        cb();
      }
    }
  }

  /**
   * @name off
   * @param {string} eventName
   * @description Remove all event handlers associated with the given eventName
   */
  off(eventName) {
    delete this.events[eventName];
  }
}

module.exports = Events;
