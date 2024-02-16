const User = require('../../../../models/user/User');

module.exports = async (req, res) => {
    await User.getUser(req.params.id)
    .then(user => {
        if(!user) {
            return res.redirect('/admin/users');
        }
        else {
            res.send({
                success: true,
                user
            });
        }
    });
}