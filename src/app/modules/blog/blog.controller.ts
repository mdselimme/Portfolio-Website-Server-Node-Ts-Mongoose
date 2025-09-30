import httpStatusCodes from 'http-status-codes';
import { Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { JwtPayload } from 'jsonwebtoken';
import { BlogServices } from './blog.service';

// Create A Blog 
const createABlog = catchAsync(async (req: Request, res: Response) => {

    const decodedToken = req?.user;

    const result = await BlogServices.createABlog(req.body, decodedToken as JwtPayload);

    sendResponse(res, {
        success: true,
        message: "Blog Created Successfully.",
        data: result,
        statusCode: httpStatusCodes.CREATED
    });

});

// get All Blog
const getAllBlogs = catchAsync(async (req: Request, res: Response) => {

    const result = await BlogServices.getAllBlogs();

    sendResponse(res, {
        success: true,
        message: "Blogs retrieved Successfully.",
        data: result,
        statusCode: httpStatusCodes.OK
    });

});

// get A Single Blog
const getABlog = catchAsync(async (req: Request, res: Response) => {

    const result = await BlogServices.getABlog(req.params.id);

    sendResponse(res, {
        success: true,
        message: "Blog retrieved Successfully.",
        data: result,
        statusCode: httpStatusCodes.OK
    });

});






export const BlogsController = {
    createABlog,
    getAllBlogs,
    getABlog
};