const Course = require('../models/Course');
const {multipleMongoToObject} = require('../../utils/mongoose');

class SiteController{

    //[GET] : /
    show(req, res, next) {
        Course.find({})
                .then(courses => res.render('home', {
                    courses : multipleMongoToObject(courses)
                }))
                .catch(next);
    }

};

module.exports = new SiteController();