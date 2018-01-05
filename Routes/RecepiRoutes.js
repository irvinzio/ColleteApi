var express= require('express');

var routes = function(Recepi){
    var recepiRouter = express.Router();

    var recepiController = require('../Controllers/RecepiController')(Recepi);

    recepiRouter.route('/')
        .post(recepiController.submit)
        .get(recepiController.getAll);

    recepiRouter.use('/:recepiId',function(req,res,next){
        Recepi.findById(req.params.recepiId,function(err,recepi){
            if(err){
                res.status(500).send(err);
            }
            else if(recepi)
            {
                req.recepi = recepi;
                next()
            }
            else
                res.status(404).send('recipe not found');
        });
    })
    recepiRouter.route('/:recepiId')
        .get(function(req,res){
            console.log("return recepi" + req.params.recepiId);
            res.json(req.recepi);            
        })
        .put(recepiController.put)
        .patch(recepiController.patch)
        .delete(recepiController.remove);

    return recepiRouter;
};

module.exports = routes;