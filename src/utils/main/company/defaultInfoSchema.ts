import * as z from 'zod'

export const defaultCompanyInfoFormSchema = z.object({
  name: z.string(),
  tell: z.string(),
  email: z.string().email({ message: 'Invalid email address' }),
  address: z.string(),
  site_url: z.string().url({ message: 'Invalid url' }),
  industry: z.string(),
  employees_number: z.coerce.number(),
})
