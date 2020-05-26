import { Router } from 'express';
import HomeConotroller from '../controllers/home';

const router = new Router();

router.get('/', HomeConotroller.index);

export default router;
