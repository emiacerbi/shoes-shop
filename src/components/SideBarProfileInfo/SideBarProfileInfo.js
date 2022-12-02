import { useContext } from 'react'
import { Avatar, Box, Skeleton, Typography } from '@mui/material'
import { UserContext } from 'context/UserContext'

const baseURL = 'https://shoes-shop-strapi.herokuapp.com'

export default function ProfileInfoSideBar({ userData }) {
  const context = useContext(UserContext)

  console.log(userData)
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        paddingInline: '2rem',
        height: 134,
        width: '100%',
        borderBottom: '1px solid #EAECF0'
      }}
    >
      <Avatar
        src={`${baseURL + userData?.avatar?.url}`}
        sx={{ width: 64, height: 64, border: '2px solid #FFFFFF' }}
      >
        B
      </Avatar>
      <Box sx={{ ml: '16px' }}>
        <Typography
          variant="p"
          sx={{ fontSize: '12px', fontWeight: 500, lineHeight: '18px' }}
        >
          Welcome
        </Typography>
        <Typography
          variant="h3"
          sx={{ fontSize: '16px !important', lineHeight: '19px !important' }}
        >
          {context?.user?.userInfo?.username ? (
            context?.user?.userInfo?.username
          ) : (
            <Skeleton variant="rectangular" width={100} height={20} />
          )}
        </Typography>
      </Box>
    </Box>
  )
}
