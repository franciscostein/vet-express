const express = require('express');
require('./utils/db/mongoose');
const userRouter = require('./controllers/routers/user');

const app = express();

app.use(express.json());    // accepts and convert json to object
app.use(userRouter);

module.exports = app;