import express from "express"
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import { Book } from "./models/bookmodel.js";
import bookRoute from './routes/bookRoutes.js' 
import cors from 'cors'
const app = express();


//middleware
app.use(express.json())

app.use(cors())

app.get ('/',(req,res) => {
    console.log(req);
    return res.status(234).send('welcome book')
})

app.use('/books', bookRoute)

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log('App connected to database');
    app.listen(PORT, () => {
        console.log(`App is listening to port: ${PORT}`);
      });
  })
  .catch((error) => {
    console.log(error);
  });