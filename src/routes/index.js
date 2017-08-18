import express from 'express';

const router = express.Router();

// register app routers
router.use('/', (req, res, next) => {
  res.send('Welcome to the API');
});

export default router;