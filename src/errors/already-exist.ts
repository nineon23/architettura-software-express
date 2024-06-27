import { NextFunction, Request, Response } from "express";

export class AlreadyExistError extends Error {
    constructor(message?: string) {
        super();
        this.name = 'AlreadyExistError';
        if (message) {
            this.message = message;
        } else {
            this.message = 'Item already exists';
        }
    }
}

export const alreadyexistHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof AlreadyExistError) {
        res.status(403);
        res.json({
            error: err.name,
            message: err.message
        });
    } else {
        next(err);
    }
}