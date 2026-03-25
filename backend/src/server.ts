import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import certificateRoutes from './routes/certificate.route'

const app = express()

app.use(cors())
app.use(express.json())
app.use('/uploads', express.static('uploads'))

app.use('/api/v1/certificates', certificateRoutes)

const PORT = Number(process.env.PORT) || 10000

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on port ${PORT}`)
})
