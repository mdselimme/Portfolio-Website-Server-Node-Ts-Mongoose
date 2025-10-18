import { Response } from "express";


interface IToken {
    accessToken?: string,
    refreshToken?: string,
}


export const setTokenInCookie = (res: Response, token: IToken) => {
    if (token.accessToken) {
        res.cookie("accessToken", token.accessToken, {
            httpOnly: true,
            secure: true,
            sameSite: "none",
            maxAge: 1000 * 60 * 60 * 24 * 2,
            path: "/"
        })
    }
    if (token.refreshToken) {
        res.cookie("refreshToken", token.refreshToken, {
            httpOnly: true,
            secure: true,
            sameSite: "none",
            maxAge: 1000 * 60 * 60 * 24 * 30,
            path: "/"
        })
    }
};