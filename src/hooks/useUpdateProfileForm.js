import { useState } from 'react'
import toast from 'react-hot-toast'
import { updateUserProfile } from 'helpers/user-auth/updateUserProfile'
import { useRouter } from 'next/router'

const useUpdateProfileForm = () => {
  const router = useRouter()
  const [inputInfo, setInputInfo] = useState({
    username: '',
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    phoneNumber: '',
    id: ''
  })

  const handleInputChange = (e) => {
    const focus = e.target
    const value = focus.value
    const name = focus.name

    setInputInfo({
      ...inputInfo,
      [name]: value
    })
  }

  const handleSubmit = async (e) => {
    const { username, email, password, firstName, lastName, phoneNumber, id } =
      inputInfo

    e.preventDefault()

    toast
      .promise(
        updateUserProfile({
          username,
          email,
          password,
          phoneNumber,
          firstName,
          lastName,
          id
        }),
        {
          loading: 'Saving...',
          success: 'Profile data changed succesfully!',
          error: 'Could not save. Try again later, please.'
        }
      )
      .then(() => router.reload())
  }

  return {
    inputInfo,
    setInputInfo,
    handleInputChange,
    handleSubmit
  }
}

export default useUpdateProfileForm
