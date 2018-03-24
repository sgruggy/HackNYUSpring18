const express = require('express');
const path = require('path');
const mongoose = require('mongoose')
require('./db')

const PORT = process.env.PORT || 5000;

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'hbs')

  .get('/', (req, res) => res.render('index'))



  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
