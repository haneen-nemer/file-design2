const mongoose = require('mongoose');


    // Connect to mongodb
    mongoose.connect('mongodb://localhost/reactProject');
    mongoose.connection.once('open', function(){
        console.log('Connection has been made,...');
        done();
    }).on('error', function(error){
        console.log('Connection error:', error);
    });