import httpStatusCodes from 'http-status-codes';
import { JwtPayload } from "jsonwebtoken";
import { generateJwtToken, verifyJwtToken } from "./jwtTokenGenerate";
import { IUser } from '../modules/user/user.interface';
import { envVariable } from '../config/envVariable';
import { User } from '../modules/user/user.model';
import AppError from '../errorHelpers/AppError';




// Generate A new Access Token
export const createUserJwtToken = (user: Partial<IUser>) => {
    const jwtPayload = {
        userId: user._id,
        email: user.email,
        role: user.role,
    };
    const accessToken = generateJwtToken(jwtPayload, envVariable.JWT_ACCESS_SECRET, envVariable.JWT_ACCESS_EXPIRES);
    const refreshToken = generateJwtToken(jwtPayload, envVariable.JWT_REFRESH_SECRET, envVariable.JWT_REFRESH_EXPIRED);
    return {
        accessToken,
        refreshToken
    };
};

// Generate A new Access Token If access token expired 
export const newAccessTokenFromRefreshToken = async (refreshToken: string) => {

    const verifiedRefreshToken = verifyJwtToken(refreshToken, envVariable.JWT_REFRESH_SECRET) as JwtPayload;

    const isUserExist = await User.findOne({ email: verifiedRefreshToken.email });

    if (!isUserExist) {
        throw new AppError(httpStatusCodes.BAD_REQUEST, "User  does not exist.")
    };
    const jwtTokenPayload = {
        userId: isUserExist._id,
        email: isUserExist.email,
        role: isUserExist.role
    };
    const accessToken = generateJwtToken(jwtTokenPayload, envVariable.JWT_ACCESS_SECRET, envVariable.JWT_ACCESS_EXPIRES);

    return accessToken;
};