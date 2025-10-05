import httpStatusCodes from 'http-status-codes';
import { Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { StatsServices } from './stats.service';



const getAllDataStats = catchAsync(async (req: Request, res: Response) => {

    const result = await StatsServices.getAllDataStats();

    sendResponse(res, {
        success: true,
        message: "Get All Stats Successfully.",
        data: result,
        statusCode: httpStatusCodes.OK
    });

});


export const StatsController = {
    getAllDataStats
}