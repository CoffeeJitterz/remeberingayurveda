const express = require('express')
const eventRoutes = require('./src/events/routes')

const app = express()
const port = 3005

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Remembering Aurveda')
})

app.use('/api/events', eventRoutes)

app.listen(port, () => console.log(`Remembering_Aurveda is running on port ${port}`))