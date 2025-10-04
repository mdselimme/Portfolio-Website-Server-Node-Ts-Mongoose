import httpStatusCodes from "http-status-codes";
import { JwtPayload } from "jsonwebtoken";
import { IProject } from "./project.interface";
import { Project } from "./project.model";
import AppError from "../../errorHelpers/AppError";
import { User } from "../user/user.model";

// Create A Project
const createAProject = async (
  payload: Partial<IProject>,
  decodedToken: JwtPayload
) => {
  const user = await User.findById(decodedToken?.userId);

  if (!user) {
    throw new AppError(
      httpStatusCodes.BAD_REQUEST,
      "User does note exist. Your token is not valid."
    );
  }

  const payLoadData = {
    ...payload,
    user: decodedToken?.userId,
  };

  const result = await Project.create(payLoadData);
  return result;
};

// Update A Project
const updateAProject = async (payload: Partial<IProject>, id: string) => {
  const result = await Project.findByIdAndUpdate(id, payload, {
    runValidators: true,
    new: true,
  });

  return result;
};

// get All Project
const getAllProject = async () => {
  const result = await Project.find({}).populate(
    "user",
    "name photo"
  );

  return result;
};

// get A Single Project
const getAProject = async (id: string) => {
  const result = await Project.findById(id).populate(
    "user",
    "name photo"
  );

  return result;
};

// get A Single Project
const deleteAProject = async (id: string) => {
  const result = await Project.findByIdAndDelete(id);

  return result;
};

export const ProjectServices = {
  createAProject,
  updateAProject,
  getAllProject,
  getAProject,
  deleteAProject,
};
