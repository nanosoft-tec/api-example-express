import { Router } from 'express';
import UserConotroller from '../controllers/user';
import authentication from '../middlewares/authentication';

const router = new Router();

router.get('/', authentication, UserConotroller.index);
router.get('/:id', UserConotroller.show);
router.post('/', UserConotroller.store);
router.put('/:id', UserConotroller.update);
router.delete('/:id', UserConotroller.delete);

export default router;
