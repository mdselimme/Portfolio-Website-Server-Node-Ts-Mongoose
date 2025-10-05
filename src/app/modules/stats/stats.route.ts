import { Router } from "express";
import { StatsController } from "./stats.controller";
import { checkAuth } from "../../middleware/checkUserAuth";


const router = Router();

router.get("/", checkAuth("ADMIN"),
    StatsController.getAllDataStats);

export const StatsRouter = router;