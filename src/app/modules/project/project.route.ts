import { Router } from "express";
import { checkAuth } from "../../middleware/checkUserAuth";
import { validateSchemaRequest } from "../../middleware/validateSchemaRequest";
import { ProjectController } from "./project.controller";
import { projectZodSchema, updateProjectZodSchema } from "./project.validate";

const router = Router();

// create blog
router.post(
  "/",
  validateSchemaRequest(projectZodSchema),
  checkAuth("ADMIN"),
  ProjectController.createAProject
);

// get all blog
router.get("/", ProjectController.getAllProject);

// get a blog
router.get("/:id", ProjectController.getAProject);

// update blog
router.patch(
  "/:id",
  validateSchemaRequest(updateProjectZodSchema),
  checkAuth("ADMIN"),
  ProjectController.updateAProject
);

// delete blog
router.delete("/:id", checkAuth("ADMIN"), ProjectController.deleteAProject);

export const ProjectRouter = router;
