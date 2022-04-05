const express = require('express')
const path = require('path')


const cors = require('cors')

const eventRoutes = require('./src/events/routes')
const blogRoutes = require('./src/blogs/routes')
const { dirname } = require('path')

const app = express()
const port = process.env.PORT || 3001

//middlewear 
app.use(express.json())
app.use(cors())

app.use(express.static(path.resolve(__dirname, '../client/build')))

app.get('/api', (req, res) => {
    res.send('Remembering Aurveda')
})

// app.get('*', (req, res) => {
//     res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'))
// })

app.use('/api/events', eventRoutes)
app.use('/api/blogs', blogRoutes)

app.listen(port, () => console.log(`Remembering_Aurveda is running on port ${port}`))