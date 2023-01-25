import router from './routes/routes';
import morganMiddleware from './logging/morgan';
import Logger from './logging/winston';
import { terminate } from './terminate';
import { addAccessToken } from './axios';
import express = require('express');

const app: express.Application = express();
const port = 3333;

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());
app.use(morganMiddleware);
app.use('/api', router);

// Add a request interceptor
addAccessToken();

const server = app.listen(port, () => {
  return Logger.info(`Server is up and running on port ${port}`);
});

server.on('error', console.error);

const exitHandler = terminate({
  coredump: false,
  timeout: 500,
});

process.on('uncaughtException', exitHandler(1, 'Unexpected Error'));
process.on('unhandledRejection', exitHandler(1, 'Unhandled Promise'));
process.on('SIGTERM', exitHandler(0, 'SIGTERM'));
process.on('SIGINT', exitHandler(0, 'SIGINT'));
