import z from "zod";


// Create User Validation 
export const createUserZodSchema = z.object({
    name: z
        .string("Name must be string")
        .min(2, { message: "Name too short. Minimum 2 character long" })
        .max(50, { message: "Name too long. Max 50 characters" }),
    email: z
        .email("Email must be string.")
        .min(5, "Email must be 5 character long.")
        .max(100, { message: "Email cannot exceed 100 character." }),
    phone: z.string()
        .min(11, "Phone number is too short")
        .max(14, "Phone number is too long")
        .regex(
            /^(01|\+8801)\d{9}$/,
            "Invalid Bangladeshi phone number. It must start with '01' or '+8801' and be 11 or 13 digits long respectively."
        ),
    role: z
        .enum(["ADMIN"], { error: "Value must be ADMIN" })
        .optional(),
    password: z
        .string({ error: "Password must be string type." })
        .min(8, { message: "Password minimum 8 characters long." })
});

// Update User Validation 
export const updateUserZodSchema = z.object({
    name: z
        .string("Name must be string")
        .min(2, { message: "Name too short. Minimum 2 character long" })
        .max(50, { message: "Name too long. Max 50 characters" })
        .optional(),
    email: z
        .email("Email must be string.")
        .min(5, "Email must be 5 character long.")
        .max(100, { message: "Email cannot exceed 100 character." })
        .optional(),
    phone: z.string()
        .min(11, "Phone number is too short")
        .max(14, "Phone number is too long")
        .regex(
            /^(01|\+8801)\d{9}$/,
            "Invalid Bangladeshi phone number. It must start with '01' or '+8801' and be 11 or 13 digits long respectively."
        ).optional(),
});
