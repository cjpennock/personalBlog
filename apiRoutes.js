// Pull in express
const express = require('express');

const router = express.Router();

// Require postList file
const postList = require('./postList');

// Middleware - body parser
const parser = require('body-parser');

// Parse requests with content type: application/json
router.use(parser.json());

// Define a route: /blog
router.get('/blog', (request, response, next) => {
	next();
});

// Post: blog
router.post('./blog', (request, response, next) => {
	const requestBody = request.body;

	// Add post
	postList.createItem(requestBody);

	next();
});

// Put: blog. Include :id in route
router.put('/blog/:id', (request, response, next) => {
	console.log('Here')
	const id = parseInt(request.params.id, 10);
	const dataPayload = request.body;

	// Updates: blog
	postList.updateItem(id, 'data.blog', dataPayload.blog);
	postList.updateItem(id, 'data.blogText', dataPayload.blogText);

	next();

});

// Delete
router.delete('/blog/:id', (request, response, next) => {
	const id = parseInt(request.params.id, 10);

	postList.deleteItem(id);

	next();
})

router.use((request, response) => {
	response.header('Content-type', 'application/json');
	response.send(postList.getItems());
});

// Export
module.exports = router;




