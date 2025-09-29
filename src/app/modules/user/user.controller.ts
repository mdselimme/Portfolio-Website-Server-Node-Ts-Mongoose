import httpStatusCodes from 'http-status-codes';
import { Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { UserService } from './user.service';






// Create An User 
const updateUserData = catchAsync(async (req: Request, res: Response) => {

    const decodedToken = req.user;

    const result = await UserService.updateUserData(req.body, decodedToken);

    sendResponse(res, {
        success: true,
        message: "User Updated Successfully.",
        data: result,
        statusCode: httpStatusCodes.OK
    });
});

export const userController = {
    updateUserData
};