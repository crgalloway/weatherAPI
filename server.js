const express = require('express');
const app = express();
const port = 8000;

var path = require('path')

app.use(express.static(__dirname+'/weather-app/dist'));

app.all("*", (req,res,next)=>{
	res.sendFile(path.resolve("./weather-app/dist/index.html"))
})

app.listen(port, function(){
	console.log("listening on port",port)
})