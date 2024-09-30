import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { connectToDB } from './db.js';
import router from './route/authRoute.js'; 
import routerChurch from './route/churchRoute.js'; 
import routerUser from './route/userRoute.js'; 

const app = express();
dotenv.config();
app.use(cors());
app.use(express.json()); 
app.use('/api/auth', router); 
app.use('/api/church', routerChurch); 
app.use('/api/user', routerUser); 
const PORT = process.env.PORT || 5500;
connectToDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server started at: http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
