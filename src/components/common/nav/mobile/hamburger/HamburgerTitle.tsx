import Image from 'next/image'

const HamburgerTitle = () => {
  return (
    <div className="flex justify-between items-end flex-wrap">
      <Image
        src="https://raw.githubusercontent.com/R1013-T/giftjob-frontend/fe5d2e1f7c3ddb0234ba345d102e012619b342f7/public/giftjob_logo.svg"
        alt="giftjob"
        width={220}
        height={100}
      />
      <p className="text-sm text-character font-normal">v 1.0</p>
    </div>
  )
}

export default HamburgerTitle
