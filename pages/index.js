import Link from 'next/link'
import SideBarItem from '../src/components/SideBarItem/SideBarItem'

export default function Home () {
  return (
    <>
      <h1>Links to other pages</h1>
      <Link href='/forgot-password'>
        <a style={{ color: 'black' }}>Forgot Password</a>
      </Link>
      <br/>
      <Link href='/reset-password'>
        <a style={{ color: 'black' }}>Reset Password</a>
      </Link>
      <br/>
      <Link href='/home'>
        <a style={{ color: 'black' }}>Home</a>
      </Link>
      <br />
      <Link href="/error404">
        <a style={{ color: 'black' }}>Error 404</a>
      </Link>
      <SideBarItem name='Wishlist' notifNumber={41} icon='./element-plus.svg'/>
    </>
  )
}
