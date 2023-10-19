import { Card, CardContent} from '@/components/ui/card'

export default function TrashContentWrapper({ children }: { children: React.ReactNode}) {
  return (
    <Card>
      <CardContent className='h-TabPageContent overflow-y-scroll p-3 pb-16 bg-background'>
        {children}
      </CardContent>
    </Card>
  )
}