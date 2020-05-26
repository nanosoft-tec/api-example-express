import Aluno from '../models/aluno';
import Foto from '../models/foto';

class AlunoController {
  async index(req, res) {
    const alunos = await Aluno.findAll({
      attributes: ['id', 'nome', 'sobrenome', 'email', 'idade', 'peso', 'altura'],
      order: [['id', 'DESC'], [Foto, 'id', 'DESC']],
      include: {
        model: Foto,
        attributes: ['filename', 'url'],
      },
    });
    return res.json(alunos);
  }

  async show(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400);
      }

      const aluno = await Aluno.findByPk(id, {
        attributes: ['id', 'nome', 'sobrenome', 'email', 'idade', 'peso', 'altura'],
        order: [['id', 'DESC'], [Foto, 'id', 'DESC']],
        include: {
          model: Foto,
          attributes: ['filename', 'url'],
        },
      });

      if (!aluno) {
        return res.status(400);
      }

      return res.json(aluno);
    } catch (e) {
      return res.status(400).json({ errors: e.error.map((err) => err.message) });
    }
  }

  async store(req, res) {
    try {
      const aluno = Aluno.create(req.body);
      return res.json(aluno);
    } catch (e) {
      return res.status(400).json({ errors: e.error.map((err) => err.message) });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400);
      }

      const aluno = await Aluno.findByPk(id);

      if (!aluno) {
        return res.status(400);
      }

      const alunoAtualizado = await Aluno.update(req.body);
      return res.json(alunoAtualizado);
    } catch (e) {
      return res.status(400).json({ errors: e.error.map((err) => err.message) });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400);
      }

      const aluno = await Aluno.findByPk(id);

      if (!aluno) {
        return res.status(400);
      }

      aluno.destroy();
      return res.status(200);
    } catch (e) {
      return res.status(400).json({ errors: e.error.map((err) => err.message) });
    }
  }
}

export default new AlunoController();
