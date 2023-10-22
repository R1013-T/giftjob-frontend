'use client'

import { StarIcon } from '@heroicons/react/24/outline'
import { StarIcon as StarIconFill } from '@heroicons/react/24/solid'
import { Circle } from 'lucide-react'

import BackButton from '@/components/common/button/BackButton'
import DetailController from '@/components/common/controller/DetailController'
import CompanyDetailLoad from '@/components/main/company/view/load/detail/Load'
import MainContentWrapper from '@/components/main/MainContentWrapper'
import PersonDetailModal from '@/components/main/people/modal/detail/DetailModal'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'
import { toast } from '@/components/ui/use-toast'
import {
  GetCompanyDocument,
  useGetPersonQuery,
  useUpdateCompanyMutation,
  useUpdatePersonMutation,
} from '@/lib/gql/graphql'
import convertToJST from '@/utils/common/convertToJst'
import formatCapitalizedWords from '@/utils/common/formatCapitalizedWords'

export default function PersonDetailCompanyDetail({
  params,
}: {
  params: { personId: string }
}) {
  const { data, loading, error } = useGetPersonQuery({
    variables: {
      id: params.personId,
    },
  })
  const person = data?.getPerson

  const [updatePerson] = useUpdatePersonMutation({
    refetchQueries: [
      {
        query: GetCompanyDocument,
        variables: { id: person?.id },
      },
    ],
  })

  if (loading) return <CompanyDetailLoad />
  if (error) return <p>Error:{error.message}</p>
  if (!person) return <p>No data</p>

  const Field = ({ label, value }: { label: string; value: string }) => {
    return (
      <div>
        <p className="text-sm opacity-80">{label}</p>
        <p className="mb-2 text-title min-h-[13px] text-base">{value}</p>
      </div>
    )
  }

  return (
    <MainContentWrapper>
      <DetailController />
      <PersonDetailModal
        trashName={person.name || 'Person'}
        trashAction={() =>
          updatePerson({
            variables: {
              input: {
                id: person.id,
                is_trash: true,
              },
            },
          })
        }
      />
      <BackButton link="/main/people" />
      <div className="w-full flex flex-wrap-reverse justify-between items-center">
        {person.is_trash && (
          <Alert
            variant="destructive"
            className="bg-red-100 flex flex-wrap justify-between items-center gap-2"
          >
            <AlertDescription className="font-medium text-base">
              This company is trashed. If you want to restore it, please click
            </AlertDescription>
            <Button
              className="-my-1 tracking-wider"
              onClick={() =>
                updatePerson({
                  variables: {
                    input: {
                      id: person.id,
                      is_trash: false,
                    },
                  },
                })
              }
            >
              Restore
            </Button>
          </Alert>
        )}
        <div className="py-2 flex gap-2 items-center">
          <p className="text-title font-medium text-2xl">{person.name}</p>
        </div>
        <div className="flex">
          <div className="text-character text-xs flex flex-col gap-0.5 border-r pr-1.5 mr-1.5">
            <span className="scale-90 -ml-1.5 opacity-80">Created At</span>
            <p>{convertToJST(person.created_at)}</p>
          </div>
          <div className="text-character text-xs flex flex-col gap-0.5">
            <span className="scale-90 -ml-1.5 opacity-80">Updated At</span>
            <p>{convertToJST(person.updated_at)}</p>
          </div>
        </div>
      </div>
      <Field label="Department" value={person.department || ''} />
      <Field label="Position" value={person.position || ''} />
      <Field label="Email" value={person.email || ''} />
      <Field label="Tell" value={person.tell || ''} />
      <Field label="Memo" value={person.memo || ''} />
    </MainContentWrapper>
  )
}
