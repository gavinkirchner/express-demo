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
  }
];

export function getAllAuthors() {
  return authors;
}

export function getAuthorById(authorId) {
  const result = authors.filter(author => author.id === authorId);

  if (result.length !== 1) {
    return null;
  }

  return result[0];
}