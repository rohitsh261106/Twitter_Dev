import express from 'express';
import passport from 'passport';
import {connect} from './config/database.js';
import { passportAuth } from './config/jwt-middleware.js';

import apiRoutes from './routes/index.js';


const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(passport.initialize());
passportAuth(passport);

app.use('/api',apiRoutes)

app.listen(3000,async()=>{
  console.log("Server Started on Port");
  await connect();
  console.log("mongodb connected")
  
  
})