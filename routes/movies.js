const router = require('express').Router();
const verify = require('./verifyToken');
const jwt = require('jsonwebtoken');

router.get('/',verify,  (req, res)=>{
  jwt.verify(req.token, process.env.TOKEN_SECRET, (err) => {
            if(err){
                res.status(403).send('Authentication Failed! You cannot get the movie details!');
            } else {
                res.json({
                  title: 'Prestige',
                  year:'2006',
                  rating:'8.5',
                  actors: [{
                    name:'Huge Jackman',
                    birthday:'12 October',
                    country:'Australia',
                  },
                  {
                    name:'Christian Bale',
                    birthday:'30 January',
                    country:'United Kingdom',
                  }]
                });
            }
        })
});

module.exports = router;
