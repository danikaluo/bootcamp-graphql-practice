const Author = require('../../models/Author')

const addAuthor = async (obj, { input }) => {
  try {
    const {
      firstName, lastName, age, email, numBooksPublished,
    } = input
    const author = await Author.query().insert({
      firstName,
      lastName,
      age,
      email,
      numBooksPublished,
    }).returning('*')
    return author
  } catch (err) {
    throw new Error('failed to add author')
  }
}

const resolver = {
  Mutation: {
    addAuthor,
  },
}

module.exports = resolver
