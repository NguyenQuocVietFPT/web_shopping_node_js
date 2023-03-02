const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');

const GunDamSChema = new Schema({

    name : {type:String, required:true},
    image : {type:String},
    price : {type:String},
    size : {type:String},
    slug: {type:String, slug: 'name', unique: true},

}, {
    timestamps: true
});

//Add plugins
GunDamSChema.plugin(slug);


//Exports class
module.exports = mongoose.model('Gundam',GunDamSChema);