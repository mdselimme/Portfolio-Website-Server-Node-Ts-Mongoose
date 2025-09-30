import { Router } from "express";
import { BlogsController } from "./blog.controller";
import { validateSchemaRequest } from "../../middleware/validateSchemaRequest";
import { blogZodSchemaModel } from "./blog.validate";
import { checkAuth } from "../../middleware/checkUserAuth";


const router = Router();

router.post("/",
    validateSchemaRequest(blogZodSchemaModel),
    checkAuth("ADMIN"),
    BlogsController.createABlog);

router.get("/",
    BlogsController.getAllBlogs);

router.get("/:id",
    BlogsController.getABlog);

export const BlogsRouter = router;