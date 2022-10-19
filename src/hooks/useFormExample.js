import { useState } from 'react'

const useFormExample = () => {
  const [inputInfo, setInputInfo] = useState({
    username: '',
    email: '',
    first_name: '',
    last_name: '',
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

  return {
    inputInfo, setInputInfo, handleInputChange
  }
}

export default useFormExample
