import { FormGroup } from '@mui/material'

const Form = ({ onSubmit, children }) => {
  return (
    <FormGroup
      sx={{
        display: 'flex',
        flexDirection: 'column',
        paddingBlock: '2.5rem',
        gap: '1.5rem',
        width: '100%',
        maxWidth: '436px'
      }}
      onSubmit={onSubmit}
    >
      {children}
    </FormGroup>
  )
}

export default Form
