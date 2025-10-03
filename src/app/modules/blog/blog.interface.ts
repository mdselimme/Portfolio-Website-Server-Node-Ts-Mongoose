import { Types } from "mongoose";



export interface IBlog {
    _id?: Types.ObjectId,
    title: string,
    author: Types.ObjectId,
    description: string,
    thumbnail?: string,
    tags: string[],
    views: number,
    isFeatured: boolean,
    createdAt: Date
}