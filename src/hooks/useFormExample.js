import { useState } from 'react'

const useFormExample = () => {
  const [inputInfo, setInputInfo] = useState({
    username: '',
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

  return {
    inputInfo, setInputInfo, handleInputChange
  }
}

export default useFormExample

/*

Example use:

import useFormExample from '../hooks/useFormExample'

const FormExample = () => {
  const { inputInfo, handleInputChange } = useFormExample()

  console.log(inputInfo)

  return (
    <form>
      <input
        name='username'
        onChange={handleInputChange}
      />
      <input
        name='email'
        onChange={handleInputChange}
      />
      <input
        name='password'
        onChange={handleInputChange}
      />
    </form>
  )
}

export default FormExample

*/
