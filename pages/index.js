import Form from '../src/components/Form'
import PrimaryButton from '../src/components/PrimaryButton'
import PrimaryInput from '../src/components/PrimaryInput'
import Heading from '../src/components/Heading/heading'
import StyledText from '../src/components/StyledText/StyledText'
import ForgotPassword from './forgot-password'
import Link from 'next/link'

export default function Home () {
  return (

    <Link href="/forgot-password">
      <a style={{color:'black'}}>Forgot Password</a>
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
