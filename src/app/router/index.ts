import { Router } from "express";
import { UserRouter } from "../modules/user/user.route";
import { AuthRouter } from "../modules/auth/auth.route";
import { BlogsRouter } from "../modules/blog/blog.route";
import { ProjectRouter } from "../modules/project/project.route";

export const router = Router();

const routes = [
  {
    path: "/user",
    route: UserRouter,
  },
  {
    path: "/auth",
    route: AuthRouter,
  },
  {
    path: "/blog",
    route: BlogsRouter,
  },
  {
    path: "/project",
    route: ProjectRouter,
  },
];

routes.forEach((route) => {
  router.use(route.path, route.route);
});
