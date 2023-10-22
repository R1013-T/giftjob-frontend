import * as z from 'zod'

export const PersonFormSchema = z.object({
  company_id: z.string().optional(),
  name: z.string(),
  department: z.string().optional(),
  position: z.string().optional(),
  tell: z.string().optional(),
  email: z.string().email().optional(),
  memo: z.string().optional(),
})
