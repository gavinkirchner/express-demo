/*eslint-disable no-console*/
import express from 'express';
import colors from 'colors';
import apiRouter from './routes/api';
import indexRouter from './routes/index';
import consoleLogger from './handlers/genericHandlers/consoleLogger';

const port = 3001;
const app = express();

// register consolelogger
app.use(consoleLogger);

// register api router
app.use('/api', apiRouter);

// register the root route (this much be last)
app.use('/', indexRouter);

app.listen(port, function () {
  console.log(`Example app listening on port ${port}...`.green);
});
