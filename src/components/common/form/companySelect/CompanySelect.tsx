import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import type { Company } from '@/lib/gql/graphql'
import { useGetUserCompanyQuery } from '@/lib/gql/graphql'

type Props = {
  userId: string
  form: any
}

export default function CompanySelect(props: Props) {
  const { data, loading, error } = useGetUserCompanyQuery({
    variables: {
      id: props.userId,
    },
  })
  const companies: Company[] = data?.getUser?.companies as Company[]

  if (loading) return null
  if (error) return <p>Error:{error.message}</p>

  return (
    <FormField
      control={props.form.control}
      name="company_id"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Company</FormLabel>
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
              <SelectTrigger>
                <SelectValue placeholder="Company" />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {companies?.map((company: Company) => (
                <SelectItem key={company.id} value={company.id}>
                  {company.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
