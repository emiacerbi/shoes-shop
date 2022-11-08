import { Box } from '@mui/material'
import Image from 'next/image'

export default function Header () {
  return (
    <Box
      component='header'
      sx={{
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        borderBottom: { sx: 'none', sm: '1px solid #eaecf0' },
        height: { sm: '68px' },
        paddingLeft: { sm: '20px' }
      }}
    >
      <Box
        sx={{
          height: { xs: '25px', sm: '35px' },
          width: { xs: '35px', sm: '45px' },
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <Image
          src='/shoeshopicon.svg'
          layout='fill'
          objectFit='cover'
          alt='logo'
        />
      </Box>
    </Box>
  )
}
