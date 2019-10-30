import express from 'express';

const routes = express.Router();

routes.get('/', (_, res) => {
  return res.json({ message: 'Hello from express router' });
});

export default routes;
