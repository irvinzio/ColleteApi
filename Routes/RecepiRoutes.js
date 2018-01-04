var express= require('express');

var routes = function(Recepi){
    var recepiRouter = express.Router();

    var recepiController = require('../Controllers/RecepiController')(Recepi);

    recepiRouter.route('/')
        .post(recepiController.submit)
        .get(recepiController.getAll);
    
    recepiRouter.route('/:recepiId')
        .get(recepiController.getById(req.params.bookId))
        .put(recepiController.put)
        .patch(recepiController.patch)
        .delete(recepiController.remove);
};

module.exports = routes;