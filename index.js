
//include express
const express = require('express');

// static file server
const serveStatic = require('serve-static');

// api routes
const blogApi = require('./apiRoutes');

//create an express application
const app = express();


app.use('/', serveStatic( 'public', {
	'index': [ 'index.html' ]
}));


app.use('/api',  blogApi);

//have the application listen on a specific port
app.listen(2000, () => {
    console.log('Example app listening on port 2000!');
});


