const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('PUTO EL QUE LEE')
})

app.listen(3000, function () {
  console.log('servidor arriba')
})
