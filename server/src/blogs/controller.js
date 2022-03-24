const { query } = require('express')
const pool = require('../../db')
const queries = require('./queries')

const getBlogs = (req, res) => {
    pool.query(queries.getBlogs, (error, results) => {
        if (error) throw error
        res.status(200).json(results.rows)
    })
}

const getBlogsById = (req, res) => {
    const id = req.params.id
    pool.query(queries.getBlogsById, [id], (error, results) => {
        if (error) throw error
        res.status(200).json(results.rows)
    })
}

module.exports = {
    getBlogs,
    getBlogsById,
}