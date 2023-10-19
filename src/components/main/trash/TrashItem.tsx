import { useRouter } from 'next/navigation'

import { Button } from '@/components/ui/button'
import type { Field } from '@/types/common'

type Props = {
  id: string
  category: 'company' | 'people' | 'note',
  name: string,
  fields: Field[],
  onDelete: () => void,
}

export default function TrashItem(props: Props) {
  const router = useRouter()

  return (
    <div
      className='text-character bg-card border p-2 rounded cursor-pointer hover:border-gray-300'
    >
      <div onClick={() => router.push(`/main/${props.category}/${props.id}`)}>
        <div className='text-base font-medium'>{props.name}</div>
        {props.fields.map((field, index) => (
          <div key={index} className='text-sm pl-0.5'>
            <p>
              <span className='opacity-80 text-xs block'>{field.name}</span>
              {field.value}
            </p>
          </div>
        ))}
      </div>
      <Button className='bg-red-400 hover:bg-red-500 w-full mt-2 mb-1 tracking-wider' onClick={props.onDelete}>Delete</Button>
    </div>
  )
}