import { Router } from 'express';
import AlunoConotroller from '../controllers/aluno';

const router = new Router();

router.get('/', AlunoConotroller.index);
router.get('/:id', AlunoConotroller.show);
router.post('/', AlunoConotroller.store);
router.put('/:id', AlunoConotroller.update);
router.delete('/:id', AlunoConotroller.delete);

export default router;
