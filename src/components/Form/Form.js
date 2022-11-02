const Form = ({ onSubmit, children }) => {
  return (
    <form
      style={{
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
    </form>
  )
}

export default Form
