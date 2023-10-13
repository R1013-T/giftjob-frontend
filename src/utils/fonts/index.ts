import localFont from 'next/font/local'

const monaSans = localFont({
  // src: './monaSans/MonaSans-Medium.woff2',
  src: './Mona-Sans.woff2',
  variable: "--font-mona-sans" ,
  display: 'swap',
})

export { monaSans }