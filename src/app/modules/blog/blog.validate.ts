import z from "zod";


export const blogZodSchemaModel = z.object({
    title: z.string({ error: "blog title required." }),
    // author: z.string({ error: "author object id required." }),
    description: z.string({ error: "description required." }),
    thumbnail: z.url({ error: "thumbnail link is required." }),
    tags: z.array(z.string(), { error: "tags is a string array." }),
    isFeatured: z.boolean({ error: "isFeatured is a boolean." }),
});

export const updateBlogZodSchema = z.object({
    title: z.string({ error: "blog title required." }).optional(),
    description: z.string({ error: "description required." }).optional(),
    thumbnail: z.url({ error: "thumbnail link is required." }).optional(),
    tags: z.array(z.string(), { error: "tags is a string array." }).optional(),
    isFeatured: z.boolean({ error: "isFeatured is a boolean." }).optional(),
});
