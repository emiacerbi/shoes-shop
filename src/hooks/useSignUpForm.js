import { useState } from 'react'
import toast from 'react-hot-toast'
import { useMutation } from '@tanstack/react-query'

import { postRegisterUser } from '../helpers/user-auth/postRegisterUser'

const useSignUpForm = () => {
  const mutation = useMutation(postRegisterUser, {
    onSuccess: async (data) => {
      const response = await data.json()

      if (response.user) {
        toast.success('Account successfully created, please check your email')
        return
      }

      if (response.error.message.length > 40) {
        toast.error('There was an issue')
        return
      }

      if (response.error.message) {
        toast.error(response.error.message)
      }
    }
  })

  const [isPasswordIncorrect, setisPasswordIncorrect] = useState(false)

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

  const handleSubmit = (event) => {
    event.preventDefault()

    if (inputInfo.password !== inputInfo.repeatedPassword) {
      alert('Passwords do not match')
      return
    }

    if (inputInfo.password.length < 8) {
      setisPasswordIncorrect(true)
      return
    } else {
      setisPasswordIncorrect(false)
    }

    mutation.mutate({
      username: inputInfo.name,
      email: inputInfo.email,
      password: inputInfo.password
    })
  }

  return {
    inputInfo, setInputInfo, handleInputChange, handleSubmit, isPasswordIncorrect, mutation
  }
}

export default useSignUpForm
