/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
import { Server } from "http";
import mongoose from "mongoose";
import app from "./app";
import { envVariable } from "./app/config/envVariable";
import { seedCreateAdminUser } from "./app/utils/seedCreateAdminUser";



let server: Server;


const startServer = async () => {
    try {
        const mongodbUrl = envVariable.MONGO_CONNECT_URL;
        await mongoose.connect(mongodbUrl as string);
        console.log("Database Connected ✔");
        server = app.listen(envVariable.PORT, () => {
            console.log(`Server running port http://localhost:${envVariable.PORT}`);
        })
    } catch (error) {
        if (error instanceof Error) {
            console.log(error)
        }
    }
};

(async () => {
    await startServer();
    await seedCreateAdminUser();
})()

// server shutdown function 
const serverShutDown = (message: string, err?: any) => {
    console.log(`${message} Server is Closing.`, err || "");
    if (server) {
        server.close(() => {
            process.exit(1)
        });
    }
    process.exit(1);
};

// when server manually close 
process.on("SIGINT", () => serverShutDown("SIGINT received."));

// when cloud providers shutdown
process.on("SIGTERM", () => serverShutDown("SIGTERM received."));

// when synchronous error
process.on("uncaughtException", (error) => serverShutDown("Uncaught Exception:", error));

// when promise rejected 
process.on("unhandledRejection", (error) => serverShutDown("Unhandled Rejection:", error));

// Un handler rejection error
// Promise.reject(new Error("I forgot to catch this promise"))

// Uncaught Exception Error
// throw new Error("I forgot to handle this local error")