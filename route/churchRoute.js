import express from 'express';
import { addChurch, fetchAllChurch,  detailChurch, updateChurch, deleteChurch } from '../controller/churchController.js';

const routerChurch = express.Router();

// Church Routes
routerChurch.post('/add', addChurch);         
routerChurch.get('/fetchAll', fetchAllChurch);             
routerChurch.get('/detail/:id', detailChurch);             
routerChurch.patch('/edit/:id', updateChurch);   
routerChurch.delete('/delete/:id', deleteChurch);  

export default routerChurch;
