import httpStatusCodes from 'http-status-codes';
import { JwtPayload } from "jsonwebtoken";
import { IBlog } from "./blog.interface";
import { Blog } from "./blog.model";
import { User } from "../user/user.model";
import AppError from "../../errorHelpers/AppError";


// Create A Blog 
const createABlog = async (payload: Partial<IBlog>, decodedToken: JwtPayload) => {

    const user = await User.findById(decodedToken?.userId);

    if (!user) {
        throw new AppError(httpStatusCodes.BAD_REQUEST, "User does note exist. Your token is not valid.")
    };

    const payLoadData = {
        ...payload,
        author: decodedToken?.userId
    };

    const result = await Blog.create(payLoadData);
    return result;
};

// get All Blog
const getAllBlogs = async () => {

    const result = await Blog.find({});

    return result;

};

// get A Single Blog
const getABlog = async (id: string) => {

    const result = await Blog.findById(id)
        .populate("author", "name email phone");

    return result;

};



export const BlogServices = {
    createABlog,
    getAllBlogs,
    getABlog
};