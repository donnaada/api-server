'use strict';

require('dotenv').config();
const { sequelizeDatabase } = require('./src/models');
const { start } = require('./src/server');

const PORT = process.env.PORT || process.env.PORT2;


sequelizeDatabase.sync()
  .then(() => {
    console.log('Database synced successfully');
    start(PORT);
  })
  .catch((err) => console.error(err));
