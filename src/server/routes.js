const dns = require('dns')
const checkIfShortIdExists = require('./util')
const shortenUrl = require('./util')

module.exports = (app, path) => {
  app.get('/', (_, res) => {
    const htmlPath = path.join(__dirname, '../client', 'index.html')
    res.sendFile(htmlPath)
  })

  app.post('/new', (req, res) => {
    let originalUrl
    try {
      originalUrl = new URL(req.body.url)
    } catch (error) {
      res.status(404).send({ error: 'URL is invalid.' })
    }
    dns.lookup(originalUrl.hostname, err => {
      if (err) {
        return res.status(404).send({ error: 'URL is unavailable.' })
      }
    })
    shortenUrl(req.app.locals.db, originalUrl.href)
      .then(result => {
        const doc = result.value
        res.json({
          original_url: doc.original_url,
          short_id: doc.short_id
        })
      })
      .catch(console.error)
  })

  app.get('/:short_id', async (req, res) => {
    try {
      const faviconIco = req.params.short_id

      const doc = await checkIfShortIdExists(req.app.locals.db, faviconIco)

      if (doc === null) return res.send('That URL is invalid.')
      res.redirect(doc.original_url)
    } catch (error) {
      console.error(error)
    }
  })
}
