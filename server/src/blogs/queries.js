const getBlogs = 'SELECT * FROM blogs'
const getBlogsById = 'SELECT * FROM blogs WHERE id = $1'
const addBlog = 'INSERT INTO blogs(title, date, body, image) VALUES ($1, $2, $3, $4)'

module.exports = {
    getBlogs,
    getBlogsById,
    addBlog,
}