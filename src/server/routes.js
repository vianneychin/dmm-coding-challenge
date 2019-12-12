module.exports = (app, path) => {
  app.get('/', (_, res) => {
    const htmlPath = path.join(__dirname, '../client', 'index.html')
    res.sendFile(htmlPath)
  })
}
