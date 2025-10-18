import { Request, Response } from "express"
import { sendResponse } from "../../utils/sendResponse";
import { AuthServices } from "./auth.services";
import httpStatusCodes from "http-status-codes";
import { newAccessTokenFromRefreshToken } from "../../utils/userTokens";
import { JwtPayload } from "jsonwebtoken";
import { catchAsync } from "../../utils/catchAsync";
import AppError from "../../errorHelpers/AppError";


// User login with email and password and cookie set
const AuthLogIn = catchAsync(async (req: Request, res: Response) => {

    const result = await AuthServices.AuthLogIn(req.body);

    sendResponse(res, {
        success: true,
        message: "User logged in Successfully.",
        data: result,
        statusCode: httpStatusCodes.OK
    });
});

// User login with email and password and cookie set
const resetUserPassword = catchAsync(async (req: Request, res: Response) => {

    const decodedToken = req.user;

    await AuthServices.resetUserPasswordService(req.body, decodedToken as JwtPayload);

    sendResponse(res, {
        success: true,
        message: "User password reset successfully.",
        data: null,
        statusCode: httpStatusCodes.OK
    });
});

// Get new access token from refresh token 
const getNewAccessTokenFromRefreshToken = catchAsync(async (req: Request, res: Response) => {

    const refreshToken = req.cookies.refreshToken;

    if (!refreshToken) {
        throw new AppError(httpStatusCodes.BAD_REQUEST, "No refresh token found.");
    };

    const tokenInfo = await newAccessTokenFromRefreshToken(refreshToken);

    sendResponse(res, {
        success: true,
        message: "Access Token find Successfully.",
        data: {
            accessToken: tokenInfo
        },
        statusCode: httpStatusCodes.OK
    });
})



// Auth Logout function 
const AuthLogOut = catchAsync(async (req: Request, res: Response) => {

    res.clearCookie("accessToken", {
        httpOnly: true,
        secure: true,
        sameSite: "none"
    })
    res.clearCookie("refreshToken", {
        httpOnly: true,
        secure: true,
        sameSite: "none"
    })

    sendResponse(res, {
        success: true,
        message: "User logged out Successfully.",
        data: null,
        statusCode: httpStatusCodes.OK
    });
})





export const AuthController = {
    AuthLogIn,
    AuthLogOut,
    getNewAccessTokenFromRefreshToken,
    resetUserPassword
}