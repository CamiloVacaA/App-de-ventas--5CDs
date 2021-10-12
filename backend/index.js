const express = require('express')
const user_router = require('./routes/usuario.router')
const venta_router = require('./routes/venta.router')
const detalleventa_router = require('./routes/detalle_venta.router')
const product_router = require('./routes/product.router')

const app = express()
const db = require('./db/connect')

const port = process.env.PORT || 3000
app.set('port', port)

app.use(express.json())

app.use('/usuario', user_router)     
app.use('/product', product_router)
app.use('/venta', venta_router)
app.use('/detalleventa', detalleventa_router)
 
app.listen(app.get('port'), ()=> {
    console.log('Server running on port 3000');
})