import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import certificateRoutes from './routes/certificate'

const app = express()

app.use(cors())
app.use(express.json())
app.use('/uploads', express.static('uploads'))

console.log('LOADED CERTIFICATE ROUTES')
app.use('/api/v1/certificates', certificateRoutes)
console.log('ROUTE MOUNTED')

const PORT = Number(process.env.PORT) || 10000

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on port ${PORT}`)
})
