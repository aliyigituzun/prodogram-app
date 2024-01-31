const User = require('../../../../models/user/User');

module.exports = async (req, res) => {

    await User.updateUser(req.body.id, req.body)
    .then(() => {
        res.send({
            success: true
        });
    })
    .catch(err => {
        console.log(err)
        res.send({
            success: false,
            err
        });
    });
}