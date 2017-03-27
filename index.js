// Require express
const express = require('express');

// Static file server
// Make sure static-server is installed in blogSite
const serveStatic = require('serve-static');

// post routes
const postAPI = require('./apiRoutes');

// create express application
const app = express();

app.use('/', serveStatic( 'public', {
	'index': [ 'index.html' ]
}));																																										

app.use('/admin', serveStatic( 'public', {
	'index': [ 'admin.html' ]
}));			

// create server, listen on a specific port
app.listen(3001, () => {
	console.log('Listening on 3001');
});