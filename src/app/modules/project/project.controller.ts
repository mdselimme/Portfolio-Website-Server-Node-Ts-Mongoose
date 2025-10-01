import httpStatusCodes from "http-status-codes";
import { Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { JwtPayload } from "jsonwebtoken";
import { ProjectServices } from "./project.service";

// Create A Project
const createAProject = catchAsync(async (req: Request, res: Response) => {
  const decodedToken = req?.user;

  const result = await ProjectServices.createAProject(
    req.body,
    decodedToken as JwtPayload
  );

  sendResponse(res, {
    success: true,
    message: "Project Created Successfully.",
    data: result,
    statusCode: httpStatusCodes.CREATED,
  });
});

// Update A Project
const updateAProject = catchAsync(async (req: Request, res: Response) => {
  const result = await ProjectServices.updateAProject(req.body, req.params.id);

  sendResponse(res, {
    success: true,
    message: "Project Updated Successfully.",
    data: result,
    statusCode: httpStatusCodes.CREATED,
  });
});

// get All Project
const getAllProject = catchAsync(async (req: Request, res: Response) => {
  const result = await ProjectServices.getAllProject();

  sendResponse(res, {
    success: true,
    message: "Project retrieved Successfully.",
    data: result,
    statusCode: httpStatusCodes.OK,
  });
});

// get A Single Project
const getAProject = catchAsync(async (req: Request, res: Response) => {
  const result = await ProjectServices.getAProject(req.params.id);

  sendResponse(res, {
    success: true,
    message: "Project retrieved Successfully.",
    data: result,
    statusCode: httpStatusCodes.OK,
  });
});

// get A Single Project
const deleteAProject = catchAsync(async (req: Request, res: Response) => {
  await ProjectServices.deleteAProject(req.params.id);

  sendResponse(res, {
    success: true,
    message: "Project deleted Successfully.",
    data: null,
    statusCode: httpStatusCodes.OK,
  });
});

export const ProjectController = {
  createAProject,
  updateAProject,
  getAllProject,
  getAProject,
  deleteAProject,
};
