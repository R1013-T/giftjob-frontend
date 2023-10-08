import LoadItem from '@/components/main/company/view/load/LoadItem'

export default function CompanyLoad() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
      <LoadItem />
      <LoadItem />
      <LoadItem />
      <LoadItem />
    </div>
  )
}
