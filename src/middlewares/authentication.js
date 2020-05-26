import jwt from 'jsonwebtoken';
// import User from '../models/user';

export default async (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401);
  }

  const [, token] = authorization.split(' ');

  try {
    const user = jwt.verify(token, process.env.TOKEN_SECRET);

    /* const data = await User.findOne({
      where: {
        id: user.id,
        email: user.email,
      },
    });

    if (!data) {
      res.status(401);
    } */

    req.user = user;
    return next();
  } catch (e) {
    return res.status(401);
  }
};
