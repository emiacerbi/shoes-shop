import { useState } from 'react'

const useAddProductForm = () => {
  const [inputInfo, setInputInfo] = useState({
    productName: '',
    category: '',
    Gender: '',
    Brand: '',
    Description: '',
    Size: '',
    Img: ''
  })

  const handleInputChange = (e) => {
    const focus = e.target
    const value = focus.value
    const name = focus.name

    setInputInfo({
      ...inputInfo,
      [name]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return {
    inputInfo, setInputInfo, handleInputChange, handleSubmit
  }
}

export default useAddProductForm
