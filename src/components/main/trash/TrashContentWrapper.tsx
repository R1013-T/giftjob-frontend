import { Card, CardContent } from '@/components/ui/card'

export default function TrashContentWrapper({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Card className="border-none">
      <CardContent className="h-TabPageContent overflow-y-scroll p-1 pb-16 bg-muted">
        {children}
      </CardContent>
    </Card>
  )
}
