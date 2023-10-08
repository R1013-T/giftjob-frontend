export default function MobileControllerWrapper({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="fixed z-20 shadow-xl bottom-20 right-2 flex flex-col gap-y-1.5 border bg-card rounded-full text-character p-1">
      {children}
    </div>
  )
}
