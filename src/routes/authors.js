import express from 'express';
import * as authorHandler from '../handlers/author';

const authorRouter = express.Router(); 

authorRouter.get('/', authorHandler.getAllAuthors);
authorRouter.get('/:id', authorHandler.getAuthor);

export default authorRouter;