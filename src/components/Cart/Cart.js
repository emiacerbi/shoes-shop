import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined'
import { Link } from '@mui/material'

export default function Cart () {
  return (
    <Link href={'/cart'}>
      <LocalMallOutlinedIcon sx={{ color: '#292D32', mt: '5px' }}/>
    </Link>
  )
}
