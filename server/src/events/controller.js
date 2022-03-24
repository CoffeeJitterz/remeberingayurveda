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

module.exports = {
    getEvents,
    getEventById,
}