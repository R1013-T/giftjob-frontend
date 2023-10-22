'use client'

import { useToast } from '@/components/ui/use-toast'

export default function ComingSoon() {
  const { toast } = useToast()

  return (
    <div
      className="absolute top-0 right-0 z-30 opacity-80 bg-gray-400 w-full h-full flex flex-col items-center gap-3 justify-center p-5 text-center text-background"
      onClick={() =>
        toast({
          title: 'Coming Soon!',
          description:
            'This feature is currently under development and will be available in the future.',
        })
      }
    >
      <p className="text-xl font-bold tracking-widest">Coming Soon!</p>
      <p className="text-sm">
        This feature is currently under development and will be available in the
        future.
      </p>
    </div>
  )
}
