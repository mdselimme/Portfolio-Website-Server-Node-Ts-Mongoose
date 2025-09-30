import { Router } from "express";
import { BlogsController } from "./blog.controller";
import { validateSchemaRequest } from "../../middleware/validateSchemaRequest";
import { blogZodSchemaModel, updateBlogZodSchema } from "./blog.validate";
import { checkAuth } from "../../middleware/checkUserAuth";


const router = Router();

// create blog 
router.post("/",
    validateSchemaRequest(blogZodSchemaModel),
    checkAuth("ADMIN"),
    BlogsController.createABlog);

// get all blog 
router.get("/",
    BlogsController.getAllBlogs);

// get a blog 
router.get("/:id",
    BlogsController.getABlog);

// update blog 
router.patch("/:id",
    validateSchemaRequest(updateBlogZodSchema),
    checkAuth("ADMIN"),
    BlogsController.updateABlog);

// delete blog 
router.delete("/:id",
    checkAuth("ADMIN"),
    BlogsController.deleteABlog);

export const BlogsRouter = router;