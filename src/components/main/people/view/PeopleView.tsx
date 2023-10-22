import CompanyLoad from '@/components/main/company/view/load/Load'
import PeopleItem from '@/components/main/people/view/PeopleItem'
import type { Person } from '@/lib/gql/graphql'
import { useGetUserPeopleQuery } from '@/lib/gql/graphql'

type Props = {
  userId: string
}

const PeopleView: React.FC<Props> = ({ userId }) => {
  const { data, loading, error } = useGetUserPeopleQuery({
    variables: {
      id: userId,
    },
  })
  const people: Person[] = data?.getUser?.People as Person[]

  if (loading) return <CompanyLoad />
  if (error) return <p>Error:{error.message}</p>
  if (!people[0]) return <p>No data</p>

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
      {people.map((person) => (
        <PeopleItem key={person.id} person={person} />
      ))}
    </div>
  )
}

export default PeopleView
