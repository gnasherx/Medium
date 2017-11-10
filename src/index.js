/* eslint-disable no-console */
import express from 'express';

import constants from './config/constants';

const app = express();

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
