import { useMutation } from '@tanstack/react-query'
import { useState } from 'react'
import { postLoginUser } from '../helpers/user-auth/postLoginUser'

const useSignInForm = () => {
  const mutation = useMutation(postLoginUser, {
    onSuccess: () => {
      console.log(mutation)
    }
  })

  const [inputInfo, setInputInfo] = useState({
    email: '',
    password: ''
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
    mutation.mutate({
      identifier: inputInfo.email,
      password: inputInfo.password
    })
  }

  return {
    inputInfo, setInputInfo, handleInputChange, handleSubmit
  }
}

export default useSignInForm
