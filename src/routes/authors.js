import express from 'express';
import AuthorHandler from '../handlers/authorHandler';

const authorRouter = express.Router(); 

authorRouter.get('/', AuthorHandler.getAllAuthors);
authorRouter.get('/:id', AuthorHandler.getAuthor);

export default authorRouter;