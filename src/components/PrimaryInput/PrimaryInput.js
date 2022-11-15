import { Box, InputLabel, OutlinedInput, Typography } from '@mui/material'

const PrimaryInput = ({ label, placeholder, onChange, name, type, list }) => {
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
      <Typography variant='p' sx={{ fontWeight: '500' }} >
        {label} <Box component='span' sx={{ color: 'primary.main' }}>*</Box>
      </Typography>
      <OutlinedInput
        placeholder={placeholder}
        onChange={onChange}
        name={name}
        type={type}
        inputProps={{ list }}
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
