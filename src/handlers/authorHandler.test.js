/*eslint-disable no-undef*/
import AuthorHandler from './authorHandler';
import NotFoundError from '../util/NotFoundError';
import { flushPromises } from '../util/TestUtils';
import AuthorModel from '../models/author';


describe('authorHandler Tests', () => {
  describe('getAllAuthors()', () => {
    const authors = [{id: 1}, {id: 2}];

    let getAllAuthorsSpy;
    beforeAll(() => {
      // By using the spy on the specific functions we want to mock,
      // we get much more control over when we want to substitute
      // implementations and subsequently clear them
      getAllAuthorsSpy = jest.spyOn(AuthorModel, 'getAllAuthors')
        .mockImplementation(() => {
          return new Promise((resolve, reject) => {
            resolve(authors);
          });
        });
    });

    afterAll(() => {
      // remove the mocked implementation of the mocked function
      getAllAuthorsSpy.mockReset();
      getAllAuthorsSpy.mockRestore();
    });

    it('should return authors array to response', () => {
      // Arrange
      const mockSend = jest.fn();
      const req = { };
      const res = { send: mockSend };

      // Act
      AuthorHandler.getAllAuthors(req, res, null);
      
      // Assert
      // Here we have to wrap the call with a promise and return it to 
      // get Jest to wait for all the promises to resolve before calling 
      // expect, even though the called method doesn't return a promise
      return flushPromises().then(() => {
        expect(mockSend).toHaveBeenCalledWith(authors);
      });
    });

    it('should end response and not call next', () => {
      // Arrange
      const mockSend = jest.fn();
      const mockNext = jest.fn();
      const req = { };
      const res = { send: mockSend };
      
      // Act
      AuthorHandler.getAllAuthors(req, res, mockNext);
      
      // Assert
      return flushPromises().then(() => {
        expect(mockNext).not.toHaveBeenCalled();
      });
    });
  });

  describe('getAuthor()', () => {
    
    it('returns a single author to the response given a valid id', () => {
      // Arrange
      const mockSend = jest.fn();
      const req = { params: { id: 'id'} };
      const res = { send: mockSend };
      const author = { id: 'id', firstName: 'firstName' };
      const spy = jest.spyOn(AuthorModel, 'getAuthorById')
        .mockImplementation(() => {
          return new Promise((resolve) => { resolve(author); });
        });

      // Act
      AuthorHandler.getAuthor(req, res, null);
      
      // Assert
      return flushPromises().then(() => {
        expect(mockSend).toHaveBeenCalledWith(author);
      });
    });

    it('calls next with NotFoundError if no matching author', () => {
      // Arrange
      const mockNext = jest.fn();
      const req = { params: { id: 'id'} };
      const spy = jest.spyOn(AuthorModel, 'getAuthorById')
        .mockImplementation(() => {
          return new Promise((resolve) => { resolve(null); });
        });

      // Act
      AuthorHandler.getAuthor(req, null, mockNext);
      
      // Assert
      return flushPromises().then(() => {
        expect(mockNext).toHaveBeenCalledTimes(1);
        expect(mockNext.mock.calls[0][0] instanceof NotFoundError).toBe(true);
      });
    });

    it('forwards errors to next', () => {
      // Arrange
      const mockNext = jest.fn();
      const req = { params: { id: 'id'} };
      const error = new Error('This is an error');
      const spy = jest.spyOn(AuthorModel, 'getAuthorById')
        .mockImplementation(() => {
          return new Promise((resolve, reject) => { reject(error); });
        });

      // Act
      AuthorHandler.getAuthor(req, null, mockNext);
      
      // Assert
      return flushPromises().then(() => {
        expect(mockNext).toHaveBeenCalledWith(error);
      });
    });
  });
});