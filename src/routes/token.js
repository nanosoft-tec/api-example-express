import { Router } from 'express';
import TokenConotroller from '../controllers/token';

const router = new Router();

router.post('/', TokenConotroller.store);

export default router;
