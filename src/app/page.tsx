import Link from 'next/link'

import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <main>
      <h1>GiftJob Landing Page</h1>
      <Link className="m-10" href="./main">
        link
      </Link>
    </main>
  )
}
