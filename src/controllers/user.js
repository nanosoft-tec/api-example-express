import User from '../models/user';

class UserController {
  async index(req, res) {
    try {
      const users = await User.findAll({ attributes: ['id', 'nome', 'email'] });
      return res.json(users);
    } catch (e) {
      return res.status(400).json({ errors: e.error.map((err) => err.message) });
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;
      const user = await User.findByPk(id);

      const { nome, email } = user;
      return res.json({ id, nome, email });
    } catch (e) {
      return res.status(400).json({ errors: e.error.map((err) => err.message) });
    }
  }

  async store(req, res) {
    try {
      const user = await User.create(req.body);
      const { id, nome, email } = user;
      return res.json({ id, nome, email });
    } catch (e) {
      return res.status(400).json({ errors: e.error.map((err) => err.message) });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({ errors: ['identificador não encontrado'] });
      }
      const user = await User.findByPk(id);
      if (!user) {
        return res.status(400).json({ errors: ['usuario não encontrado'] });
      }

      const userUpdated = await User.update(req.body);

      const { nome, email } = userUpdated;
      return res.json({ id, nome, email });
    } catch (e) {
      return res.status(400).json({ errors: e.error.map((err) => err.message) });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({ errors: ['identificador não encontrado'] });
      }
      const user = await User.findByPk(id);
      if (!user) {
        return res.status(400).json({ errors: ['usuario não encontrado'] });
      }

      await user.destroy();
      return res.status(200);
    } catch (e) {
      return res.status(400).json({ errors: e.error.map((err) => err.message) });
    }
  }
}

export default new UserController();
