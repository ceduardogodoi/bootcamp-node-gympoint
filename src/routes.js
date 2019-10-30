import { Router } from 'express';

const routes = new Router();

routes.get('/', (_, res) => {
  return res.json({ message: 'Hello from express router' });
});

export default routes;