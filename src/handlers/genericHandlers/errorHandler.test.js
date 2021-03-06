/*eslint-disable no-undef*/
import ErrorHandler from './errorHandler';
import NotFoundError from '../../util/NotFoundError';
import InvalidRequestError from '../../util/InvalidRequestError';

describe('errorHandler tests', () => {
  describe('setResponseStatus', () => {
    test('should set base Errors response status to 500', () => {
      // Arrange
      const mockNext = jest.fn();
      const mockStatus = jest.fn();
      const req = { };
      const res = { status: mockStatus };
      const err = new Error('This is a base error');
      
      // Act
      ErrorHandler.setResponseStatus(err, req, res, mockNext);

      // Assert
      expect(mockStatus).toHaveBeenCalledTimes(1);
      expect(mockStatus).toHaveBeenCalledWith(500);
    });

    test('should set NotFoundErrors response status to 404', () => {
      // Arrange
      const mockNext = jest.fn();
      const mockStatus = jest.fn();
      const req = { };
      const res = { status: mockStatus };
      const err = new NotFoundError('This is an error');
      
      // Act
      ErrorHandler.setResponseStatus(err, req, res, mockNext);

      // Assert
      expect(mockStatus).toHaveBeenCalledTimes(1);
      expect(mockStatus).toHaveBeenCalledWith(404);
    });

    test('should set InvalidRequestErrors response status to 400', () => {
      // Arrange
      const mockNext = jest.fn();
      const mockStatus = jest.fn();
      const req = { };
      const res = { status: mockStatus };
      const err = new InvalidRequestError('This is an error');
      
      // Act
      ErrorHandler.setResponseStatus(err, req, res, mockNext);

      // Assert
      expect(mockStatus).toHaveBeenCalledTimes(1);
      expect(mockStatus).toHaveBeenCalledWith(400);
    });

    test('should call next middleware function', () => {
      // Arrange
      const mockNext = jest.fn();
      const mockStatus = jest.fn();
      const req = { };
      const res = { status: mockStatus };
      const err = new Error('This is an error');
      
      // Act
      ErrorHandler.setResponseStatus(err, req, res, mockNext);

      // Assert
      expect(mockNext).toHaveBeenCalledTimes(1);
      expect(mockNext).toHaveBeenCalledWith(err);
    });
  });
});