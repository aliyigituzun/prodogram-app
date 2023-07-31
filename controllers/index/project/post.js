const Project28 = require('../../../models/project28/Project28.js');
const Project28Entry = require('../../../models/project28entry/Project28Entry');

module.exports = (req, res) => { 
    Project28Entry.createEntry(req.body, (response) => {
        if (response.error || !response) {
            return res.send({error: true, errorMessage: response.errorMessage});
        }
        Project28.createProject28(req.body, (response) => {
            if (response.error || !response) {
                return res.send({error: true});
            }
            if (response.success || response.id) {
                return res.send({ error: false, id: response.id });
            }
        })
    })
}