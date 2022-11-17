import { useState } from 'react'
import ReactSimplyCarousel from 'react-simply-carousel'
import Quote from '@components/Quote/Quote'
import Wedge from '@components/Wedge/Wedge'
import { Box, useTheme } from '@mui/system'
import Image from 'next/image'

const Blockquote = () => {
  const theme = useTheme()
  const [activeSlideIndex, setActiveSlideIndex] = useState(0)

  return (
    <Box
      sx={{
        display: 'none',
        width: '50%',
        position: 'relative',
        [theme.breakpoints.up('xl')]: {
          display: 'grid',
          placeContent: 'center',
          padding: '2rem',
          position: 'relative',
          zIndex: 1
        }
      }}
    >
      <Image src='/sign-up-shoes-desktop.png' layout='fill' objectFit='cover' alt='pair of shoes' priority />
      <Box
        sx={{
          [theme.breakpoints.up('lg')]: {
            background:
          'radial-gradient(55.99% 112.1% at 69.71% 44.01%, rgba(253, 253, 253, 0.074) 0%, rgba(0, 0, 0, 0) 100%), radial-gradient(64.9% 185.04% at 19.81% 27.89%, rgba(255, 255, 255, 0.42) 0%, rgba(255, 255, 255, 0.06) 100%)',
            backdropFilter: 'blur(12px)',
            width: '90%',
            maxWidth: '756px',
            height: '317px',
            borderRadius: '32px',
            display: 'flex',
            alignItems: 'center',
            border: '2px solid white',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)'
          }
        }}
      >
      </Box>

      <ReactSimplyCarousel
        activeSlideIndex={activeSlideIndex}
        onRequestChange={setActiveSlideIndex}
        itemsToShow={1}
        itemsToScroll={1}
        containerProps={{
          style: {
            position: 'relative',
            gap: '2rem'
          }
        }}
        forwardBtnProps={{
          style: {
            alignSelf: 'center',
            width: '38px',
            height: '38px',
            background: 'transparent',
            borderRadius: '50%',
            border: '2px solid white',
            fontSize: '1.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transform: 'rotate(180deg)'
          },
          children: <Wedge />
        }}
        backwardBtnProps={{
          style: {
            alignSelf: 'center',
            width: '38px',
            height: '38px',
            background: 'transparent',
            borderRadius: '50%',
            border: '2px solid white',
            fontSize: '1.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer'
          },
          children: <Wedge />
        }}
        speed={400}
        easing="linear"
      >
        <Quote author='John Stone' />
        <Quote author='John Doe'/>
        <Quote author='Jane Doe'/>
        <Quote author='John Stone'/>
      </ReactSimplyCarousel>
    </Box>
  )
}

export default Blockquote
