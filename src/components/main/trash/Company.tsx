import TrashContentWrapper from '@/components/main/trash/TrashContentWrapper'
import TrashItem from '@/components/main/trash/TrashItem'
import { toast } from '@/components/ui/use-toast'
import type { Company } from '@/lib/gql/graphql'
import { useGetUserCompanyQuery } from '@/lib/gql/graphql'
import type { Field } from '@/types/common'

export default function TrashCompany({ userId }: { userId: string }) {
  const { data, loading, error } = useGetUserCompanyQuery({
    variables: {
      id: userId,
    },
  })
  const companies: Company[] = data?.getUser?.companies as Company[]

  const CompanyItem = ({ company }: { company: Company }) => {
    if (!company.is_trash) return null

    const fields: Field[] = [
      { name: 'Name', value: company.name || '' },
      { name: 'Email', value: company.email || '' },
      { name: 'Tell', value: company.tell || '' },
      { name: 'Address', value: company.address || '' },
      { name: 'Industry', value: company.industry || '' },
      { name: 'Employees Number', value: company.employees_number || 0 },
      { name: 'Site Url', value: company.site_url || '' },
    ]

    return (
      <TrashItem
        id={company.id}
        name={company.name as string}
        fields={fields}
        category="company"
        onDelete={() =>
          toast({
            title: 'Coming Soon!',
            description:
              'This feature is currently under development and will be available in the future.',
          })
        }
      />
    )
  }

  return (
    <TrashContentWrapper>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-1">
        {companies?.map((company: Company) => (
          <CompanyItem key={company.id} company={company} />
        ))}
      </div>
    </TrashContentWrapper>
  )
}
