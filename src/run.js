import {Server, runServer, getDetails} from "./index.js";

function run(args){
	const server = new Server();	
	getDetails(server, args);
	runServer(server.file, server.PORT);
}	

export default run;
