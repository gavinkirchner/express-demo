import express from 'express';
import authorRouter from './authors';
import indexRouter from './index';

const router = express.Router();

// register app routers
router.use('/authors', authorRouter);

// register the root route (this much be last)
router.use('/', indexRouter);

export default router;