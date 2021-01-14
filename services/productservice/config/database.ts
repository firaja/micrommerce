var mongoose = require('mongoose');

module.exports = {

    connectToDatabase : function() {
    
        const database = process.env.DB_NAME;
        const username = process.env.DB_USERNAME;
        const password = process.env.DB_PASSWORD;
        const host = process.env.DB_HOST;

        const dbURL = `mongodb://${username}:${password}@${host}:27017/${database}`;
        console.log(`-----> ${dbURL}`);

        mongoose.connect(dbURL, {useNewUrlParser: true});
        var db = mongoose.connection;

        db.on('connecting', function() {
            console.log('connecting to MongoDB...');
          });
        
          db.on('error', function(error) {
            console.error('Error in MongoDb connection: ' + error);
            mongoose.disconnect();
          });

          db.on('connected', function() {
            console.log('MongoDB connected!');
          });

          db.once('open', function() {
            console.log('MongoDB connection opened!');
          });

          db.on('reconnected', function () {
            console.log('MongoDB reconnected!');
          });

          db.on('disconnected', function() {
            console.log('MongoDB disconnected!');
            mongoose.connect(dbURL, {server:{auto_reconnect:true}});
          });
          mongoose.connect(dbURL, {server:{auto_reconnect:true}});
    }
}