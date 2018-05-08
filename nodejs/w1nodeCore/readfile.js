const fs = require('fs');
const path = require('path');

//readfile
fs.readFile(path.join(__dirname,'/data/data.html'),{encoding:'utf-8'},function(error,data){
	if(error) return console.error(error);
	console.log(data);
})

//writefile