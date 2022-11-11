const Form = ({ onSubmit, children, id }) => {
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
      id={id}
    >
      {children}
    </form>
  )
}

export default Form
