import axios from 'axios';
import express = require('express');
import { baseUrl } from '../../consts';
const productsRouter = express.Router();

const sampleLight = (id: number, name: string, status: string) => {
  return {
    created: 101010110101,
    id,
    lastSeen: 101010111,
    parent: 'sdnfdsjfsd',
    props: {
      online: true,
      power: 'mains',
      reset: false,
      signal: 100,
      version: '1.0',
    },
    sortOrder: 1,
    state: {
      name,
      brightness: 70,
      mode: 'ON',
      status,
    },
    type: 'warmwhitelight',
  };
};

const samplePlug = (id: number, name: string, status: string) => {
  return {
    created: 101010110101,
    id,
    lastSeen: 101010111,
    parent: 'sdnfdsjfsd',
    props: {
      online: true,
      version: '1.0',
    },
    sortOrder: 1,
    state: {
      name,
      mode: 'ON',
      status,
    },
    type: 'activeplug',
  };
};

const sampleHotWater = (id: number, name: string, status: string) => {
  return {
    created: 101010110101,
    id,
    lastSeen: 101010111,
    parent: 'sdnfdsjfsd',
    props: {
      online: true,
      version: '1.0',
    },
    sortOrder: 1,
    state: {
      name,
      mode: 'ON',
      status,
    },
    type: 'hotwater',
  };
};

const sampleHeating = (id: number, name: string, status: string) => {
  return {
    created: 101010110101,
    id,
    lastSeen: 101010111,
    parent: 'sdnfdsjfsd',
    props: {
      online: true,
      version: '1.0',
      temperature: 18,
    },
    sortOrder: 1,
    state: {
      name,
      mode: 'ON',
      status,
    },
    type: 'heating',
  };
};

productsRouter.get('/', async (req, res) => {
  return res.json([
    sampleLight(1, 'Bathroom Light', 'ON'),
    sampleLight(2, 'Landing Light', 'OFF'),
    samplePlug(3, 'Christmas Lights', 'ON'),
    sampleHotWater(4, 'Hot Water', 'ON'),
    sampleHeating(5, 'Heating', 'ON'),
  ]);
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
