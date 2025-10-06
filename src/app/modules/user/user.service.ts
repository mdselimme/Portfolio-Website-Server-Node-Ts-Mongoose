import AppError from "../../errorHelpers/AppError";
import { IUser } from "./user.interface";
import { User } from "./user.model";
import httpStatusCodes from 'http-status-codes';
import { JwtPayload } from "jsonwebtoken";

// // Create An User 
const updateUserData = async (payload: Partial<IUser>, decodedToken: JwtPayload) => {

    const isUserExist = await User.findById(decodedToken?.userId);

    if (!isUserExist) {
        throw new AppError(httpStatusCodes.BAD_REQUEST, "User does not exist.");
    }

    const result = await User.findByIdAndUpdate(decodedToken.userId, payload, { new: true, runValidators: true }).select("-password");

    return result;

};

// Get Me User
const getMeUser = async (userId: string) => {

    const user = await User.findById(userId)
        .select("-password");

    if (!user) {
        throw new AppError(httpStatusCodes.BAD_REQUEST, "User not found.");
    }

    return user;
};


export const UserService = {
    updateUserData,
    getMeUser,
}