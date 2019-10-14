const router = require('express').Router();

router.get('/', (req, res)=>{
  res.json([{
    name:'Huge Jackman',
    birthday:'12 October',
    country:'Australia',
  },
  {
    name:'Christian Bale',
    birthday:'30 January',
    country:'United Kingdom',
  }]);
});
module.exports= router;
