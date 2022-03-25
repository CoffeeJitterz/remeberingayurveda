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
const addBlog = (req, res) => {
    const { title, date, body, image } = req.body
    pool.query(queries.addBlog, [title, date, body, image], (error, results) => {
        if (error) throw error
        res.status(201).send("New Blog Created!")
    })
}

const updateBlog = (req, res) => {
    const id = req.params.id
    const { title, date, body, image} = req.body
    pool.query(queries.getBlogsById, [id], (error, results) => {
        if (!results.rows.length) {
            res.send(`Blog Post ${id} Does Not Exist In The Database`)
        }
        pool.query(queries.updateBlog, [title, date, body, image, id], (error, results) => {
            if (error) throw error
            res.status(200).send(`Blog Post ${id} Updated!`)
        })
    }) 
} 

const deleteBlog = (req, res) => {
    const id = req.params.id
    pool.query(queries.getBlogsById, [id], (error, results) => {
        if (!results.rows.length) {
            res.send(`Blog Post ${id} Does Not Exist In The Database`)
        }
        pool.query(queries.deleteBlog, [id], (error, results) => {
            res.send(`Blog Post ${id} Deleted!`)
        })
    })
}

module.exports = {
    getBlogs,
    getBlogsById,
    addBlog,
    updateBlog,
    deleteBlog,
}