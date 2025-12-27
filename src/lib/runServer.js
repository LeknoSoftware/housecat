import process from "process";
import express from "express";

import {CannotRunServerError} from "./errors.js"

function runServer(fileName, PORT){
    let __dirname = process.cwd();
    const app = express();
    app.get('/', (req, res) => {
        res.sendFile(__dirname + `/${fileName}`);
    });

    app.listen(PORT, (error) => {
        if(! error){
            console.log(`Started live dev server at port ${PORT}.`);
        }
        else{
            throw new CannotRunServerError(`Failed to run server at port ${PORT}.`);
        }
    });
}

export default runServer;

