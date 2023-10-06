import { StarIcon, TrashIcon } from '@heroicons/react/24/outline'
import { StarIcon as StarIconFill } from '@heroicons/react/24/solid'

import TrashAlert from '@/components/common/alert/Trash'
import { Button } from '@/components/ui/button'
import type { Company } from '@/lib/gql/graphql'

type Props = {
  company: Company
}

const ItemField = ({ label, value }: { label: string; value: string }) => {
  return (
    <div className="mb-1.5 w-full overflow-x-auto hide-scrollbar">
      <p className="text-xs -mb-0.5 opacity-80">{label}</p>
      <p className="text-base">{value}</p>
    </div>
  )
}

const CompanyItem: React.FC<Props> = ({ company }) => {
  return (
    <div className="border relative rounded-md bg-card p-2.5 text-character">
      <div className="flex gap-2 absolute right-3 top-3">
        {company.is_pinned ? (
          <StarIconFill className="w-5 h-5 text-yellow-400 cursor-pointer" />
        ) : (
          <StarIcon className="w-5 h-5 hover:text-yellow-400 cursor-pointer" />
        )}
        <TrashAlert
          trashName={company.name || 'Company'}
          onClick={() => console.log('trash')}
        />
      </div>
      <p className="text-xl font-medium mb-2 tracking-wide w-full overflow-x-auto hide-scrollbar">
        {company.name}
      </p>
      <ItemField label="Email" value={company.email || ''} />
      <ItemField label="Tell" value={company.tell || ''} />
      <ItemField label="Address" value={company.address || ''} />
      <ItemField label="Industry" value={company.industry || ''} />
      <ItemField
        label="Employees number"
        value={company.employees_number?.toString() || ''}
      />
      <ItemField label="Site url" value={company.site_url || ''} />
      <Button
        className="w-full text-sm tracking-widest mt-2"
        onClick={() => console.log('Company', company)}
      >
        View more
      </Button>
    </div>
  )
}

export default CompanyItem
