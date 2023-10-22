import Image from 'next/image'

const HamburgerTitle = () => {
  return (
    <div className="flex justify-between items-end flex-wrap">
      <Image src="/giftjob_logo.png" alt="giftjob" width={220} height={100} />
      <p className="text-sm text-character font-normal">v 1.0</p>
    </div>
  )
}

export default HamburgerTitle
