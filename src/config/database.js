/* eslint-disable no-console */
import mongoose from 'mongoose';

import constants from './constants';

mongoose.Promise = global.Promise;

try {
  mongoose.connect(constants.MONGO_URI);
} catch (error) {
  mongoose.createConnection(constants.MONGO_URI);
}

mongoose.connection
  .once('open', () => console.log('MonogDB Running'))
  .on('error', e => {
    throw e;
  });
