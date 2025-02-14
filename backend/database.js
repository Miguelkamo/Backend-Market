const mongoose = require('mongoose');

const URI = 'mongodb://localhost/market-backend';

mongoose.set('strictQuery', false);  // Agrega esta línea para suprimir la advertencia

mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('DB is connected'))
    .catch(err => console.error(err));

module.exports = mongoose;

