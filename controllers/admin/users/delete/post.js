const User = require('../../../../models/user/User');

module.exports = async (req, res) => {

    await User.deleteUser(req.body.id)
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