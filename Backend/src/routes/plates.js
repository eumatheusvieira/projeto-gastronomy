import express from 'express'
import PlatesControllers from '../controllers/plates.js'

const platesRouter = express.Router()

const platesControllers = new PlatesControllers()

platesRouter.get('/', async (req, res) => {
    const { success, statusCode, body } = await platesControllers.getPlates()

    res.status(statusCode).send({ success, statusCode, body })
})

platesRouter.get('/availables', async (req, res) => {
    const { success, statusCode, body } = await platesControllers.getAvailablePlates()

    res.status(statusCode).send({ success, statusCode, body })
})

platesRouter.post('/', async (req, res) => {
    const { success, statusCode, body } = await platesControllers.addPlate(req.body)

    res.status(statusCode).send({ success, statusCode, body })
})

platesRouter.delete('/:id', async (req, res) => {
    const { success, statusCode, body } = await platesControllers.deletePlate(req.params.id)

    res.status(statusCode).send({ success, statusCode, body })
})

platesRouter.put('/:id', async (req, res) => {
    const { success, statusCode, body } = await platesControllers.updatePlate(req.params.id, req.body)

    res.status(statusCode).send({ success, statusCode, body })
})

export default platesRouter