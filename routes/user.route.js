import { Router } from 'express';
import { retrieveUsers } from "../controllers/user.controller.js"
const user = Router();
user.get('/get-users', retrieveUsers);
export default user;
