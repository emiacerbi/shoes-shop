import { FormLabel, TextField, Typography } from '@mui/material'

const TextArea = ({ label, placeholder, onChange, rows }) => {
  return (
    <FormLabel sx={{ display: 'flex', flexDirection: 'column', gap: '.5rem', width: '100%', maxWidth: '436px' }} >
      <Typography variant='h3' sx={{ color: '#494949', fontSize: '15px !important' }}>
        {label}
      </Typography>
      <TextField
        placeholder={placeholder}
        sx={{ width: '100%', borderRadius: '5px' }}
        multiline
        onChange={onChange}
        rows={rows}
        inputProps={{ maxLength: 300 }}
        name='Description'
      />
    </FormLabel>
  )
}

export default TextArea
