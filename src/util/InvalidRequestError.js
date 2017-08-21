export default class InvalidRequestError extends Error {
  constructor(...args) {
    super(...args);
    Error.captureStackTrace(this, InvalidRequestError);
  }
}