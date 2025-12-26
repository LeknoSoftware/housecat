import chalk from "chalk";

import {NoFileEnteredError} from "./errors.js"

//To fetch details about file and server from the command line arguments
function getDetails(Server, args){
	if(! args[2]){
		throw new NoFileEnteredError("Cannot get the file to run.");  
	}
	else{
		Server.file = args[2];
	}		
	if(! args[3]){
		let msg = chalk.yellow("Trying to start server at port 3000....");
		console.log(msg);	
	}
	else{
		Server.PORT = args[3];
	}		
}		

export {getDetails};
