const express = require('express')
const cors = require('cors')
const eventRoutes = require('./src/events/routes')
const blogRoutes = require('./src/blogs/routes')

const app = express()
const port = 3005

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    res.send('Remembering Aurveda')
})

app.use('/api/events', eventRoutes)
app.use('/api/blogs', blogRoutes)

app.listen(port, () => console.log(`Remembering_Aurveda is running on port ${port}`))