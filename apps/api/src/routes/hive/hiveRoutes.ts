import express = require('express');
import actionsRouter from './actionsRoutes';
import devicesRouter from './devicesRoutes';
import loginRouter from './loginRoutes';
import nodesRouter from './nodesRoutes';
import productsRouter from './productsRoutes';

const hiveRouter = express.Router();

hiveRouter.use('/login', loginRouter);
hiveRouter.use('/devices', devicesRouter);
hiveRouter.use('/products', productsRouter);
hiveRouter.use('/actions', actionsRouter);
hiveRouter.use('/nodes', nodesRouter);

export default hiveRouter;
