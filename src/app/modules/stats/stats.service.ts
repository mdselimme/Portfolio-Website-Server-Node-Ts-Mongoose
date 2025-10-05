import { Blog } from "../blog/blog.model";
import { Project } from "../project/project.model";

const getAllDataStats = async () => {
    const totalBlogs = await Blog.countDocuments();
    const totalProjects = await Project.countDocuments();

    return {
        totalBlogs,
        totalProjects
    }
};


export const StatsServices = {
    getAllDataStats
}