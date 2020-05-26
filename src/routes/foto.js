import { Router } from 'express';

import FotoConotroller from '../controllers/foto';

const router = new Router();

router.post('/', FotoConotroller.store);

export default router;
