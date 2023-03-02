const Gundam = require('../models/Gundam');
const {multipleMongoToObject} = require('../../utils/mongoose');

class SiteController{

    //[GET] : /
    show(req, res, next) {
        
        Gundam.find({})
        .then(gundams => {
              res.render('home', {
                gundams: multipleMongoToObject(gundams)
            });
          })
        .catch(next);
    }

};

module.exports = new SiteController();