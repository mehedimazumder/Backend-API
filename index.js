const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
//import routes
const authRoute = require('./routes/auth');
const actorsRoute = require('./routes/actors');
const moviesRoute = require('./routes/movies');


dotenv.config();

//connect to  DB
mongoose.connect(
  process.env.DB_CONNECT,
   { useNewUrlParser: true,
   useCreateIndex: true,
   useUnifiedTopology: true },
   () => console.log('Connected to DB')
);

//Middleware
app.use(express.json());
//routes middleware
app.use('/api/user', authRoute);
app.use('/api/actors', actorsRoute);
app.use('/api/movies', moviesRoute);


app.listen(3000, () => console.log('Server Up & Running'));
