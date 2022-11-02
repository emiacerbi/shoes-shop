import { Box, InputLabel, OutlinedInput, Typography, useTheme } from '@mui/material'

const PrimaryInput = ({ label, placeholder, onChange, name, type }) => {
  const theme = useTheme()
  return (
    <InputLabel
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '.5rem',
        width: '100%',
        maxWidth: '436px'
      }}
    >
      <Typography variant='p' >
        {label} <Box component='span' sx={{ color: theme.palette.primary.main }}>*</Box>
      </Typography>
      <OutlinedInput
        placeholder={placeholder}
        onChange={onChange}
        name={name}
        type={type}
        required
        sx={{
          width: '100%',
          borderRadius: '5px',
          padding: '.8rem',
          paddingBottom: '.5rem',
          fontFamily: "'Work Sans', sans-serif"
        }}
      />
    </InputLabel>
  )
}

export default PrimaryInput
