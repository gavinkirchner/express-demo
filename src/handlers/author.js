import * as authorModel from '../models/author';

export function getAllAuthors(req, res, next) {
  res.send(authorModel.getAllAuthors());
}

export function getAuthor(req, res, next) {

  const author = authorModel.getAuthorById(req.params.id);

  if (!author) {
    const err = new Error('Not Found');
    next(err);
  }

  res.send(author);
}