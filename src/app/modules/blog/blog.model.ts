import { model, Schema } from "mongoose";
import { IBlog } from "./blog.interface";



const blogSchemaModel = new Schema<IBlog>({
    title: {
        required: true,
        type: String,
        min: [10, "Minimum 10 characters need."],
    },
    author: {
        required: true,
        type: Schema.ObjectId,
    },
    description: {
        required: true,
        type: String
    },
    thumbnail: {
        type: String,
    },
    tags: {
        type: [String],
        required: true
    }
});

export const Blog = model<IBlog>("Blogs", blogSchemaModel);