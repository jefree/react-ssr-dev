import {renderToString} from 'react-dom/server'
import React from 'react'
import App from './components/App'
import Html from './html'
import express from 'express'

const port = 3000

const server = express()
server.use('/dist', express.static(__dirname))
server.get("/", (req, res) => {
  let body = renderToString(<App/>)
  let htmlRaw = Html(body)
  
  res.send(htmlRaw)
})

var livereload = require('livereload');
var lrserver = livereload.createServer();
lrserver.watch(__dirname);

server.listen(port)
console.log(`Serving at http://localhost:${port}`)