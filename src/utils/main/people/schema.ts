import * as z from 'zod'

export const PersonFormSchema = z.object({
  company_id: z.string(),
  name: z.string(),
  department: z.string().optional(),
  position: z.string().optional(),
  tell: z.string().optional(),
  email: z.string().email().optional().or(z.literal('')),
  memo: z.string().optional(),
})
