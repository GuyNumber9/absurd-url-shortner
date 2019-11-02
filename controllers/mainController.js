const dns = require('dns');

const urls = [];

exports.index_get = function get(req, res){
    res.render('../views/index');
};

exports.new_post = function post(req, res){
    let u = new URL(req.body.url);
    setImmediate(() => {
        try {
            if(req.body.url.startsWith('http')){
                dns.lookup(u.host, (err, add) => {
                    if(err){
                        res.json({
                            error: "invalid URL"
                        });
                    }
                    else {
                        res.json({
                            original_url: u.href,
                            short_url: urls.push(u.href) - 1
                        });
                    }
                });
            }
            else {
                res.json({
                    error: "invalid URL"
                }); 
            }
        }
        catch(ex){
            res.json({
                error: "invalid URL"
            });  
        }
    })
};

exports.redirect_get = function(req, res){
    setImmediate(() => {
        try {
            let num = parseInt(req.params.number);
            if(0 <= num && num < urls.length){
                res.redirect(301, urls[num]);
            }
            else {
                res.json({
                    error: "No short url found for given input"
                });
            }
        }
        catch(ex){
            res.json({
                error: "No short url found for given input"
            });
        }
    });
}