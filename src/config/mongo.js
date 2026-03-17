const mongoose = require('mongoose');

async function connectionMongoDB() {
    try {
        await mongoose.connect('mongodb://localhost:27017/meuBanco')
        console.log('MongoDB conectado com sucesso!');
        console.log(mongoose.connection.client.s.url);
    } catch (error) {
        console.error(error);
    }
}

module.exports = connectionMongoDB;