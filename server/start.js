const express = require('express')
const bodyParser = require('body-parser')
const { resolve } = require('path')
const app = express()

module.exports = app
  .use(bodyParser.urlencoded({ extended: true }))
  .use(bodyParser.json())
  .use(express.static(resolve(__dirname, '..', 'public'))) //serve static files from ../public
  .get('/*', (_, res) => res.sendFile(resolve(__dirname, '..', 'public', 'index.html'))) //send index.html for any request

if (module === require.main) {
  //start listening only if we're the main module.
  //when a file is run directly from node.js, module === require.main
  app.listen(process.env.PORT || 9001, () => console.log(`server listening on port ${process.env.PORT || 9001}`))
}
