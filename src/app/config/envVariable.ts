/* eslint-disable no-console */
import dotenv from "dotenv";
dotenv.config();

interface IEnvVars {
    NODE_DEV: "development" | "production",
    MONGO_CONNECT_URL: string,
    PORT: string
};


const requiredEnvironmentVariables = (): IEnvVars => {

    const requiredVar: string[] = ["NODE_DEV", "MONGO_CONNECT_URL", "PORT"];

    requiredVar.forEach((key) => {
        if (!process.env[key]) {
            console.log(`${key} not available in dot env. Please set this key in .env file.`);
        }
    })

    return {
        NODE_DEV: process.env.NODE_DEV as "development" | "production",
        MONGO_CONNECT_URL: process.env.MONGO_CONNECT_URL as string,
        PORT: process.env.PORT as string,
    };
};

export const envVariable = requiredEnvironmentVariables();