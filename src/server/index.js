
var path = require('path');
var express = require('express');
var app = express();

var root = path.join(__dirname, '/../../');

app.use(express.static(root));

app.get('*', function(res, res) {
	res.sendFile(path.join(root, 'index.html'));
});

app.listen(3000, function() {
	console.log('Server running on port 3000')	
});
