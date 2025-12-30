import process from "process";
import express from "express";
import chalk from "chalk";

import {CannotRunServerError} from "./errors.js"

class Server{
    static app = express();
    static listener;

    constructor(){
        this.PORT = 3000;
        this.fileName = undefined;	
    }
    // Method to run the server
    run(){
        const __dirname = process.cwd();
        Server.app.get('/', (req, res) => {
            res.sendFile(__dirname + `/${this.fileName}`);
        });

        Server.listener = Server.app.listen(this.PORT, (error) => {
            if(! error){
                const msg = chalk.green(`Started live dev server at port ${this.PORT}.`);	
                console.log(msg);
            }
            else{
                throw new CannotRunServerError(`Failed to run server at port ${this.PORT}.`);
            }
        });
    }

    rerun(){
        const __dirname = process.cwd();
        Server.app.get('/', (req, res) => {
            res.sendFile(__dirname + `/${this.fileName}`);
        });		
        Server.listener = Server.app.listen(this.PORT, (error) => {
            if(! error){
                const msg = chalk.green(`Restarted live dev server at port ${this.PORT}.`);	
                console.log(msg);
            }
            else{
                throw new CannotRunServerError(`Failed to run server at port ${this.PORT}.`);
            }
        });
    }

    close(){
        Server.listener.close();
    }		
}

export default Server;

