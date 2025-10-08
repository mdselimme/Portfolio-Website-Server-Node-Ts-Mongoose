import { Router } from "express";
import { AuthController } from "./auth.controller";
import { checkAuth } from "../../middleware/checkUserAuth";
import { validateSchemaRequest } from "../../middleware/validateSchemaRequest";
import { authLoginZodSchema, resetPassZodSchema } from "./auth.validation";



const router = Router();

// User Login Route 
router.post("/login",
    validateSchemaRequest(authLoginZodSchema),
    AuthController.AuthLogIn
);

// Reset User Password 
router.patch("/reset-password",
    validateSchemaRequest(resetPassZodSchema),
    checkAuth("ADMIN"),
    AuthController.resetUserPassword
);

// Refresh Token route 
router.post("/refresh-token",
    AuthController.getNewAccessTokenFromRefreshToken
)

// User Logout Route 
router.post("/logout",
    AuthController.AuthLogOut
);



export const AuthRouter = router;
