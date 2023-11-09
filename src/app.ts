import express from 'express'
import { ErpRouter } from './routes'

const app = express()
app.use(express.json())

const erpRouter = new ErpRouter()
app.use(ErpRouter.basePath, erpRouter.router)

const port = 3004

app.listen(port, () => {
    console.log(`ERP API listening at http://localhost:${port}`)
})
