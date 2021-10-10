const mongoose = require('mongoose');

let uri = 'mongodb+srv://5cds:123@cluster0.5xxgd.mongodb.net/app-5cds?retryWrites=true&w=majority'

mongoose.connect(uri, { 
    useNewUrlParser: true,
    useUnifiedTopology: true,
    })
  .then((db) => console.log(`DB is connected`))
  .catch((err) => console.log(err));