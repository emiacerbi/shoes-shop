import PhotoCameraBackIcon from '@mui/icons-material/PhotoCameraBack'
import { Box, Container, FormLabel, Input, Link, Typography } from '@mui/material'
import useAddProductForm from 'hooks/useAddProductForm'
import Image from 'next/image'

export default function ProductImageStore () {
  const { handleInputChange } = useAddProductForm()
  return (
    <>
      <Container sx={{ pt: '40px', ml: '8rem', display: { xs: 'none', lg: 'block' } }}>
        <Typography variant='h3' sx={{ fontSize: '15px !important', color: '#494949', mb: '1.2rem' }}>Product Images</Typography>
        <Box sx={{ display: 'flex', overflow: 'auto', maxWidth: 740, maxHeight: 600, flexWrap: 'wrap', gap: '50px', justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: 320, height: 380, border: '1px dashed #5C5C5C' }}>
            <FormLabel htmlFor='srcImg'>
              <PhotoCameraBackIcon sx={{ color: '#6E7278', fontSize: '100px', cursor: 'pointer' }}/>
            </FormLabel>
            <Input onChange={handleInputChange} form='addProduct' id='srcImg' type='file' sx={{ display: 'none' }}></Input>
            <Typography variant='p' align="center">
                Drop your image here, or select <Link href="//www.google.com">click here to browse</Link>
            </Typography>
          </Box>
          <Image src='/airmax-270.png' width={320} height={380} alt='productImg'/>
          <Image src='/airmax-270.png' width={320} height={380} alt='productImg'/>
          <Image src='/airmax-270.png' width={320} height={380} alt='productImg'/>
          <Image src='/airmax-270.png' width={320} height={380} alt='productImg'/>
          <Image src='/airmax-270.png' width={320} height={380} alt='productImg'/>
          <Image src='/airmax-270.png' width={320} height={380} alt='productImg'/>
          <Image src='/airmax-270.png' width={320} height={380} alt='productImg'/>
          <Image src='/airmax-270.png' width={320} height={380} alt='productImg'/>
          <Image src='/airmax-270.png' width={320} height={380} alt='productImg'/>
        </Box>
      </Container>
    </>
  )
}
