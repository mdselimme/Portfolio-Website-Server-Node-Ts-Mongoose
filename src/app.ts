import express, { Request, Response } from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
// import { notFoundRoute } from "./app/middleware/notFoundRoute";
// import { globalErrorHandling } from "./app/middleware/globalErrorHandler";
// import { router } from "./app/routes";
const app = express();
app.use(cors());
app.use(cookieParser());

// root app 
app.get("/", (req: Request, res: Response) => {
    res.json({
        message: "Mess Expense Server Is Running.",
        version: "1.01"
    })
});

// router 
// app.use("/api/v1", router);

//global error handler
// app.use(globalErrorHandling);

// // Not found route 
// app.use(notFoundRoute);



export default app;