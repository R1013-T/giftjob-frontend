import Image from 'next/image'
import Link from 'next/link'

export default function NotFound() {
  return (
    <Link
      href="/main"
      className="h-dvh w-full bg-white overflow-hidden flex flex-col gap-10 justify-center items-center"
    >
      <Image
        src="/giftjob_logo.png"
        alt="giftjob"
        className="mb-20"
        width={150}
        height={100}
      />
      <div className="h-80 w-80 bg-notFound bg-center bg-cover"></div>
      <div className="mb-32 text-center text-character">
        <p>Could not find requested resource</p>
        Return Home
      </div>
    </Link>
  )
}
