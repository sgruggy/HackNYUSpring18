import express from 'express';
import path from 'path';

import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../webpack.config.dev';
const mongoose = require('mongoose');
require('./db');
const Post = mongoose.model('Post');
let app = express();
const compiler = webpack(webpackConfig)

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, "views"));

app.use(webpackMiddleware(compiler, {
	hot:true,
	publicPath: webpackConfig.output.publicPath,
	noInfo: true 
}));
app.use(webpackHotMiddleware(compiler));

app.get('/', (req,res) => {
	res.sendFile(path.join(__dirname,'./index.html'));	
});

app.get('/rooms', (req, res) =>{
	Post.find({}, (err, result)=>{
		res.render('rooms', {data: result});
	});
})

app.listen(3000, () => console.log('running on localhost:3000'));