const express = require('express');

const router = express.Router();

const postList = require('./postList')


// body parser middleware
const parser = require('body-parser');

//parses requests with the content type of `application/json`
router.use(parser.json());

//define a route on `/hello/world`
router.get('/blog',(request, response, next) => {
	next();
});



// post blog
router.post('/blog', (request, response, next) => {
	const requestBody = request.body;

	// Add a post
	postList.createItem(requestBody);

	next();

});



// put blog
router.put('/blog/:id', (request, response, next) => {
	console.log('HERE')
	const id = parseInt(request.params.id, 10);
	const dataPayload = request.body;

	postList.updateItem(id, 'data.blog', dataPayload.blog);
	postList.updateItem(id, 'data.blogText', dataPayload.blogText);

	next();
}); // blog
 

// delete blog
router.delete('/blog/:id', (request, response, next) => {
	const id = parseInt(request.params.id, 10);

	postList.deleteItem(id);

	next();
}); 

// delete

router.use((request, response) => {
	response.header('Content-Type', 'application/json');
	response.send(postList.getItems());	
});




module.exports = router;





