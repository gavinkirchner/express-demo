const authors = [
  {
    id: 'cory-house',
    firstName: 'Cory',
    lastName: 'House'
  },
  {
    id: 'scott-allen',
    firstName: 'Scott',
    lastName: 'Allen'
  },
  {
    id: 'dan-wahlin',
    firstName: 'Dan',
    lastName: 'Wahlin'
  },
  {
    id: '1',
    firstName: 'Cory1',
    lastName: 'House1'
  },
  {
    id: '1',
    firstName: 'Cory1',
    lastName: 'House1'
  }
];

class AuthorModel {
  // this class mocks a database call to get/set author data
  static getAllAuthors() {
    return new Promise((resolve, reject) => {
      resolve(Object.assign([], authors));
    });
  }

  static getAuthorById(id) {
    return new Promise((resolve, reject) => {
      const result = authors.filter(author => author.id === id);
      if (result.length > 1) { 
        reject(new Error(`This error represents a SQLException or something similar. There was more than one author defined for id ${id}`));
      } else if (result.length === 0) {
        resolve(null);
      } else {
        resolve(result[0]);
      }
    });
  }
}

export default AuthorModel;