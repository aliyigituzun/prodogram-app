const User = require('../../../models/user/User');

module.exports = (req, res) => {
    
    if(!req.body.name ||!req.body.surname ||!req.body.email || !req.body.password) {
        res.write(JSON.stringify({ error: 'bad_request', success: false }));
        return res.end();
    }

    User.createUser(req.body, (err, user) => {
        if (err) {
            res.write(JSON.stringify({ error: 'database_error', success: false }));
            return res.end();
          }
        if(!user) {
            res.write(JSON.stringify({ error: 'database_error', success: false }));
            return res.end();
        }

        req.session.user = user;
        
        res.write(JSON.stringify({ success: true, user }));
        return res.end();
        });
}