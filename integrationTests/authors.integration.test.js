/*eslint-disable no-undef*/
import app from '../src/app';
import request from 'supertest';
import { flushPromises } from '../src/util/TestUtils';
import AuthorModel from '../src/models/author';

describe('Authors route integration tests', () => {
  it('gets all Authors', () => {
    // arrange
    const author = {
      id: 'cory-house',
      firstName: 'Cory',
      lastName: 'House'
    };

    // Act
    return request(app)
      .get('/api/authors/cory-house')
      .then((response) => {

        // Assert
        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual(author);
      });
  });

  it('gets mocked Authors', () => {
    // Arrange
    const author = {
      id: 'fake-author',
      firstName: 'Nobody',
      lastName: 'Special'
    };
    const spy = jest.spyOn(AuthorModel, 'getAuthorById')
      .mockImplementation(() => {
        return new Promise((resolve) => { resolve(author); });
      });

    // Act
    return request(app)
      .get('/api/authors/this-doesnt-matter')
      .then((response) => {

        // Assert
        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual(author);

      });
  });
});