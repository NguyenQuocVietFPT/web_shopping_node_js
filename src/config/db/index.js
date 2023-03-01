const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://127.0.0.1/shop_web_gundam');

        console.log('Connect successful');

    } catch(err) {
        console.error('Connection failed: ' + err.message);
    }
}

module.exports = {connect};