import { z } from "zod";

export const taskSchema = z.object({
  id: z.string(),
  name: z.string(),
  date: z.date(),
  label: z.string(),
});
