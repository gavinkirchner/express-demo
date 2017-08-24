/*eslint-disable no-console*/
import express from 'express';
import colors from 'colors';
import apiRouter from './routes/api';
import indexRouter from './routes/index';
import ConsoleLogger from './handlers/genericHandlers/consoleLogger';
import ErrorHandler from './handlers/genericHandlers/errorHandler';

const app = express();

// register consolelogger
app.use(ConsoleLogger.logRequestToConsole);

// register api router
app.use('/api', apiRouter);

// register the root route (this much be last)
app.use('/', indexRouter);

// register the error handler
app.use(ErrorHandler.setResponseStatus);

export default app;

