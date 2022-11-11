import { useState } from 'react'
import toast from 'react-hot-toast'
import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/router'

import { postRegisterUser } from '../helpers/user-auth/postRegisterUser'

const useSignUpForm = () => {
  const router = useRouter()
  const mutation = useMutation(postRegisterUser, {
    onSuccess: async () => {
      toast.success('Account successfully created, please check your email')
      router.push('/')
    },

    onError: async (data) => {
      toast.error(data.response.data.error.message)
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
      toast.error('Passwords do not match')
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
