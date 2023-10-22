import TrashContentWrapper from '@/components/main/trash/TrashContentWrapper'
import TrashItem from '@/components/main/trash/TrashItem'
import { toast } from '@/components/ui/use-toast'
import type { Person } from '@/lib/gql/graphql'
import { useGetUserPeopleQuery } from '@/lib/gql/graphql'
import type { Field } from '@/types/common'

export default function TrashPeople({ userId }: { userId: string }) {
  const { data } = useGetUserPeopleQuery({
    variables: {
      id: userId,
    },
  })
  const people = data?.getUser?.People as Person[]

  const PersonItem = ({ person }: { person: Person }) => {
    if (!person.is_trash) return null

    const fields: Field[] = [
      { name: 'Name', value: person.name || '' },
      { name: 'Department', value: person.department || '' },
      { name: 'Position', value: person.position || '' },
      { name: 'Email', value: person.email || '' },
      { name: 'Tell', value: person.tell || '' },
    ]

    return (
      <TrashItem
        id={person.id}
        name={person.name as string}
        fields={fields}
        category="people"
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
        {people?.map((person: Person) => (
          <div key={person.id}>
            <PersonItem person={person} />
          </div>
        ))}
      </div>
    </TrashContentWrapper>
  )
}
