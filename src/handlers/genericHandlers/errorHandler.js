import NotFoundError from '../../util/NotFoundError';
import InvalidRequestError from '../../util/InvalidRequestError';

export default class ErrorHandler {

  static setResponseStatus(err, req, res, next) {
    if (err instanceof NotFoundError) {
      res.status(404);
    } else if (err instanceof InvalidRequestError) {
      res.status(400);
    } else {
      res.status(500);
    }

    next(err);
  }
}