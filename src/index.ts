import 'reflect-metadata'

import express from 'express'

const app = express()

// Middlewares
app.use(express.json())

// app.use(routes)

const PORT = process.env.PORT || 8080

app.listen(PORT, () => {
  console.log('Server is running on port', PORT)
})
