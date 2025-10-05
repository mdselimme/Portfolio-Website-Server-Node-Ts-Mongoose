/* eslint-disable no-console */
import dotenv from "dotenv";
dotenv.config();

interface IEnvVars {
    NODE_DEV: "development" | "production",
    MONGO_CONNECT_URL: string,
    PORT: string,
    JWT_ACCESS_SECRET: string,
    JWT_REFRESH_SECRET: string,
    JWT_ACCESS_EXPIRES: string,
    JWT_REFRESH_EXPIRED: string,
    BCRYPT_SALT_ROUND: string,
    USER_NAME: string,
    USER_EMAIL: string,
    USER_PASSWORD: string,
    USER_PHONE: string,
    NEXT_AUTH_SECRET: string,
};


const requiredEnvironmentVariables = (): IEnvVars => {

    const requiredVar: string[] = ["NODE_DEV", "MONGO_CONNECT_URL", "PORT",
        "JWT_ACCESS_SECRET",
        "JWT_REFRESH_SECRET",
        "JWT_ACCESS_EXPIRES",
        "JWT_REFRESH_EXPIRED",
        "BCRYPT_SALT_ROUND",
        "USER_NAME",
        "USER_EMAIL",
        "USER_PASSWORD",
        "USER_PHONE",
        "NEXT_AUTH_SECRET",
    ];

    requiredVar.forEach((key) => {
        if (!process.env[key]) {
            console.log(`${key} not available in dot env. Please set this key in .env file.`);
        }
    })

    return {
        NODE_DEV: process.env.NODE_DEV as "development" | "production",
        MONGO_CONNECT_URL: process.env.MONGO_CONNECT_URL as string,
        PORT: process.env.PORT as string,
        NEXT_AUTH_SECRET: process.env.USER_PHONE as string,
        JWT_ACCESS_SECRET: process.env.JWT_ACCESS_SECRET as string,
        JWT_REFRESH_SECRET: process.env.JWT_REFRESH_SECRET as string,
        JWT_ACCESS_EXPIRES: process.env.JWT_ACCESS_EXPIRES as string,
        JWT_REFRESH_EXPIRED: process.env.JWT_REFRESH_EXPIRED as string,
        BCRYPT_SALT_ROUND: process.env.BCRYPT_SALT_ROUND as string,
        USER_NAME: process.env.USER_NAME as string,
        USER_EMAIL: process.env.USER_EMAIL as string,
        USER_PASSWORD: process.env.USER_PASSWORD as string,
        USER_PHONE: process.env.USER_PHONE as string,
    };
};

export const envVariable = requiredEnvironmentVariables();