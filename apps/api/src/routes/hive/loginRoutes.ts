import axios from 'axios';
import express = require('express');
const loginRouter = express.Router();

loginRouter.get('/', async (req, res) => {
  const hiveUrl = 'https://beekeeper.hivehome.com/1.0/global/login';
  const payload = {
    username: 'darren.arbon@gmail.com',
    password: 'XXXX',
    devices: true,
    products: true,
    actions: true,
    homes: true,
  };
  await axios
    .post(hiveUrl, payload)
    .then((response) => {
      console.log(response);
      res.json(response);
    })
    .catch((error) => {
      console.log(error);
      res.json(error);
    });
});

export default loginRouter;
