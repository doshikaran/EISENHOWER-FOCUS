import {z} from "zod"

export const taskSchema = z.object({
    id: z.string(),
    title: z.string(),
    status: z.string(),
    priority: z.string(),
    label: z.string(),
})

export type Task = z.infer<typeof taskSchema>