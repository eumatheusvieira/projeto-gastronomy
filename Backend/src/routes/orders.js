import express from 'express'
import OrdersControllers from '../controllers/orders.js'

const ordersRouter = express.Router()

const ordersControllers = new OrdersControllers()

ordersRouter.get('/', async (req, res) => {
    const { success, statusCode, body } = await ordersControllers.getOrders()

    res.status(statusCode).send({ success, statusCode, body })
})

ordersRouter.get('/userorders/:id', async (req, res) => {
    const { success, statusCode, body } = await ordersControllers.getOrdersByUserId(req.params.id)

    res.status(statusCode).send({ success, statusCode, body })
})

ordersRouter.post('/', async (req, res) => {
    const { success, statusCode, body } = await ordersControllers.addOrder(req.body)

    res.status(statusCode).send({ success, statusCode, body })
})

ordersRouter.delete('/:id', async (req, res) => {
    const { success, statusCode, body } = await ordersControllers.deleteOrder(req.params.id)

    res.status(statusCode).send({ success, statusCode, body })
})

ordersRouter.put('/:id', async (req, res) => {
    const { success, statusCode, body } = await ordersControllers.updateOrder(req.params.id, req.body)

    res.status(statusCode).send({ success, statusCode, body })
})

export default ordersRouter