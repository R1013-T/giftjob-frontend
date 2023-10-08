'use client'

import { StarIcon } from '@heroicons/react/24/outline'
import { StarIcon as StarIconFill } from '@heroicons/react/24/solid'
import { InfoCircle } from 'tabler-icons-react'

import BackButton from '@/components/common/button/BackButton'
import DetailController from '@/components/common/controller/DetailController'
import CompanyDetailModal from '@/components/main/company/modal/detail/DetailModal'
import DetailAccordion from '@/components/main/company/view/detail/DetailAccordion'
import CompanyDetailLoad from '@/components/main/company/view/load/detail/Load'
import MainContentWrapper from '@/components/main/MainContentWrapper'
import type { Company } from '@/lib/gql/graphql'
import { useGetCompanyQuery } from '@/lib/gql/graphql'
import convertToJST from '@/utils/common/convertToJst'

export default function CompanyDetail({
  params,
}: {
  params: { companyId: string }
}) {
  const { data, loading, error } = useGetCompanyQuery({
    variables: {
      id: params.companyId,
    },
  })
  const company = data?.getCompany as Company

  const defaultValues = {
    name: company?.name,
    email: company?.email,
    tell: company?.tell,
    address: company?.address,
    industry: company?.industry,
    employees_number: company?.employees_number,
    site_url: company?.site_url,
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
        trashAction={() => console.log('trash')}
      />
      <DetailController />
      <BackButton link="/main/company" />
      <div className="w-full flex flex-wrap-reverse justify-between items-center">
        <div className="py-2 flex gap-2 items-center">
          <p className="text-title font-medium text-2xl">{company.name}</p>
          {company.is_pinned ? (
            <StarIconFill className="w-5 h-5 text-yellow-400 cursor-pointer" />
          ) : (
            <StarIcon className="w-5 h-5 hover:text-yellow-400 cursor-pointer" />
          )}
        </div>

        <div className="flex">
          <div className="text-character text-xs flex flex-col gap-0.5 border-r pr-1.5 mr-1.5">
            <span className="scale-90 -ml-1.5 opacity-80">Created At</span>
            <p>{convertToJST(company.created_at)}</p>
          </div>
          <div className="text-character text-xs flex flex-col gap-0.5">
            <span className="scale-90 -ml-1.5 opacity-80">Updated At</span>
            <p>{convertToJST(company.updated_at)}</p>
          </div>
        </div>
      </div>
      <div className="text-character">
        <DetailAccordion fields={defaultValues} icon={InfoCircle} />
        {/* カスタムフィールドを追加 */}
      </div>
    </MainContentWrapper>
  )
}
