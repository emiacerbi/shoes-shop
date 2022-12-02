import { useEffect, useState } from 'react'
import PrimaryButton from '@components/PrimaryButton/PrimaryButton'
import PrimaryInput from '@components/PrimaryInput/PrimaryInput'
import { Button, Modal, Typography } from '@mui/material'
import { Box } from '@mui/system'
import useUpdateAvatarPhotoForm from 'hooks/useUpdateAvatarPhotoForm'

const ChangePhotoButton = ({ userData }) => {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const {
    handleInputChange,
    handleInputImg,
    handleSubmit,
    setInputInfo,
    inputInfo
  } = useUpdateAvatarPhotoForm()

  useEffect(() => {
    setInputInfo({
      ...inputInfo,
      username: userData.username,
      email: userData.email
    })
  }, [])

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4
  }

  return (
    <>
      <Button
        onClick={handleOpen}
        variant="outlined"
        sx={{
          color: '#FE645E',
          fontFamily: 'Work Sans',
          fontSize: '11px',
          width: '120px',
          borderRadius: '6px',
          height: '35px',
          mb: '16px'
        }}
      >
        Change photo
      </Button>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <form
            onSubmit={handleSubmit}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem'
            }}
          >
            <Typography id="modal-modal-title" variant="h3" component="h3">
              Change Avatar Photo
            </Typography>
            <PrimaryInput
              isRequired={true}
              label="New avatar image"
              placeholder="Avatar Image"
              name="img"
              onChange={handleInputImg}
              type="file"
            />
            <PrimaryInput
              isRequired={true}
              label="For security reasons, you need to confirm your password"
              placeholder="User password"
              name="password"
              onChange={handleInputChange}
              type="password"
            />
            <PrimaryButton onClick={handleSubmit}>Save</PrimaryButton>
          </form>
        </Box>
      </Modal>
    </>
  )
}

export default ChangePhotoButton
