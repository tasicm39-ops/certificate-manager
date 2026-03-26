import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import certificateRoutes from './routes/certificate'
import { PrismaClient } from '@prisma/client'

const app = express()
const prisma = new PrismaClient()

app.use(cors())
app.use(express.json())
app.use('/uploads', express.static('uploads'))

app.get('/api/v1/certificates', async (_req, res) => {
    try {
        const certificates = await prisma.certificate.findMany({
            orderBy: { id: 'desc' },
        })
        res.status(200).json(certificates)
    } catch (error) {
        console.error('Direct fetch error:', error)
        res.status(500).json({ message: 'Server error' })
    }
})

app.get('/api/v1/certificates/getall', async (_req, res) => {
    try {
        const certificates = await prisma.certificate.findMany({
            orderBy: { id: 'desc' },
        })
        res.status(200).json(certificates)
    } catch (error) {
        console.error('Direct fetch error:', error)
        res.status(500).json({ message: 'Server error' })
    }
})

console.log('LOADED CERTIFICATE ROUTES')
app.use('/api/v1/certificates', certificateRoutes)
console.log('ROUTE MOUNTED')

const PORT = Number(process.env.PORT) || 10000

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on port ${PORT}`)
})
