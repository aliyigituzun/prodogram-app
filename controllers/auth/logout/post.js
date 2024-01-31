module.exports = (req, res) => {
    if (!req.session.user) {
        return res.redirect('/');
    }
    else {
        req.session.destroy();
        res.write(JSON.stringify({success: true}))
        res.redirect('/login');
    }
};