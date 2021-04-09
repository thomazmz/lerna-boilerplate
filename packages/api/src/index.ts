import express from 'express';

const port = 3000;
const app = express();

app.get('/', (req, res) => {
  res.send('Hello Lerna!');
});

app.listen(port, () => {
  console.log(`Application is running on port ${port}`);
});