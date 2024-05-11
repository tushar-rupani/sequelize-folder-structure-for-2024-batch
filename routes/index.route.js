import { Router } from 'express';
import user from './user.route.js';
const router = Router();
router.use('/users', user);
export default router;
