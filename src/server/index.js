
require('dotenv').config();
var bodyParser = require('body-parser');
var path = require('path');
var express = require('express');
var expressSanitized = require('express-sanitize-escape');
var app = express();

var root = path.join(__dirname, '/../../');

app.use(express.static(root));
app.use(bodyParser.json());
app.use(expressSanitized.middleware());

require('./routeHandlers')(app)

app.listen(process.env.PORT, function() {
	console.log('Server running on port 5000')	
});
