import AuthorModel from '../models/author';
import NotFoundError from '../util/NotFoundError';

export default class AuthorHandler {

  static getAllAuthors(req, res, next) {
    AuthorModel.getAllAuthors()
      .then(authors => {
        res.send(authors);
      });
  }

  static getAuthor(req, res, next) {
    const id = req.params.id;

    AuthorModel.getAuthorById(req.params.id)
      .then(author => {
        if (!author) {
          next(new NotFoundError(`An author with id ${id} does not exist.`));
        } else {
          res.send(author);
        }
      })
      .catch(err => {
        next(err);
      });  
  }
}