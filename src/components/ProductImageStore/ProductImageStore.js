import PhotoCameraBackIcon from '@mui/icons-material/PhotoCameraBack'
import { Box, FormLabel, Input, Link, Typography } from '@mui/material'
import Image from 'next/image'

const images = [
  { id: 1, src: '/airmax-90.png', imgID: 68 },
  { id: 2, src: '/air-force.png', imgID: 67 },
  { id: 3, src: '/air-zoom-pegasus.png', imgID: 70 },
  { id: 4, src: '/airmax-270.png', imgID: 69 },
  { id: 5, src: '/shoes.png', imgID: 71 }
]

export default function ProductImageStore({ handleInputImg, inputInfo }) {
  return (
    <Box
      sx={{
        display: { xs: 'none', lg: 'block' },
        width: '100%'
      }}
    >
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
          justifyContent: 'space-between',
          pr: '1rem'
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
          />
          <Typography variant="p" align="center">
            {inputInfo.img ? (
              inputInfo.img.name + ' selected!'
            ) : (
              <>
                Drop your image here, or select
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.google.com/search?q=shoes&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjiwtCE6Nj7AhXiq5UCHZqiAP0Q_AUoAXoECAEQAw&biw=1920&bih=973&dpr=1"
                >
                  {' '}
                  click here to browse
                </Link>
              </>
            )}
          </Typography>
        </Box>
        {images.map((image) => (
          <Image
            alt="productImg"
            key={image.id}
            src={image.src}
            width={320}
            height={380}
          />
        ))}
      </Box>
    </Box>
  )
}
