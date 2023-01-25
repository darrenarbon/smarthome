import axios from 'axios';
import express = require('express');
import { baseUrl } from '../../consts';
const nodesRouter = express.Router();

nodesRouter.post('/:deviceType/:deviceId', async (req, res) => {
  const { deviceType, deviceId } = req.params;
  const hiveUrl = `${baseUrl}nodes/${deviceType}/${deviceId}`;
  const payload = req.body;
  await axios
    .post(hiveUrl, payload)
    .then((response) => {
      res.json(response.data);
    })
    .catch((error) => {
      console.log(error);
      res.json(error);
    });
});

export default nodesRouter;
