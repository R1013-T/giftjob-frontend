import LoadItem from '@/components/main/company/view/load/LoadItem'
import { Skeleton } from '@/components/ui/skeleton'

export default function CompanyDetailLoad() {
  return (
    <div className="mt-8 p-2">
      <div className="flex justify-between">
        <Skeleton className="w-1/3 h-8 bg-gray-300" />
        <Skeleton className="w-1/3 h-8 bg-gray-300" />
      </div>
      <div className="flex flex-col gap-1 mt-6">
        <Skeleton className="w-1/4 h-6 bg-gray-300 mb-4 ml-2" />
        <div className="ml-3">
          <Skeleton className="w-1/6 h-4 bg-gray-300 mb-1" />
          <Skeleton className="w-2/6 h-6 bg-gray-300 mb-3" />
          <Skeleton className="w-1/6 h-4 bg-gray-300 mb-1" />
          <Skeleton className="w-4/6 h-6 bg-gray-300 mb-3" />
          <Skeleton className="w-1/6 h-4 bg-gray-300 mb-1" />
          <Skeleton className="w-2/6 h-6 bg-gray-300 mb-3" />
          <Skeleton className="w-1/6 h-4 bg-gray-300 mb-1" />
          <Skeleton className="w-5/6 h-6 bg-gray-300 mb-3" />
          <Skeleton className="w-1/6 h-4 bg-gray-300 mb-1" />
          <Skeleton className="w-2/6 h-6 bg-gray-300 mb-3" />
          <Skeleton className="w-1/6 h-4 bg-gray-300 mb-1" />
          <Skeleton className="w-3/6 h-6 bg-gray-300 mb-3" />
        </div>
      </div>
    </div>
  )
}
