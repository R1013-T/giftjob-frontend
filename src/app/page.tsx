import Header from '@/components/common/header/Header'

export default async function Home() {
  return (
    <main>
      <Header />
      <div className='w-full mt-20 grid place-items-center'>
        <p>Lorem ipsum dolor sit amet,</p>
        <p style={{
          fontFamily: 'sans-serif'
        }}>Lorem ipsum dolor sit amet,</p>
        <br />
        <p className='font-medium' >Lorem ipsum dolor sit amet,</p>
      </div>
    </main>
  )
}
