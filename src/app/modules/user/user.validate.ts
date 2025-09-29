import z from "zod";

// Update User Validation 
export const updateUserZodSchema = z.object({
    photo: z.url({ error: "url is not valid." }),
    phone: z.string()
        .min(11, "Phone number is too short")
        .max(14, "Phone number is too long")
        .regex(
            /^(01|\+8801)\d{9}$/,
            "Invalid Bangladeshi phone number. It must start with '01' or '+8801' and be 11 or 13 digits long respectively."
        ).optional(),
});
