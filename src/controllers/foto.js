import multer from 'multer';
import multerConfig from '../config/multerConfig';

import Foto from '../models/foto';

const upload = multer(multerConfig).single('foto');

class FotoController {
  store(req, res) {
    return upload(req, res, async (error) => {
      if (error) {
        return res.json({ error });
      }

      const { originalName, filename } = req.file;
      const { aluno_id } = req.body;
      const foto = await Foto.create({ originalName, filename, aluno_id });
      return res.json(foto);
    });
  }
}

export default new FotoController();
