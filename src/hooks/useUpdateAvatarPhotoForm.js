import { useState } from 'react'
import toast from 'react-hot-toast'
import { postFiles } from 'helpers/products/postFiles'
import { updateUserAvatar } from 'helpers/user-auth/updateUserAvatar'
import { useRouter } from 'next/router'

const useUpdateAvatarPhotoForm = () => {
  const router = useRouter()

  const [inputInfo, setInputInfo] = useState({
    username: '',
    email: '',
    password: '',
    img: '',
    id: ''
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
    const { username, email, password, img, id } = inputInfo
    e.preventDefault()
    toast
      .promise(
        postFiles({ img }).then((data) => {
          const IMAGE_ID = data[0].id
          updateUserAvatar({ id, username, email, password, avatar: IMAGE_ID })
        }),
        {
          loading: 'Saving...',
          success: 'Avatar photo changed succesfully!',
          error: 'Could not save. Try again later, please.'
        }
      )
      .then(() => router.reload())
  }

  return {
    inputInfo,
    setInputInfo,
    handleInputChange,
    handleSubmit,
    handleInputImg
  }
}

export default useUpdateAvatarPhotoForm
