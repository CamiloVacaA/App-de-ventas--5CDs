const express = require('express')
const user_router = require('./routes/user.router')
const product_router = require('./routes/product.router')
const app = express()
const db = require('./db/connect')

const port = process.env.PORT || 3000
app.set('port', port)

app.use(express.json())

app.use('/user', user_router)
app.use('/product', product_router)
 
app.listen(app.get('port'), ()=> {
    console.log('Server running on port 3000');
})