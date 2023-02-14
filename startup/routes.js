const express = require('express');
const error = require('../middlewares/error');
const product = require('../routes/products.router');


module.exports = function(app) {
	//app.use(helmet());
	//app.use(cors());
	app.use(express.json({ limit: '2mb' }));
	app.use(express.urlencoded({ limit: '2mb', extended: true }));
	//app.enable('trust proxy'); // only if you're behind a reverse proxy (Heroku, Bluemix, AWS if you use an ELB, custom Nginx setup, etc)


	//app.use('/uploads', express.static('uploads'));
	app.use('/products', product);
	
	app.use(error);
};