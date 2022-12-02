import { useContext, useState } from 'react'
import toast from 'react-hot-toast'
import { UserContext } from 'context/UserContext'
import { postFiles } from 'helpers/products/postFiles'
import { updateUserAvatar } from 'helpers/user-auth/updateUserAvatar'

const useUpdateAvatarPhotoForm = () => {
  const context = useContext(UserContext)

  const userName = context?.user.userInfo?.username
  const userEmail = context?.user.userInfo?.email

  const [inputInfo, setInputInfo] = useState({
    username: userName,
    email: userEmail,
    password: '',
    img: ''
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
    const { username, email, password, img } = inputInfo
    e.preventDefault()
    toast.promise(
      postFiles({ img }).then((data) => {
        const IMAGE_ID = data[0].id
        updateUserAvatar({ username, email, password, avatar: IMAGE_ID })
      }),
      {
        loading: 'Saving...',
        success: 'Avatar photo changed succesfully!',
        error: 'Could not save. Try again later, please.'
      }
    )
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
