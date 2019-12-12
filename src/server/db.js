const { MongoClient } = require('mongodb')
const databaseUrl = process.env.DATABASE

module.exports = app => {
  try {
    MongoClient.connect(databaseUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }).then(client => {
      app.locals.db = client.db('shortened-links-db')
    })
  } catch (error) {
    console.error('Failed to connect to database')
  }
}
