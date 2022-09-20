import express from 'express';

const app = express();

app.get('/', (request, response) => {
  return response.json({
    message: 'connection is hope',
  });
});

app.listen(3076, () => console.log('Server is running 🤡'));
