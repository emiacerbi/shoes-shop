import { useContext, useState } from 'react'
import toast from 'react-hot-toast'
import { useMutation } from '@tanstack/react-query'
import { UserContext } from 'context/UserContext'
import { postFiles } from 'helpers/products/postFiles'
import { postProduct } from 'helpers/products/postProduct'

const useAddProductForm = () => {
  const context = useContext(UserContext)

  const userID = context?.user.userInfo?.id

  const [isLoading, setIsLoading] = useState(false)

  const [inputInfo, setInputInfo] = useState({
    productName: '',
    category: '',
    gender: '',
    brand: '',
    description: '',
    size: '',
    img: '',
    color: ''
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

  const handleInputImg = (e) => {
    const focus = e.target
    setInputInfo({
      ...inputInfo,
      img: focus.files[0]
    })
  }

  const handleSubmit = async (e) => {
    setIsLoading(true)
    const {
      productName,
      category,
      gender,
      brand,
      description,
      size,
      img,
      color
    } = inputInfo

    e.preventDefault()

    postFiles({ img })
      .then((data) => {
        const IMAGE_ID = data[0].id
        postProduct({
          name: productName,
          images: [IMAGE_ID],
          categories: [category],
          description,
          brand,
          color,
          size,
          gender,
          price: 39624,
          userID
        })
        toast.success('Product added succesfully !!')
      })
      .catch((err) => {
        toast.error(
          'There was an error uploading the product. Try again later.'
        )
        console.log(err)
        setIsLoading(false)
      })
    setIsLoading(false)
  }

  return {
    inputInfo,
    setInputInfo,
    handleInputChange,
    handleSubmit,
    handleInputImg,
    isLoading
  }
}

export default useAddProductForm
