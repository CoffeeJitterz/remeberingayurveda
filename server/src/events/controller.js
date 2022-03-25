const pool = require('../../db')
const queries = require('./queries')

const getEvents = (req, res) => {
    pool.query(queries.getEvents, (error, results) => {
        if (error) throw error
        res.status(200).json(results.rows)
    })
}

const getEventById = (req, res) => {
    const id = parseInt(req.params.id)
    console.log(id)
    pool.query(queries.getEventById, [id], (error, results) => {
        if (error) throw error
        res.status(200).json(results.rows)
    })
}

const addEvent = (req, res) => {
    const { title, date, description, image } = req.body

    pool.query(queries.addEvent, [title, date, description, image], (error, results) => {
        if (error) throw error
        res.status(201).send('New Event Created!')
    })
}

const deleteEvent = (req, res) => {
    const id = parseInt(req.params.id)
    pool.query(queries.deleteEvent, [id], (error, results) => {
        if (error) throw error
        res.status(200).send(`event ${id} Deleted`)
    })
}

module.exports = {
    getEvents,
    getEventById,
    addEvent,
    deleteEvent,
}