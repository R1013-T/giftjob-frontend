import { Button } from '@/components/ui/button'
import { Skeleton } from '@/components/ui/skeleton'

const Field = () => {
  return (
    <div>
      <Skeleton className="h-3 w-1/6 bg-gray-300 mb-1.5" />
      <Skeleton className="h-5 w-5/6 bg-gray-300" />
    </div>
  )
}

const LoadItem = () => {
  return (
    <div className="border rounded-md bg-card p-2.5 flex flex-col gap-3">
      <Skeleton className="h-8 w-full bg-gray-300 mb-1.5" />
      <Field />
      <Field />
      <Field />
      <Field />
      <Field />
      <Skeleton className="h-8 w-full bg-gray-300 mb-1.5" />
    </div>
  )
}

export default LoadItem
