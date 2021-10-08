const express = require('express')
const user_router = require('./routes/user.router')
const app = express()

const port = process.env.PORT || 3000
app.set('port', port)

app.use('/user', user_router)
 
app.listen(app.get('port'), ()=> {
    console.log('Server running on port 3000');
})