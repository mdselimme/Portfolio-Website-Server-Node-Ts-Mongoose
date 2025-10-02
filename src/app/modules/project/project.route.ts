import { Router } from "express";
import { checkAuth } from "../../middleware/checkUserAuth";
import { validateSchemaRequest } from "../../middleware/validateSchemaRequest";
import { ProjectController } from "./project.controller";
import { projectZodSchema, updateProjectZodSchema } from "./project.validate";

const router = Router();

// create project
router.post(
  "/",
  validateSchemaRequest(projectZodSchema),
  checkAuth("ADMIN"),
  ProjectController.createAProject
);

// get all project
router.get("/", ProjectController.getAllProject);

// get a project
router.get("/:id", ProjectController.getAProject);

// update project
router.patch(
  "/:id",
  validateSchemaRequest(updateProjectZodSchema),
  checkAuth("ADMIN"),
  ProjectController.updateAProject
);

// delete project
router.delete("/:id", checkAuth("ADMIN"), ProjectController.deleteAProject);

export const ProjectRouter = router;
