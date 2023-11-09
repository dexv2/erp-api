import { Router } from 'express'

export class ErpRouter {
    static basePath = '/erp/order'
    router: Router

    constructor() {
        this.router = Router()
        this.receiveNewOrder()
    }

    private receiveNewOrder() {
        this.router.post('/create', async (req, res) => {
            console.log(`Order received from ${req.get('host')}`)
            console.log('with data:', req.body)
            res.send({ status: 'OK', message: 'Order received by ERP', orderDetails: req.body })
        })
    }
}
