/*eslint-disable no-undef*/
import AuthorHandler from './authorHandler';
jest.mock('../models/author');
import AuthorModel from '../models/author';

const flushPromises = () => new Promise(resolve => setImmediate(resolve));

describe('authorHandler Tests', () => {
  describe('getAllAuthors()', () => {
    
    it('should return authors array to response', () => {
      // Arrange
      const mockSend = jest.fn();
      const req = { };
      const res = { send: mockSend };
      const authors = [{author: 1}, {author: 2}];
      AuthorModel.getAllAuthors = jest.fn();
      
      AuthorModel.getAllAuthors.mockImplementation(() => {
          return new Promise((resolve, reject) => {
            resolve(authors);
          });
        });
      
      // Act
      AuthorHandler.getAllAuthors(req, res, null);
      
      // Assert
      return flushPromises().then(() => {
        expect(mockSend).toHaveBeenCalledWith(authors);
      });
    });

    it('should end response and not call next', () => {

    });
  });
});