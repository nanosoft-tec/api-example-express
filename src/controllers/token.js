import jwt from 'jsonwebtoken';
import User from '../models/user';

class TokenController {
  async store(req, res) {
    const { email = '', password = '' } = req.body;

    if (!email || !password) {
      return res.status(401);
    }
    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(401);
    }

    if (!(await user.validatePassword(password))) {
      return res.status(401);
    }

    const token = jwt.sign(user, process.env.TOKEN_SECRET, {
      expiresIn: process.env.TOKEN_EXPIRATION,
    });

    return res.json({ token });
  }
}

export default new TokenController();
