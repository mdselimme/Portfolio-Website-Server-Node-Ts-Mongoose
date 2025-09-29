import AppError from "../../errorHelpers/AppError";
import { IUser } from "./user.interface";
import { User } from "./user.model";
import httpStatusCodes from 'http-status-codes';
import bcrypt from "bcrypt";
import { envVariable } from "../../config/envVariable";

// // Create An User 
// const createAnUser = async (payload: Partial<IUser>) => {

//     const { email, password } = payload;

//     const isUserExist = await User.findOne({ email });

//     if (isUserExist) {
//         throw new AppError(httpStatusCodes.BAD_REQUEST, "Email already exist.");
//     }

//     const hashedPassword = await bcrypt.hash(password as string, Number(envVariable.BCRYPT_SALT_ROUND));

//     const userData = {
//         ...payload,
//         email,
//         password: hashedPassword
//     };

//     const result = await User.create(userData);

//     return result;

// };

export const UserService = {
    // createAnUser
}