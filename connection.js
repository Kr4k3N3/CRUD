const mongoose = require ('mongoose');
require('dotenv').config();
const connectionParams = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}

const uri = 'mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}cluster0.kpjcbld.mongodb.net/?retryWrites=true&w=majority'
const connection = mongoose.connect(uri, connectionParams).then(()=> console.log('connected to cloud atlas'))
.catch((err)=> console.error(err));

module.exports = connection
