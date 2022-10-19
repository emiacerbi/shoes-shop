import Form from '../components/Form'
import PrimaryButton from '../components/PrimaryButton'
import PrimaryInput from '../components/PrimaryInput'

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
