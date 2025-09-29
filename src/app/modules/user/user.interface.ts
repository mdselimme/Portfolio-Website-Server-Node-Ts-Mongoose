import { Types } from "mongoose";


export interface IUser {
    _id?: Types.ObjectId,
    name?: string,
    email: string,
    photo?: string,
    password: string,
    role?: "ADMIN",
    isActive?: "ACTIVE",
    isVerified?: true,
    phone: string,
};