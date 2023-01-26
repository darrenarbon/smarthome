import axios from 'axios';
import express = require('express');
import { baseUrl } from '../../consts';
import { products } from './testData/products';
const productsRouter = express.Router();

productsRouter.get('/', async (req, res) => {
  // return res.json(products);
  const hiveUrl = `${baseUrl}products`;
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

export default productsRouter;
