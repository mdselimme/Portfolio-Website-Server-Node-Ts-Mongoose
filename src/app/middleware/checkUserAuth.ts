import { NextFunction, Request, Response } from "express";
import AppError from "../errorHelpers/AppError";
import { envVariable } from "../config/envVariable";
import { User } from "../modules/user/user.model";
import { JwtPayload } from "jsonwebtoken";
import httpStatusCodes from "http-status-codes";
import { verifyJwtToken } from "../utils/jwtTokenGenerate";

export const checkAuth = (...authRoles: string[]) => async (req: Request, res: Response, next: NextFunction) => {
    try {
        const accessToken = req.headers.authorization || req.cookies.accessToken;
        // if access token not found 
        if (!accessToken) {
            throw new AppError(httpStatusCodes.BAD_GATEWAY, "No token found! Please give token.");
        }
        // verify access token 
        const verifiedToken = verifyJwtToken(accessToken, envVariable.JWT_ACCESS_SECRET) as JwtPayload;
        // user find by email 
        const isUserExist = await User.findOne({ email: verifiedToken.email });
        // If user not found 
        if (!isUserExist) {
            throw new AppError(httpStatusCodes.NOT_FOUND, "User does not found. Token is not valid.");
        };
        // if user is not verified 
        if (!isUserExist.isVerified) {
            throw new AppError(httpStatusCodes.BAD_REQUEST, `User is not verified.`);
        };
        // if user is not role admin 
        if (isUserExist.role !== "ADMIN") {
            throw new AppError(httpStatusCodes.BAD_REQUEST, `User is not verified.`);
        };
        // verify auth roles 
        if (!authRoles.includes(verifiedToken.role)) {
            throw new AppError(httpStatusCodes.BAD_REQUEST, "You are not authorized for this route.");
        };
        req.user = verifiedToken;
        next();

    } catch (error) {
        next(error)
    }
};