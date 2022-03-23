const pool = require('../../db')

const getEvents = (req, res) => {
    pool.query('SELECT * FROM EVENTS', (error, results) => {
        if (error) throw error
        res.status(200).json(results.rows)
    })
}

module.exports = {
    getEvents
}