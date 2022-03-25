const getEvents = "SELECT * FROM events"
const getEventById = "SELECT * FROM events WHERE id = $1"
const addEvent = "INSERT INTO events(title, date, description, image) VALUES($1, $2, $3, $4)"
const deleteEvent = "DELETE FROM events WHERE id = $1"

module.exports = {
    getEvents,
    getEventById,
    addEvent,
    deleteEvent,
}