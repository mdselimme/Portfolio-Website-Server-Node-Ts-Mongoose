import z from "zod";


export const blogZodSchemaModel = z.object({
    title: z.string({ error: "blog title required." }),
    // author: z.string({ error: "author object id required." }),
    description: z.string({ error: "description required." }),
    thumbnail: z.url({ error: "thumbnail link is required." }),
    tags: z.array(z.string(), { error: "tags is a string array." }),
    isFeatured: z.boolean({ error: "isFeatured is a boolean." }),
    views: z.number({ error: "view is a number." })
});
