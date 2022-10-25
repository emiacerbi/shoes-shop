import { useMutation } from '@tanstack/react-query'
import { useState } from 'react'
import { postRegisterUser } from '../helpers/user-auth/postRegisterUser'

const useSignUpForm = () => {
  const mutation = useMutation(postRegisterUser, {
    onSuccess: () => {
      console.log(mutation)
    }
  })

  const [inputInfo, setInputInfo] = useState({
    name: '',
    email: '',
    password: '',
    repeatedPassword: ''
  })

  const handleInputChange = (event) => {
    const target = event.target
    const value = target.value
    const name = target.name

    setInputInfo({
      ...inputInfo,
      [name]: value
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (inputInfo.password !== inputInfo.repeatedPassword) {
      alert('Passwords do not match')
      return
    }

    mutation.mutate({
      username: inputInfo.name,
      email: inputInfo.email,
      password: inputInfo.password
    })
  }

  return {
    inputInfo, setInputInfo, handleInputChange, handleSubmit
  }
}

export default useSignUpForm
