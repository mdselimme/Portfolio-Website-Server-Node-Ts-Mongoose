import { Response } from "express";
import { envVariable } from "../config/envVariable";


interface IToken {
    accessToken?: string,
    refreshToken?: string,
}


export const setTokenInCookie = (res: Response, token: IToken) => {
    if (token.accessToken) {
        res.cookie("accessToken", token.accessToken, {
            httpOnly: true,
            secure: envVariable.NODE_DEV === "production",
            sameSite: "none",
            maxAge: 1000 * 60 * 60 * 24
        })
    }
    if (token.refreshToken) {
        res.cookie("refreshToken", token.refreshToken, {
            httpOnly: true,
            secure: envVariable.NODE_DEV === "production",
            sameSite: "none",
            maxAge: 1000 * 60 * 60 * 24 * 30
        })
    }
};