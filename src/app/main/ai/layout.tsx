import MainContentWrapper from '@/components/main/MainContentWrapper'

export default function AiLayout({ children }: { children: React.ReactNode }) {
  return (
    <MainContentWrapper>
      <div className="h-full overflow-hidden">{children}</div>
    </MainContentWrapper>
  )
}
