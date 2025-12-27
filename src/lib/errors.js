class CannotRunServerError extends Error{
    constructor(message){
        super(message);
        this.name = "CannotRunServerError";
    }
}

class NoFileEnteredError extends Error{
    constructor(message){
        super(message);
        this.name = "NoFileEnteredError";
    }
}	

export {CannotRunServerError, NoFileEnteredError};
