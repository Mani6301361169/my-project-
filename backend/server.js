import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import connectDB from './config/db.js'
import authRoutes from './routes/authRoutes.js'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

app.use(cors({ origin: 'http://localhost:5173', credentials: true }))
app.use(express.json())
app.use(cookieParser())

app.get('/', (req, res) => {
  res.json({ message: 'College Fees Management System API is running' })
})

app.use('/api/auth', authRoutes)

connectDB()

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
