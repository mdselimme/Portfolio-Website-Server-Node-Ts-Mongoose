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

// Update A Blog 
const updateABlog = async (payload: Partial<IBlog>, id: string) => {

    const blog = await Blog.findById(id);

    if (!blog) {
        throw new AppError(httpStatusCodes.BAD_REQUEST, "No Blog found. Invalid Your ObjectId.")
    }

    const result = await Blog.findByIdAndUpdate(id, payload, { runValidators: true, new: true });

    return result;
};

// get All Blog
const getAllBlogs = async () => {

    const result = (await Blog.find({})
        .sort({ createdAt: -1 })
        .populate("author", "name email phone photo"))

    return result;

};

// get A Single Blog
const getABlog = async (id: string) => {
    const session = await Blog.startSession();
    session.startTransaction();
    try {

        const blog = await Blog.findById(id);

        if (!blog) {
            throw new AppError(httpStatusCodes.BAD_REQUEST, "No Blog found. Invalid Your ObjectId.")
        }

        const updateViews = { views: Number(blog?.views) + 1 };

        const findByIdAndUpdateViews = await Blog.findByIdAndUpdate(id, updateViews, { session, runValidators: true, new: true }).populate("author", "name email phone photo")
        await session.commitTransaction();
        session.endSession();
        return findByIdAndUpdateViews;
    } catch (error) {
        await session.abortTransaction();
        session.endSession();
        throw error;
    }


};

// get A Single Blog
const deleteABlog = async (id: string) => {

    const blog = await Blog.findById(id);

    if (!blog) {
        throw new AppError(httpStatusCodes.BAD_REQUEST, "No Blog found. Invalid Your ObjectId.")
    }

    const result = await Blog.findByIdAndDelete(id);

    return result;

};



export const BlogServices = {
    createABlog,
    getAllBlogs,
    getABlog,
    updateABlog,
    deleteABlog
};