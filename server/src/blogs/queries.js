const getBlogs = 'SELECT * FROM blogs'
const getBlogsById = 'SELECT * FROM blogs WHERE id = $1'
const addBlog = 'INSERT INTO blogs(title, date, body, image) VALUES ($1, $2, $3, $4)'
const updateBlog = 'UPDATE blogs SET title = $1, date = $2, body = $3, image = $4 WHERE id = $5'
const deleteBlog = 'DELETE FROM blogs WHERE id = $1'

module.exports = {
    getBlogs,
    getBlogsById,
    addBlog,
    updateBlog,
    deleteBlog,
}