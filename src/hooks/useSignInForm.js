// import { useMutation } from '@tanstack/react-query'
import { useState } from 'react'
// import { postLoginUser } from '../helpers/user-auth/postLoginUser'

import { signIn } from 'next-auth/react'

const useSignInForm = () => {
  // const { user, setUser } = useContext(UserContext)

  // const mutation = useMutation(postLoginUser, {
  //   onSuccess: (response) => {
  //     sessionStorage.setItem('userToken', response.jwt)
  //     setUser({
  //       ...user,
  //       token: response.jwt
  //     })
  //   }

  // })

  const [isPasswordIncorrect, setisPasswordIncorrect] = useState(false)

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

    if (inputInfo.password.length < 8) {
      setisPasswordIncorrect(true)
    } else {
      setisPasswordIncorrect(false)
    }

    await signIn('credentials', {
      identifier: inputInfo.email,
      password: inputInfo.password,
      redirect: false
    })
  }

  return {
    inputInfo, setInputInfo, handleInputChange, handleSubmit, isPasswordIncorrect
  }
}

export default useSignInForm
