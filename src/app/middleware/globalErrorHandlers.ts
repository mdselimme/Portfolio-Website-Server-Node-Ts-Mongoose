/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from "express"
import AppError from "../errorHelpers/AppError";
import { envVariable } from "../config/envVariable";
import { TErrorSources } from "../interfaces/error.types";
import { handlerDuplicateError } from "../errorHelpers/handleDuplicateError";
import { handlerCastError } from "../errorHelpers/handleCastError";
import { handleValidationError } from "../errorHelpers/handleValidationError";
import { handleZodError } from "../errorHelpers/handleZodError";




// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const globalErrorHandler = async (error: any, req: Request, res: Response, next: NextFunction) => {

    if (envVariable.NODE_DEV === "development") {
        console.log(error)
    }

    let errorSource: TErrorSources[] = [];
    let statusCode = 500;
    let message = `Something went wrong!! ${error.message}`;

    // Duplicate Key Error 
    if (error.code === 11000) {
        const simplifiedError = handlerDuplicateError(error);
        statusCode = simplifiedError.statusCode;
        message = simplifiedError.message;
    }
    // Mongoose Duplicate Error 
    else if (error.name === "CastError") {
        const simplifiedError = handlerCastError(error);
        statusCode = simplifiedError.statusCode;
        message = simplifiedError.message;
    }
    // Validation Error 
    else if (error.name === "ValidationError") {
        const simplifiedError = handleValidationError(error);
        statusCode = simplifiedError.statusCode;
        message = simplifiedError.message;
        errorSource = simplifiedError.errorSources as TErrorSources[];
    }
    // Zod Validation Error 
    else if (error.name === "ZodError") {
        const simplifiedError = handleZodError(error);
        statusCode = simplifiedError.statusCode
        message = simplifiedError.message
        errorSource = simplifiedError.errorSources as TErrorSources[];
    }
    // App Error Message 
    else if (error instanceof AppError) {
        statusCode = error.statusCode
        message = error.message
    }
    // Error Message 
    else if (error instanceof Error) {
        statusCode = 500
        message = error.message
    }

    res.status(statusCode).json({
        success: false,
        message,
        errorSource,
        error: envVariable.NODE_DEV === "development" ? error : null,
        stack: envVariable.NODE_DEV === "development" ? error.stack : null
    })
};