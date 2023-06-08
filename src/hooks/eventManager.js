// eventManager.js
const eventManager = {
    events: {},
    subscribe(eventName, callback) {
        if (!this.events[eventName]) {
            this.events[eventName] = [];
        }
        this.events[eventName].push(callback);
    },
    unsubscribe(eventName, callback) {
        if (this.events[eventName]) {
            this.events[eventName] = this.events[eventName].filter(
                (eventCallback) => eventCallback !== callback
            );
        }
    },
    emit(eventName, data) {
        if (this.events[eventName]) {
            this.events[eventName].forEach((eventCallback) =>
                eventCallback(data)
            );
        }
    },
};

export default eventManager;
