import Link from 'next/link'

export default function Home () {
  return (
    <>
      <h1>Links to other pages</h1>
      <Link href="/forgot-password">
        <a style={{ color: 'black' }}>Forgot Password</a>
      </Link>
      <br/>
      <Link href="/reset-password">
        <a style={{ color: 'black' }}>Reset Password</a>
      </Link>
      <br/>
      <Link href="/update-profile">
        <a style={{ color: 'black' }}>Update Profile</a>
      </Link>

    </>
  )
}
