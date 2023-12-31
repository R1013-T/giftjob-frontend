import { useRouter } from 'next/navigation'

import TrashAlert from '@/components/common/alert/Trash'
import { Button } from '@/components/ui/button'
import { toast } from '@/components/ui/use-toast'
import type { Person } from '@/lib/gql/graphql'
import { GetCompanyDocument, useUpdatePersonMutation } from '@/lib/gql/graphql'

const ItemField = ({ label, value }: { label: string; value: string }) => {
  return (
    <div className="mb-1.5 w-full overflow-x-auto hide-scrollbar">
      <p className="text-xs -mb-0.5 opacity-80">{label}</p>
      <p className="text-base h-6 overflow-y-auto">{value}</p>
    </div>
  )
}

export default function PeopleItem({ person }: { person: Person }) {
  const router = useRouter()

  const [updatePerson] = useUpdatePersonMutation({
    refetchQueries: [
      {
        query: GetCompanyDocument,
        variables: { id: person.id },
      },
    ],
  })

  const handelTrash = async () => {
    await updatePerson({
      variables: {
        input: {
          id: person.id,
          is_trash: true,
        },
      },
    })
    toast({
      title: 'Person moved to trash.',
      description: `${person.name} has been moved to trash.`,
    })
  }

  if (person.is_trash) return

  return (
    <div className="border relative rounded-md bg-card p-2.5 text-character">
      <div className="absolute right-3 top-3">
        <TrashAlert trashName={person.name || 'Person'} onClick={handelTrash} />
      </div>
      <div>
        <p className="h-8 text-xl font-medium tracking-wide overflow-x-auto hide-scrollbar">
          {person.name}
        </p>
        <ItemField label="Department" value={person.department || ''} />
        <ItemField label="Position" value={person.position || ''} />
        <ItemField label="Email" value={person.email || ''} />
        <ItemField label="Tell" value={person.tell || ''} />
        <div className="mb-1.5 w-full overflow-x-auto hide-scrollbar">
          <p className="text-xs -mb-0.5 opacity-80">Memo</p>
          <p className="text-base h-16 overflow-y-auto">{person.memo}</p>
        </div>
      </div>
      <Button
        className="w-full text-sm tracking-widest mt-2"
        onClick={() => router.push(`./people/${person.id}`)}
      >
        View More
      </Button>
    </div>
  )
}
