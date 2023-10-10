import { StarIcon, TrashIcon } from '@heroicons/react/24/outline'
import { StarIcon as StarIconFill } from '@heroicons/react/24/solid'
import { Circle } from 'lucide-react'
import { useRouter } from 'next/navigation'

import TrashAlert from '@/components/common/alert/Trash'
import { Button } from '@/components/ui/button'
import { useToast } from '@/components/ui/use-toast'
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
  const router = useRouter()
  const { toast } = useToast()

  return (
    <div className="border relative rounded-md bg-card p-2.5 text-character">
      <div
        className="flex gap-2 absolute right-3 top-3"
        onClick={() =>
          toast({
            title: 'Coming Soon!',
            description:
              'This feature is currently under development and will be available in the future.',
          })
        }
      >
        {company.is_pinned ? (
          <StarIconFill className="w-5 h-5 text-yellow-400 cursor-pointer" />
        ) : (
          <StarIcon className="w-5 h-5 hover:text-yellow-400 cursor-pointer" />
        )}
        <TrashAlert
          trashName={company.name || 'Company'}
          onClick={() =>
            toast({
              title: 'Coming Soon!',
              description:
                'This feature is currently under development and will be available in the future.',
            })
          }
        />
      </div>
      <div className="flex gap-1 items-center mb-2">
        <Circle
          style={{
            color: `var(--color-${company.color || ''})`,
          }}
          className="w-5 h-5 fill-current"
        />
        <p className="text-xl font-medium tracking-wide overflow-x-auto hide-scrollbar">
          {company.name}
        </p>
      </div>
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
        onClick={() => router.push(`./company/${company.id}`)}
      >
        View More
      </Button>
    </div>
  )
}

export default CompanyItem
