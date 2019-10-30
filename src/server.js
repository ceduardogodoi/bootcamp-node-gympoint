import express from 'express';

const server = express();

server.get('/', (_, res) => {
  res.json({ message: 'Hello World from express' });
});

server.listen(3000);
