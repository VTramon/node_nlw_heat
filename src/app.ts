import 'dotenv/config';
import express from 'express';
import http from 'http';
import cors from 'cors';

import { Server } from 'socket.io';

import { router } from './routes';

const web = express();
const mobile = express();

web.use(cors());
mobile.use(cors());

web.use(express.json());
mobile.use(express.json());

web.use(router);
mobile.use(router);

const webServerHttp = http.createServer(web);
const mobileServerHttp = http.createServer(mobile);

const webIo = new Server(webServerHttp, {
  cors: {
    origin: '*',
  },
});
const mobileIo = new Server(webServerHttp, {
  cors: {
    origin: '*',
  },
});

webIo.on('connection', (Socket) => {
  console.log(`Usuário conectado no socket ${Socket.id}`);
});
mobileIo.on('connection', (Socket) => {
  console.log(`Usuário conectado no socket ${Socket.id}`);
});

web.get('/github', (req, res) => {
  res.redirect(
    `https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID_WEB}`
  );
});
mobile.get('/github', (req, res) => {
  res.redirect(
    `https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID_MOBILE}`
  );
});

web.get('/signin/callback', (req, res) => {
  const { code } = req.query;

  console.log(code);

  return res.json(code);
});
mobile.get('/signin/callback', (req, res) => {
  const { code } = req.query;

  return res.json(code);
});

export { webServerHttp, mobileServerHttp, webIo, mobileIo };
