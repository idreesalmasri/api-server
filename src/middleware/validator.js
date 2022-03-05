'use strict';

    const validator = (req, res, next) => {
        let z=req.query.name;
        if (typeof z === 'string') {
            
            // console.log(z);
            next();
        } else {
            next(`input is invalid`)
        }
    }

module.exports = validator;