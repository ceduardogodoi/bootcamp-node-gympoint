import Router from 'express';

const routes = Router();

routes.post('/sessions', (req, res) => {
  const { email, password } = req.body;

  return res.json({
    message: "We've received your data:",
    email,
    password
  });
});

export default routes;
