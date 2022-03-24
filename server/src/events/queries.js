const getEvents = "SELECT * FROM events"
const getEventById = "SELECT * FROM events WHERE id = $1"

module.exports = {
    getEvents,
    getEventById,
}