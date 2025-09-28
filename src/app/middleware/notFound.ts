import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes"


const notFoundRoute = (req: Request, res: Response) => {
    res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: "Route not Found."
    })
}

export default notFoundRoute;