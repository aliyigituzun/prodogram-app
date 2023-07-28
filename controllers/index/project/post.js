const Project28 = require('../../../models/project28/Project28.js');
const Project28Entry = require('../../../models/project28entry/Project28Entry');

module.exports = (req, res) => { 
    Project28Entry.createEntry(req.body, (err, res) => {
        if (err || !res) {
            console.log(err);
            return res.status(500).send();
        }
    })
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