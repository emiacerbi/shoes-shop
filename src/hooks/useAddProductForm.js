import { useContext, useState } from 'react'
import { useMutation } from '@tanstack/react-query'
import { UserContext } from 'context/UserContext'
import { postProduct } from 'helpers/products/postProduct'

const useAddProductForm = () => {
  const context = useContext(UserContext)

  const userId = context?.user.userInfo?.id

  const [inputInfo, setInputInfo] = useState({
    productName: '',
    category: '',
    gender: '',
    brand: '',
    description: '',
    size: '',
    img: ''
  })

  const mutation = useMutation({
    mutationFn: postProduct,
    onSuccess: (data) => {
      console.log(data)
    }
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
    const { productName, category, gender, brand, description, size } = inputInfo

    // Hardcoded shoe, should change
    e.preventDefault()
    mutation.mutate({
      name: productName,
      images: ['img1'],
      categories: [category],
      description,
      brand,
      size,
      gender,
      price: 2000,
      userId
    })
  }

  return {
    inputInfo, setInputInfo, handleInputChange, handleSubmit
  }
}

export default useAddProductForm
