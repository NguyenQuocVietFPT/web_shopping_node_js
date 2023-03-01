const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');

const CourseSchema = new Schema({

    name : {type:String, required:true},
    description : {type:String},
    image : {type:String},
    videoId : {type:String},
    level : {type:String},
    slug: {type:String, slug: 'name', unique: true},

}, {
    timestamps: true
});

//Add plugins
CourseSchema.plugin(slug);


//Exports class
module.exports = mongoose.model('Course',CourseSchema);