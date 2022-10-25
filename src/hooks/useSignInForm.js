import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/router'
import { useContext, useState } from 'react'
import { UserContext } from '../context/UserContext'
import { postLoginUser } from '../helpers/user-auth/postLoginUser'

const useSignInForm = () => {
  const { user, setUser } = useContext(UserContext)

  const router = useRouter()

  const mutation = useMutation(postLoginUser, {
    onSuccess: (response) => {
      sessionStorage.setItem('userToken', response.jwt)
      setUser({
        ...user,
        token: response.jwt
      })

      router.push('/home')
    }

  })

  console.log(user)
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
