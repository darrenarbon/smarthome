import express = require('express');
import hiveRouter from './hive/hiveRoutes';

const router = express.Router();

router.use('/hive', hiveRouter);

// health check route
router.get('/_health', (req, res) => {
  res.status(200).send('ok');
});

export default router;
