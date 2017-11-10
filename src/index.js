/* eslint-disable no-console */
import express from 'express';

import constants from './config/constants';
import './config/database';
import middlewaresConfig from './config/middlewares';

const app = express();

middlewaresConfig(app);

app.get('/', (req, res) => {
  res.send('Medium');
});

const PORT = process.env.PORT || 3000;

app.listen(constants.PORT, err => {
  if (err) {
    throw err;
  } else {
    console.log(`
            Server is running on port: ${PORT}
            ----
            Running on ${process.env.NODE_ENV}
        `);
  }
});
