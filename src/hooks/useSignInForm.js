import { useState } from 'react'

import { signIn } from 'next-auth/react'
import toast from 'react-hot-toast'
import { useRouter } from 'next/router'

const useSignInForm = () => {
  const router = useRouter()

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

    signIn('credentials', {
      identifier: inputInfo.email,
      password: inputInfo.password,
      redirect: false
    })
      .then(res => {
        if (!res.ok) {
          toast.error('Wrong credentials')
        }

        if (res.ok) {
          router.push('/home')
        }
      })
  }

  return {
    inputInfo, setInputInfo, handleInputChange, handleSubmit
  }
}

export default useSignInForm
