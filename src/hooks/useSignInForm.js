import { useState } from 'react'
import toast from 'react-hot-toast'
import { useRouter } from 'next/router'
import { signIn } from 'next-auth/react'

const useSignInForm = () => {
  const router = useRouter()

  const [isLoading, setIsLoading] = useState(false)

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
    setIsLoading(true)
    event.preventDefault()

    signIn('credentials', {
      identifier: inputInfo.email,
      password: inputInfo.password,
      redirect: false
    }).then(res => {
      if (res.ok) {
        toast.success('Logged in succesfully')
        setIsLoading(false)
        router.push('/home')
      }

      if (!res.ok) {
        toast.error('Wrong credentials')
        setIsLoading(false)
      }
    })
  }

  return {
    inputInfo, setInputInfo, handleInputChange, handleSubmit, isLoading
  }
}

export default useSignInForm
