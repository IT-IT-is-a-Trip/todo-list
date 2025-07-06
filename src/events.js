class Events {
    events = {}

    subscribe(eventName, event) {
        if (!events[eventName]) {events[eventName] = []}
        else {events[eventName].push(event)}
    }

    publish(eventName, data) {
        if (!events[eventName]) return
        events[eventName].forEach(event => event(data))
    }
}
export const events = new Events()

