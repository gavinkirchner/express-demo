/* eslint-disable no-console*/
export default function logRequestToConsole(req, res, next) {
  console.log(`Incoming Request: ${req.method} ${req.originalUrl} from ${req.ip}`.blue);
  next();
}