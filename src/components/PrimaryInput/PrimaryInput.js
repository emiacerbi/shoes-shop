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
        size='small'
        sx={{
          width: '100%',
          fontFamily: "'Work Sans', sans-serif",
          borderRadius: '8px',
          padding: '0'
        }}
      />
    </InputLabel>
  )
}

export default PrimaryInput
