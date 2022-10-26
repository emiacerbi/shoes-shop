import { Link } from '@mui/material'
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined'

export default function Cart () {
  return (
    <Link href={'/cart'}>
      <LocalMallOutlinedIcon sx={{ color: '#292D32', mt: '5px' }}/>
    </Link>

  )
}
