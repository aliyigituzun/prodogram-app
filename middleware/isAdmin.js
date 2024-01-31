module.exports = (req, res, next) => {
  console.log("--------");
  console.log(req.session);
  if (req.session.ADMIN_PASSWORD && req.session.ADMIN_PASSWORD == process.env.ADMIN_PASSWORD) {
    req.session.ADMIN_PASSWORD = req.session.ADMIN_PASSWORD;
    return next();
  }
  else {
    return res.status(401).redirect('/admin/auth');
  }
}