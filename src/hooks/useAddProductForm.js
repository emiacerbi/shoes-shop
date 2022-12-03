import { useContext, useState } from 'react'
import toast from 'react-hot-toast'
import { UserContext } from 'context/UserContext'
import { postFiles } from 'helpers/products/postFiles'
import { postProduct } from 'helpers/products/postProduct'

const useAddProductForm = () => {
  const context = useContext(UserContext)

  const userID = context?.user.userInfo?.id

  const [inputInfo, setInputInfo] = useState({
    productName: '',
    category: 1,
    gender: 1,
    brand: 1,
    description: '',
    size: 1,
    img: '',
    color: 1
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

    // if (typeof img === 'number') {
    //   toast.promise(
    //     postProduct({
    //       name: productName,
    //       images: [img],
    //       categories: [category],
    //       description,
    //       brand,
    //       color,
    //       size,
    //       gender,
    //       price: 150,
    //       userID
    //     }),
    //     {
    //       loading: 'Saving...',
    //       success: 'Product added succesfully!',
    //       error: 'Could not save. Try again later, please.'
    //     }
    //   )
    // }

    toast.promise(
      postFiles({ img }).then((data) => {
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
          price: 150,
          userID
        })
      }),
      {
        loading: 'Saving...',
        success: 'Product added succesfully!',
        error: 'Could not save. Try again later, please.'
      }
    )

    e.target.reset()
  }

  return {
    inputInfo,
    setInputInfo,
    handleInputChange,
    handleSubmit,
    handleInputImg
  }
}

export default useAddProductForm
