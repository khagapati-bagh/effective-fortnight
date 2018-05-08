const fs = require('fs');
fs.writeFile('data/message.txt',"I'm bit slow with things but I'll complete It!",function(error){
	if(error) 
		return console.error(error);
	console.log("Writing Is Done!");
})