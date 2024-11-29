import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import { connectToDB } from './db/index.js';
const app = express();
const port = process.env.PORT || 3333;

app.use(
  cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT'],
  })
);

app.use(express.json())

app.get('/', (req,res)=> {
  res.send('Hello nodejs')
})




connectToDB().then(
  () => {
   

    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  },
  (error) => {
    // onrejected
    console.log(
      'Failed to strart the server due to MongoDB connection issue',
      error
    );
  }
);


// app.listen(port, () => {
//    console.log(`Server is running on http://localhost:${port}`);
// })