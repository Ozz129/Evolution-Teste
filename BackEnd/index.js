var express = require('express');
var bodyParser = require('body-parser');
const cors = require('cors');
var app = express();
var port = process.env.PORT || 8080;

const corsOption = {
    origin: '*'
}
app.use(cors(corsOption))
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


//rutas
let users = require('./routes/user')
let tasks = require('./routes/task');

users(app, '/api/user')
tasks(app, '/api/task')

app.use(users)
app.use(tasks)


app.get('/', function(req, res){
	res.status(200).send({
		message: 'GET Home route working fine!'
	});
});

app.listen(port, function(){
	console.log(`Server running in http://localhost:${port}`);
	console.log('Defined routes:');
	console.log('	[GET] http://localhost:8080/');
});