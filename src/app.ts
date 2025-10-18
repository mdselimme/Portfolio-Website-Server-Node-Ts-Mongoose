import express, { Request, Response } from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import { router } from "./app/router";
import { globalErrorHandler } from "./app/middleware/globalErrorHandlers";
import notFoundRoute from "./app/middleware/notFound";
import { envVariable } from "./app/config/envVariable";
const app = express();
app.use(express.json());
app.use(
  cors({
    origin: [envVariable.CLIENT_URL_LOCAL, envVariable.CLIENT_URL_PRODUCTION],
    credentials: true,
  })
);
app.use(cookieParser());

// root app
app.get("/", (req: Request, res: Response) => {
  res.json({
    message: "Next Js Portfolio Server Running.",
    version: "1.2",
  });
});

// router
app.use("/api/v1", router);

// global error handler
app.use(globalErrorHandler);

// Not found route
app.use(notFoundRoute);

export default app;
