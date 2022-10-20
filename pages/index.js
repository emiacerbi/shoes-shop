import Link from 'next/link'

export default function Home () {
  return (

    <Link href="/forgot-password">
      <a style={{ color: 'black' }}>Forgot Password</a>
    </Link>

  // <div>
  //   <Heading headingText='Probando...' />
  //   <StyledText text='Probando...' />
  //   <Form onSubmit={(e) => e.preventDefault()||console.log('submit done')}>
  //     <PrimaryInput label='Password' placeholder='at least 8 characters' />
  //     <PrimaryInput label='Confirm Password' placeholder='at least 8 characters' />
  //     <PrimaryButton>
  //       Reset Password
  //     </PrimaryButton>
  //   </Form>

  // </div>
  )
}
