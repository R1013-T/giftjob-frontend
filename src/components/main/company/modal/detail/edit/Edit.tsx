import { XMarkIcon } from '@heroicons/react/24/outline'
import { usePathname, useRouter } from 'next/navigation'

import CompanyEditInner from '@/components/main/company/modal/detail/edit/EditInner'
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog'
import type { Company } from '@/lib/gql/graphql'
import { useGetCompanyQuery } from '@/lib/gql/graphql'

type Props = {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

export default function CompanyDetailEditModal(props: Props) {
  const router = useRouter()
  const pathname = usePathname()
  const companyId = pathname.split('/').pop()

  const { data, loading, error } = useGetCompanyQuery({
    variables: {
      id: companyId || '',
    },
  })
  const company = data?.getCompany as Company

  return (
    <AlertDialog open={props.isOpen} onOpenChange={props.setIsOpen}>
      <AlertDialogContent onCloseAutoFocus={() => router.back()}>
        <AlertDialogCancel
          className="absolute top-4 right-6 text-character p-0.5 bg-card border h-auto"
          onClick={() => {
            router.back()
          }}
        >
          <XMarkIcon className="w-6 h-6" />
        </AlertDialogCancel>
        <AlertDialogTitle>Edit Company</AlertDialogTitle>
        <AlertDialogDescription>
          {loading && <p>Loading...</p>}
          {error && <p>Error:{error.message}</p>}
          {company && (
            <CompanyEditInner company={company} setIsOpen={props.setIsOpen} />
          )}
        </AlertDialogDescription>
      </AlertDialogContent>
    </AlertDialog>
  )
}
