const nanoid = require('nanoid')

const shortenUrl = (db, url) => {
  const shortenedUrls = db.collection('url-collection')
  return shortenedUrls.findOneAndUpdate(
    { original_url: url },
    {
      $setOnInsert: {
        original_url: url,
        short_id: nanoid(7)
      }
    },
    {
      returnOriginal: false,
      upsert: true
    }
  )
}

const checkIfShortIdExists = (db, code) => {
  return db.collection('url-collection').findOne({ short_id: code })
}

exports.shortenUrl = shortenUrl
exports.checkIfShortIdExists = checkIfShortIdExists