export default function PcControllerWrapper({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="fixed z-20 right-2 top-2 flex gap-1.5  items-center">
      {children}
    </div>
  )
}
