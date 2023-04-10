import { Request, Response, NextFunction } from "express";


export function handleAppErrors (err, req: Request, res: Response, next: NextFunction) {
    if (err.name === "ConflictError") {
        return res
        .status(409)
        .send({ message: err.message });
    }

    if (err.name === "NotFoundError") {
        return res.status(404).send({
            message: err.message,
        });
    }
}