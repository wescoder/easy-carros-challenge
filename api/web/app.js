const express = require('express');
const bodyParser = require('body-parser');
const errorHandlerMiddleware = require('./middlewares/error-handler');
const authRouter = require('./routers/auth');
const vehicleRouter = require('./routers/vehicle');

const app = express();

app.use(bodyParser.json());
app.use('/auth', authRouter);
app.use('/vehicle', vehicleRouter);
app.use(errorHandlerMiddleware);

module.exports = app;
