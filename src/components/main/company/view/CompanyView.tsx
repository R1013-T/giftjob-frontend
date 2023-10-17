import CompanyItem from '@/components/main/company/view/CompanyItem'
import CompanyLoad from '@/components/main/company/view/load/Load'
import type { Company } from '@/lib/gql/graphql'
import { useGetUserCompanyQuery } from '@/lib/gql/graphql'

type Props = {
  userId: string
}

const CompanyView: React.FC<Props> = ({ userId }) => {
  const { data, loading, error } = useGetUserCompanyQuery({
    variables: {
      id: userId,
    },
  })
  const companies: Company[] = data?.getUser?.companies as Company[]

  if (loading) return <CompanyLoad />
  if (error) return <p>Error:{error.message}</p>
  if (!companies[0]) return <p>No data</p>

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
      {companies.map((company: Company) => (
        <CompanyItem company={company} key={company.id} />
      ))}
    </div>
  )
}

export default CompanyView
