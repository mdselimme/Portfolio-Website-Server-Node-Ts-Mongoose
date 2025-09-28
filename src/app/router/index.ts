import { Router } from "express";
import { UserRouter } from "../modules/user/user.route";

export const router = Router();


const routes = [
    {
        path: "/user",
        route: UserRouter
    },
];

routes.forEach((route) => {
    router.use(route.path, route.route);
})