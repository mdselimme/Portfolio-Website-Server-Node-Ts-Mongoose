import { model, Schema } from "mongoose";
import { IProject } from "./project.interface";

const projectSchemaModel = new Schema<IProject>(
  {
    user: {
      required: true,
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    title: {
      required: true,
      type: String,
    },
    thumbnail: {
      required: true,
      type: String,
    },
    description: {
      type: String,
    },
    clientLiveLink: {
      type: String,
    },
    serverLiveLink: {
      type: String,
    },
    clientCodeLink: {
      type: String,
    },
    serverCodeLink: {
      type: String,
    },
    technologyUsed: {
      type: [String],
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

export const Project = model("Project", projectSchemaModel);
