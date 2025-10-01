import { Types } from "mongoose";

export interface IProject {
  _id?: Types.ObjectId;
  user: Types.ObjectId;
  title: string;
  thumbnail: string;
  description?: string;
  clientLiveLink?: string;
  serverLiveLink?: string;
  serverCodeLink?: string;
  clientCodeLink?: string;
  technologyUsed: string[];
}
