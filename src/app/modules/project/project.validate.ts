import z from "zod";

export const projectZodSchema = z.object({
  title: z.string({ error: "project title required." }),
  thumbnail: z.url({
    error: "thumbnail link is required and give a valid link.",
  }),
  description: z.string({ error: "description required." }),
  technologyUsed: z.array(z.string(), {
    error: "technology used is a string array.",
  }),
  clientLiveLink: z
    .url({ error: "client live link is not valid link." })
    .optional(),
  serverLiveLink: z
    .url({ error: "server live link is not valid link." })
    .optional(),
  clientCodeLink: z
    .url({ error: "client code link is not valid link." })
    .optional(),
  serverCodeLink: z
    .url({ error: "server code link is not valid link." })
    .optional(),
});

export const updateProjectZodSchema = z.object({
  title: z.string({ error: "project title required." }).optional(),
  thumbnail: z
    .url({ error: "thumbnail link is required and give a valid link." })
    .optional(),
  description: z.string({ error: "description required." }).optional(),
  technologyUsed: z
    .array(z.string(), {
      error: "technology used is a string array.",
    })
    .optional(),
  clientLiveLink: z
    .url({ error: "client live link is not valid link." })
    .optional(),
  serverLiveLink: z
    .url({ error: "server live link is not valid link." })
    .optional(),
  clientCodeLink: z
    .url({ error: "client code link is not valid link." })
    .optional(),
  serverCodeLink: z
    .url({ error: "server code link is not valid link." })
    .optional(),
});
