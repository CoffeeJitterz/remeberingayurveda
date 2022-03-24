const getBlogs = 'SELECT * FROM blogs'
const getBlogsById = 'SELECT * FROM blogs WHERE id = $1'

module.exports = {
    getBlogs,
    getBlogsById,
}