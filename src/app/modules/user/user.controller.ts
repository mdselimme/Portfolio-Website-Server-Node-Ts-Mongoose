import httpStatusCodes from 'http-status-codes';
import { Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { UserService } from './user.service';





// Create An User 
const createAnUser = catchAsync(async (req: Request, res: Response) => {


    sendResponse(res, {
        success: true,
        message: "User Created Successfully.",
        data: result,
        statusCode: httpStatusCodes.CREATED
    });
});

export const userController = {
    createAnUser
};