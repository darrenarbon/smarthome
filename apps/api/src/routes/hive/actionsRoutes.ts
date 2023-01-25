import axios from 'axios';
import express = require('express');
import { baseUrl } from '../../consts';
const actionsRouter = express.Router();

actionsRouter.get('/', async (req, res) => {
  const hiveUrl = `${baseUrl}actions`;
  await axios
    .get(hiveUrl)
    .then((response) => {
      res.json(response.data);
    })
    .catch((error) => {
      console.log(error);
      res.json(error);
    });
});

export default actionsRouter;
