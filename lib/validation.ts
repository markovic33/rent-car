import { z } from "zod";

export const CarFilterSchema = z.object({
  brand: z.string().optional(),
});

export type WatchFilterValues = z.infer<typeof CarFilterSchema>;
