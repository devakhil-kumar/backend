import express from 'express';

import { addUser, fetchAllUser, detailUser, editUser, deleteUser} from '../controller/userController.js';

const routerUser = express.Router();

// Authentication Routes
routerUser.post('/add', addUser);

// User Routes
routerUser.get('/fetchAll', fetchAllUser);          
routerUser.get('/detail/:id', detailUser);    
routerUser.delete('/delete/:id', deleteUser);    
routerUser.patch('/edit/:id', editUser);       


export default routerUser;
