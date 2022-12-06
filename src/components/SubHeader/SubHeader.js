import { useContext } from 'react'
import { Avatar, Box, Skeleton, Typography, useTheme } from '@mui/material'
import { BASE_URL } from 'constants/ConstantDeclaration'
import { UserContext } from 'context/UserContext'

export default function SubHeader({ userData }) {
  const theme = useTheme()
  const context = useContext(UserContext)

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-end',
        width: 180,
        height: 40,
        margin: '20px 0px',
        [theme.breakpoints.up('sm')]: {
          width: 280,
          height: 80,
          marginLeft: '20px',
          marginTop: '-20px'
        }
      }}
    >
      <Avatar
        src={`${BASE_URL + userData?.avatar?.url}`}
        sx={{
          width: { xs: 60, sm: 120 },
          height: { xs: 60, sm: 120 },
          border: '1px solid #FFFFFF'
        }}
        alt="User"
      >
        B
      </Avatar>

      <Box sx={{ marginLeft: 'auto', marginBottom: '0px' }}>
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: '14px', sm: '20px' },
            lineHeight: { xs: '12px', sm: '24px' }
          }}
        >
          {context?.user?.userInfo?.username ? (
            context?.user?.userInfo?.username
          ) : (
            <Skeleton variant="rectangular" width={100} height={20} />
          )}
        </Typography>
        <Typography variant="p" sx={{ lineHeight: '14px' }}>
          1374 bonus points
        </Typography>
      </Box>
    </Box>
  )
}
