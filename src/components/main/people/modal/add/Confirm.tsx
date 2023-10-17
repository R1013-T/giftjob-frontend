import {
  ArrowLeftIcon,
  ExclamationCircleIcon,
} from '@heroicons/react/24/outline'
import { useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'
import { Loader } from 'tabler-icons-react'

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'
import { toast } from '@/components/ui/use-toast'
import type { Person } from '@/lib/gql/graphql'
import {
  GetUserPeopleDocument,
  useCreatePersonMutation,
} from '@/lib/gql/graphql'
import type { SessionUser } from '@/types/session'
import formatCapitalizedWords from '@/utils/common/formatCapitalizedWords'

type Props = {
  inputValues: Person | undefined
  setAddState: (addState: string) => void
  setIsOpen: (isOpen: boolean) => void
}

export default function AddPersonConfirm(props: Props) {
  const { data: session, status }: any = useSession()
  const sessionUser = session?.sessionUser as SessionUser
  const [createPerson, { data, loading, error }] = useCreatePersonMutation({
    refetchQueries: [
      {
        query: GetUserPeopleDocument,
        variables: { id: sessionUser?.id },
      },
    ],
  })

  const [AlertMessage, setAlertMessage] = useState('')

  const handleCreatePerson = async () => {
    await createPerson({
      variables: {
        input: {
          ...props.inputValues,
          user_id: sessionUser?.id,
        },
      },
    }).then((res) => {
      if (!res.data) return
      toast({
        title: 'Person created successfully 🎉',
        description: `Person ${res.data.createPerson?.name} has been created successfully!`,
      })
      props.setIsOpen(false)
    })
  }

  useEffect(() => {
    if (error?.message) {
      setAlertMessage(error.message)
    } else {
      setAlertMessage('')
    }
  }, [error])

  return (
    <div>
      {AlertMessage && (
        <Alert variant="destructive" className="bg-red-100 mb-3">
          <ExclamationCircleIcon className="h-5 w-5" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{AlertMessage}</AlertDescription>
        </Alert>
      )}
      <div className="max-h-70 px-1 overflow-y-auto text-left">
        {Object.entries(props.inputValues as Person).map(
          ([key, value], index) => (
            <div key={index} className="mt-2 px-1">
              {key == 'company_id' ? null : (
                <>
                  {value === '' ? null : (
                    <>
                      <p className="opacity-80">
                        {formatCapitalizedWords(key)}
                      </p>
                      <p className="mb-2 text-title text-base font-medium">
                        {value}
                      </p>
                    </>
                  )}
                </>
              )}
            </div>
          )
        )}
      </div>
      <div className={loading ? 'opacity-50' : ''}>
        <Button
          className="w-full mb-3 tracking-widest"
          onClick={handleCreatePerson}
        >
          {loading ? (
            <div className="flex items-center justify-center gap-2">
              <Loader className="animate-spin" size={18} strokeWidth={2} />
              <p className="font-normal">Creating...</p>
            </div>
          ) : (
            'Create Company'
          )}
        </Button>
        <div
          className="flex items-center justify-center cursor-pointer hover:underline"
          onClick={() => {
            !loading && props.setAddState('form')
          }}
        >
          <ArrowLeftIcon className="w-4 h-4" />
          <p className="ml-1 mr-5">Back</p>
        </div>
      </div>
    </div>
  )
}
