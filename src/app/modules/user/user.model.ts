import { Schema } from "mongoose";
import { IUser } from "./user.interface";
import { model } from "mongoose";


const userSchemaModel = new Schema<IUser>({
    name: { type: String, trim: true },
    email: { type: String, unique: [true, "Email already taken. Email must be unique."], trim: true, required: [true, "Email is required."] },
    password: { type: String, required: true, minlength: [5, "min 8 character long."] },
    photo: { type: String, trim: true },
    role: { type: String, enum: ["ADMIN"], default: "ADMIN" },
    isActive: { type: String, enum: ["ACTIVE"], default: "ACTIVE" },
    isVerified: { type: Boolean, default: true },
    phone: {
        type: String,
        trim: true,
        required: [true, "phone number is required."],
        unique: [true, "Phone number already taken. try another number."]
    },
}, {
    versionKey: false,
    timestamps: true
});


export const User = model<IUser>("User", userSchemaModel);