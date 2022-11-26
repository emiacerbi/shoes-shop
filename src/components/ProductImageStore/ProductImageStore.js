import toast from 'react-hot-toast'
import PhotoCameraBackIcon from '@mui/icons-material/PhotoCameraBack'
import {
  Box,
  Container,
  FormLabel,
  Input,
  Link,
  Typography
} from '@mui/material'
import Image from 'next/image'

const images = [
  { id: 1, src: '/airmax-90.png', imgID: 52 },
  { id: 2, src: '/air-force.png', imgID: 51 },
  { id: 3, src: '/air-zoom-pegasus.png', imgID: 54 },
  { id: 4, src: '/airmax-270.png', imgID: 53 },
  { id: 5, src: '/shoes.png', imgID: 55 }
]

export default function ProductImageStore({
  handleInputImg,
  handlePremadeImg
}) {
  return (
    <>
      <Container sx={{ ml: '8rem', display: { xs: 'none', lg: 'block' } }}>
        <Typography
          variant="h3"
          sx={{ fontSize: '15px !important', color: '#494949', mb: '1.2rem' }}
        >
          Product Images
        </Typography>
        <Box
          sx={{
            display: 'flex',
            overflow: 'auto',
            maxWidth: 740,
            maxHeight: 600,
            flexWrap: 'wrap',
            gap: '50px',
            justifyContent: 'space-between'
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              width: 320,
              height: 380,
              border: '1px dashed #5C5C5C'
            }}
          >
            <FormLabel htmlFor="srcImg">
              <PhotoCameraBackIcon
                sx={{ color: '#6E7278', fontSize: '100px', cursor: 'pointer' }}
              />
            </FormLabel>
            <Input
              onChange={handleInputImg}
              form="addProduct"
              id="srcImg"
              name="img"
              type="file"
              sx={{ display: 'none' }}
            ></Input>
            <Typography variant="p" align="center">
              Drop your image here, or select{' '}
              <Link href="//www.google.com">click here to browse</Link>
            </Typography>
          </Box>
          {images.map((image) => (
            <Image
              alt="productImg"
              key={image.id}
              src={image.src}
              width={320}
              height={380}
              onClick={() => {
                handlePremadeImg(image.imgID)
                toast.success('Image selected!')
              }}
              style={{ cursor: 'pointer' }}
            />
          ))}
        </Box>
      </Container>
    </>
  )
}
