import { useState } from 'react'
import toast from 'react-hot-toast'
import { updateUserProfile } from 'helpers/user-auth/updateUserProfile'

const useUpdateProfileForm = () => {
  const [inputInfo, setInputInfo] = useState({
    username: '',
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    phoneNumber: ''
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
    const { username, email, password, firstName, lastName, phoneNumber } =
      inputInfo

    e.preventDefault()

    toast.promise(
      updateUserProfile({
        username,
        email,
        password,
        firstName,
        lastName,
        phoneNumber
      }),
      {
        loading: 'Saving...',
        success: 'Avatar photo changed succesfully!',
        error: 'Could not save. Try again later, please.'
      }
    )
  }

  return {
    inputInfo,
    setInputInfo,
    handleInputChange,
    handleSubmit
  }
}

export default useUpdateProfileForm
