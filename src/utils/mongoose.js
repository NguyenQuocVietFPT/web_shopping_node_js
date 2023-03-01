module.exports = {

    multipleMongoToObject: function(mongooses) {

        return mongooses.map(mongooses => mongooses.toObject())
    },

    singleMongoToObject: function(mongoose) {

        return mongoose ? mongoose.toObject : mongoose;
        
    }

};