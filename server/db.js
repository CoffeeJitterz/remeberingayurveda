const Pool = require("pg").Pool

const pool = new Pool({
    user: "joshmillard",
    host:"localhost",
    database: "remembering_aurveda",
    port: 5432
})

module.exports = pool 