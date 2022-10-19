import Form from '../src/components/Form'
import PrimaryButton from '../src/components/PrimaryButton'
import PrimaryInput from '../src/components/PrimaryInput'

export default function Home () {
  return (
    <div>
      <h1>Solvd!</h1>

      <Form onSubmit={(e) => e.preventDefault()}>
        <PrimaryInput label='Password' placeholder='at least 8 characters' />
        <PrimaryInput label='Confirm Password' placeholder='at least 8 characters' />
        <PrimaryButton>
          Reset Password
        </PrimaryButton>
      </Form>

    </div>
  )
}
