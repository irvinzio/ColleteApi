var recepiController = function(Recepi){
    var post = function(req,res){
        var recepi = new Recepi(req.body);
        recepi.save(function(err) {
            if(err) {
                console.log(err);
                res.status(400);
                res.send(err);
            }
            else {
                res.status(200);
                res.json({
                    message: JSON.stringify(req.body) + ' successfully registered!'
                });
            }
        });
    };
    var get = function(req,res){
        Recepi.find(function(err,recipes){
            if(err)
                rest.status(500).send(err);
            else 
                res.json(recipes);
        });
    };
    var put = function(req,res){
        Recepi.findById(req.params.recipeId,function(err,recepi){
            var properties = [];
            for(var key in req.body) {
                if(obj.hasOwnProperty(key) && typeof obj[key] !== 'function') {
                    properties[key] = req.body[key];
                }
            }
            req.recepi = properties;
            req.recepi.save(function(err){
                if(err)
                    rest.status(500).send(err);
                else 
                    res.json(req.recepi);
           });
        });
    };
    var patch = function(req,res){
        for(var p in req.body){
            req.recepi[p] = req.body[p];
        }
        req.recepi.save(function(err){
             if(err)
                 rest.status(500).send(err);
             else 
                 res.json(req.recepi);
        });
    };
    var remove = function(req,res){
        req.recepi.remove(function(err){
            if(err) res.status(500).send(err);
            else res.status(204).send(err);
        });
    };

    return {
        submit : post,
        getAll : get,
        put : put,
        patch : patch,
        remove : remove
    };
};

module.exports = recepiController;