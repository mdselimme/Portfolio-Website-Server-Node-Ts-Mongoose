/* eslint-disable @typescript-eslint/no-unused-vars */
import mongoose from "mongoose"
import { TGenericErrorResponse } from "../intefaces/error.types"



export const handlerCastError = (err: mongoose.Error.CastError): TGenericErrorResponse => {

    return {
        statusCode: 400,
        message: "Invalid MongoDb ObjectId. Pleas give a valid id."
    }
}