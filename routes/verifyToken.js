module.exports = function (req, res, next){
    const header = req.headers['authorization'];

    if(typeof header !== 'undefined') {
        const bearer = header.split(' ');
        const token = bearer[1];

        req.token = token;
        next();
    } else {
        res.sendStatus(403)
    }
}










// function(req, res, next){
//   const token = req.header('auth-token');
//   if(!token) return res.status(401).send('Access denied');
//
//   try {
//     const verified = jwt.verify(token, process.env.TOKEN_SECRET);
//     req.user = varified;
//     next();
//   } catch (err) {
//     res.status(400).send('Invalid token');
//   }
// };
