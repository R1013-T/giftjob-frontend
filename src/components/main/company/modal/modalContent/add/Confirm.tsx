import { useMutation } from '@apollo/client'
import {
  ArrowLeftIcon,
  ExclamationCircleIcon,
} from '@heroicons/react/24/outline'
import { useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'
import { InfoCircle, Loader } from 'tabler-icons-react'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'
import { toast } from '@/components/ui/use-toast'
import type { CompanyDefaultInfo } from '@/types/company'
import type { SessionUser } from '@/types/session'
import formatCapitalizedWords from '@/utils/common/formatCapitalizedWords'
import { CREATE_COMPANY } from '@/utils/graph/mutations'

type Props = {
  setAddState: (addState: string) => void
  defaultCompanyInfo: CompanyDefaultInfo
  setIsOpen: (isOpen: boolean) => void
}

export default function Confirm(props: Props) {
  const { data: session, status }: any = useSession()
  const sessionUser = session?.sessionUser as SessionUser
  const [createCompany, { data, loading, error }] = useMutation(CREATE_COMPANY)

  const [AlertMessage, setAlertMessage] = useState('')

  const handleCreateCompany = async () => {
    await createCompany({
      variables: {
        input: {
          ...props.defaultCompanyInfo,
          user_id: sessionUser?.id,
        },
      },
    }).then((res) => {
      if (!res.data) return
      toast({
        title: 'Company created successfully 🎉',
        description: `Company ${res.data.createCompany.name} has been created successfully!`,
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
        <Accordion type="single" defaultValue="general" collapsible>
          <AccordionItem value="general">
            <AccordionTrigger>
              <div className="flex justify-start items-center gap-2 text-primary">
                <InfoCircle
                  size={27}
                  strokeWidth={2}
                  className="bg-primary/10 rounded-md p-1"
                />
                <p>General Information</p>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="px-2">
                {Object.entries(props.defaultCompanyInfo).map(
                  ([key, value]) => (
                    <div key={key}>
                      <p>{formatCapitalizedWords(key)}</p>
                      <p className="mb-2 text-title text-base">{value}</p>
                    </div>
                  )
                )}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <div className={loading ? 'opacity-50' : ''}>
        <Button
          className="w-full mb-3 tracking-widest"
          onClick={handleCreateCompany}
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
            !loading && props.setAddState('inputFields')
          }}
        >
          <ArrowLeftIcon className="w-4 h-4" />
          <p className="ml-1 mr-5">Back</p>
        </div>
      </div>
    </div>
  )
}
