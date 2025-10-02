import express, { Request, Response } from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import { router } from "./app/router";
import { globalErrorHandler } from "./app/middleware/globalErrorHandlers";
import notFoundRoute from "./app/middleware/notFound";
const app = express();
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
  })
);
app.use(cookieParser());

// root app
app.get("/", (req: Request, res: Response) => {
  res.json({
    message: "Next Js Portfolio Server Running.",
    version: "1.01",
  });
});

// router
app.use("/api/v1", router);

// global error handler
app.use(globalErrorHandler);

// Not found route
app.use(notFoundRoute);

export default app;
