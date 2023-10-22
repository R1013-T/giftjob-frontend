export default function MainContentWrapper({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <article className="p-3 relative h-MainContent overflow-y-auto pb-24 lg:pb-3">
      {children}
    </article>
  )
}
