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

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error:{error.message}</p>
  if (!people[0]) return <p>No data</p>

  console.log('people ===>', people)

  return (
    <div>
      <p>PeopleView</p>
      {people.map((person) => (
        <div key={person.id} className="border m-2">
          <p>name: {person.name}</p>
          <p>department: {person.department}</p>
          <p>position: {person.position}</p>
          <p>email: {person.email}</p>
          <p>tell: {person.tell}</p>
          <p>memo: {person.memo}</p>
          <p>companyId</p>
          <p>{person.company_id}</p>
        </div>
      ))}
    </div>
  )
}

export default PeopleView
