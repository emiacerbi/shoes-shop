import { useContext, useEffect } from 'react'
import { useRouter } from 'next/router'
import ProductCard from '../src/components/ProductCard/ProductCard'
import { UserContext } from '../src/context/UserContext'

export default function Home () {
  const router = useRouter()
  const { user } = useContext(UserContext)

  useEffect(() => {
    if (!user.token) {
      router.push('/')
    }
  }, [])

  return (
    <ProductCard productTitle="Nike AirMax 270" productPrice="150" productDescription="Women Shoes"/>
  )
}
