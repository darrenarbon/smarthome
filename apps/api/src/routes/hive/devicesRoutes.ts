import axios from 'axios';
import express = require('express');
import { baseUrl } from '../../consts';
const devicesRouter = express.Router();

devicesRouter.get('/', async (req, res) => {
  const hiveUrl = `${baseUrl}devices`;
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

export default devicesRouter;
