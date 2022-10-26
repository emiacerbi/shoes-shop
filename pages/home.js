import { useContext } from 'react'
import { useRouter } from 'next/router'
import ProductCard from '../src/components/ProductCard/ProductCard'
import { UserContext } from '../src/context/UserContext'
import { useSession } from 'next-auth/react'

export default function Home () {
  const router = useRouter()

  const { data: session } = useSession()

  const { user } = useContext(UserContext)

  if (!session?.accessToken) {
    router.push('/')
  }

  return (
    <>
      <ProductCard productTitle="Nike AirMax 270" productPrice="150" productDescription="Women Shoes"/>
      <h1>{user.userInfo?.email}</h1>
    </>
  )
}
