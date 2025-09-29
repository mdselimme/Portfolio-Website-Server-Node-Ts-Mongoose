import { Router } from "express"
import { userController } from "./user.controller";
import { checkAuth } from "../../middleware/checkUserAuth";
import { validateSchemaRequest } from "../../middleware/validateSchemaRequest";
import { updateUserZodSchema } from "./user.validate";

const router = Router();

router.patch("/",
    checkAuth("ADMIN"),
    validateSchemaRequest(updateUserZodSchema),
    userController.updateUserData)

export const UserRouter = router;