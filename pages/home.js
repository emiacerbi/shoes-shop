import { useContext } from 'react'
import ProductCard from '../src/components/ProductCard/ProductCard'
import { UserContext } from '../src/context/UserContext'

export default function Home () {
  const context = useContext(UserContext)
  if (!context.user.isLogged) {
    return (
      <h1>Redirected to menu</h1>
    )
  }

  return (
    <ProductCard productTitle="Nike AirMax 270" productPrice="150" productDescription="Women Shoes"/>
  )
}
