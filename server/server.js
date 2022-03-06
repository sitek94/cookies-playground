import express from 'express'
import cors from 'cors'

const app = express()

app.use(cors({ origin: 'http://localhost:3000' }))
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(3333, () => {
  console.log('Server started on port 3333')
})
