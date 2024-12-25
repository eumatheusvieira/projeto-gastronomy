import express from 'express'
import cors from 'cors'
import { Mongo } from './database/mongo.js'
import { config } from 'dotenv'
import authRouter from './auth/auth.js'
import usersRouter from './routes/users.js'
import platesRouter from './routes/plates.js'

config()

async function main () {
    const hostname = 'localhost'
    const port = 3000

    const App = express()

    const mongoConnection = await Mongo.connect({ mongoConnectionString: process.env.MONGO_CS, mongoDbName: process.env.MONGO_DB_NAME  })
    console.log(mongoConnection)

    App.use(express.json())
    App.use(cors())

    App.get('/', (req, res) => {
        res.send({
            success: true,
            statusCode: 200,
            body: 'Welcome to MyGastronomy!'
        })
    })

    App.use('/auth', authRouter)
    App.use('/users', usersRouter)
    App.use('/plates', platesRouter)
    
    App.listen(port, () => {
        console.log(`Server running on: http://${hostname}:${port}`)
    })
}

main()