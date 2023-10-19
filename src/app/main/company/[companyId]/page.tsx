'use client'

import { ExclamationCircleIcon, StarIcon } from '@heroicons/react/24/outline'
import { StarIcon as StarIconFill } from '@heroicons/react/24/solid'
import { Circle } from 'lucide-react'
import { InfoCircle } from 'tabler-icons-react'

import BackButton from '@/components/common/button/BackButton'
import DetailController from '@/components/common/controller/DetailController'
import CompanyDetailModal from '@/components/main/company/modal/detail/DetailModal'
import DetailAccordion from '@/components/main/company/view/detail/DetailAccordion'
import CompanyDetailLoad from '@/components/main/company/view/load/detail/Load'
import MainContentWrapper from '@/components/main/MainContentWrapper'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'
import { useToast } from '@/components/ui/use-toast'
import type { Company } from '@/lib/gql/graphql'
import { useGetCompanyQuery } from '@/lib/gql/graphql'
import convertToJST from '@/utils/common/convertToJst'

export default function CompanyDetail({
                                        params
                                      }: {
  params: { companyId: string }
}) {
  const { toast } = useToast()

  const { data, loading, error } = useGetCompanyQuery({
    variables: {
      id: params.companyId
    }
  })
  const company = data?.getCompany as Company

  const defaultValues = {
    name: company?.name,
    color: company?.color,
    email: company?.email,
    tell: company?.tell,
    address: company?.address,
    industry: company?.industry,
    employees_number: company?.employees_number,
    site_url: company?.site_url
  }

  {
    /* カスタムフィールドを追加 */
  }

  if (loading) return <CompanyDetailLoad />
  if (error) return <p>Error:{error.message}</p>
  if (!company) return <p>No data</p>

  return (
    <MainContentWrapper>
      <CompanyDetailModal
        trashName={company.name || ''}
        trashAction={() =>
          toast({
            title: 'Coming Soon!',
            description:
              'This feature is currently under development and will be available in the future.'
          })
        }
      />
      <DetailController />
      <BackButton link='/main/company' />
      <div className='w-full flex flex-wrap-reverse justify-between items-center'>
        {company.is_trash && (
          <Alert variant='destructive' className='bg-red-100 flex flex-wrap justify-between items-center gap-2'>
            <AlertDescription className='font-medium text-base'>
              This company is trashed. If you want to restore it, please click
            </AlertDescription>
            <Button className='-my-1 tracking-wider'>
              Restore
            </Button>
          </Alert>
        )}
        <div className='py-2 flex gap-2 items-center'>
          <div className='flex items-center gap-1.5'>
            <Circle
              style={{
                color: `var(--color-${company.color || ''})`
              }}
              className='w-6 h-6 fill-current'
            />
            <p className='text-title font-medium text-2xl'>{company.name}</p>
          </div>
          <div
            onClick={() =>
              toast({
                title: 'Coming Soon!',
                description:
                  'This feature is currently under development and will be available in the future.'
              })
            }
          >
            {company.is_pinned ? (
              <StarIconFill className='w-5 h-5 text-yellow-400 cursor-pointer' />
            ) : (
              <StarIcon className='w-5 h-5 hover:text-yellow-400 cursor-pointer' />
            )}
          </div>
        </div>

        <div className='flex'>
          <div className='text-character text-xs flex flex-col gap-0.5 border-r pr-1.5 mr-1.5'>
            <span className='scale-90 -ml-1.5 opacity-80'>Created At</span>
            <p>{convertToJST(company.created_at)}</p>
          </div>
          <div className='text-character text-xs flex flex-col gap-0.5'>
            <span className='scale-90 -ml-1.5 opacity-80'>Updated At</span>
            <p>{convertToJST(company.updated_at)}</p>
          </div>
        </div>
      </div>
      <div className='text-character'>
        <DetailAccordion fields={defaultValues} icon={InfoCircle} />
        {/* カスタムフィールドを追加 */}
      </div>
    </MainContentWrapper>
  )
}
