const Project28 = require('../../../models/project28/Project28.js');

module.exports = (req, res) => { 
    console.log(req.body);
    Project28.createProject28(req.body, (response) => {
        if (response.err || !response.success) {
            console.log(err);
            return res.status(500).send({err: true});
        }
        if (response.success || response.id) {
            return res.json({ err: false, id: response.id });
        }
    })
}