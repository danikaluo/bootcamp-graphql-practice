const Book = require('../../models/Book')
const Publisher = require('../../models/Publisher')

const allBooks = async () => {
  try {
    const books = await Book.query().where('language', 'en')
    return books
  } catch (err) {
    throw new Error('failed to get books')
  }
}

const publisher = async ({ publisherId }) => {
  const p = await Publisher.query().findOne('id', publisherId)
  return p
}

const resolver = {
  Query: {
    allBooks,
  },
  Book: {
    publisher,
  },
}

module.exports = resolver
