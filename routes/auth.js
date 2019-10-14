const router = require('express').Router();
const User = require('../model/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const {signupValidation, loginValidation} = require('../validation');

//SignUp
router.post('/signup', async (req, res) => {
  //validation
  const {error} = signupValidation(req.body);
  if(error) return res.status(400).send(error.details[0].message);
  //checking uniqueness
  const usernameExist = await User.findOne({username: req.body.username});
  if(usernameExist) return res.status(400).send('Username already exists!');

  //hash password
  const hashPassword = await bcrypt.hash(req.body.password, 10);
  //create a new user
  const user = new  User({
    username: req.body.username,
    password: hashPassword
  });
  try {
    const savedUser = await user.save();
    res.send(savedUser);
  } catch (error) {
      res.status(400).send(error);
  }

});

//login
router.post('/login', async (req, res) =>{
  //validation
  const {error} = loginValidation(req.body);
  if(error) return res.status(400).send(error.details[0].message);
  //checking if it exists
  const user = await User.findOne({username: req.body.username});
  if(!user) return res.status(400).send('Username or Password wrong!');
  //password correct checking
  const validPass = await bcrypt.compare(req.body.password, user.password);
  if(!validPass) return res.status(400).send('Username or Password wrong!');


  //create and assign a jsonwebtoken
  const token = jwt.sign({_id:user._id}, process.env.TOKEN_SECRET);
  res.header('auth-token', token).send(token);
 })

module.exports = router;
