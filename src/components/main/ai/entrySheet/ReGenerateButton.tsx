import { ArrowPathIcon, PlusIcon } from '@heroicons/react/24/solid'

export default function ReGenerateButton({ onClick }: { onClick: () => void }) {
  return (
    <div
      className="fixed top-1.5 right-1.5 z-30 text-white flex gap-1 py-1.5 px-2.5 rounded bg-primary tracking-wider cursor-pointer"
      onClick={onClick}
    >
      <PlusIcon className="h-6 w-6" />
      <p>New Generate</p>
    </div>
  )
}
