import dotenv from 'dotenv';

dotenv.config();

import './database';
import express from 'express';
import { resolve } from 'path';

import homeRouter from './routes/home';
import userRouter from './routes/user';
import tokenRouter from './routes/token';
import alunoRouter from './routes/aluno';
import fotoRouter from './routes/foto';


class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use(express.static(resolve(__dirname, '..', 'upload')));
  }

  routes() {
    this.app.use('/', homeRouter);
    this.app.use('/user', userRouter);
    this.app.use('/token', tokenRouter);
    this.app.use('/aluno', alunoRouter);
    this.app.use('/foto', fotoRouter);
  }
}

export default new App().app;
