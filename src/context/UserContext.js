// import { useQuery } from '@tanstack/react-query'
import { createContext, useEffect, useState } from 'react'
import { getUserInfo } from '../helpers/user-auth/getUserInfo'

export const UserContext = createContext(null)

export function UserProvider ({ children }) {
  const [user, setUser] = useState({
    token: null,
    userInfo: null
  })

  useEffect(() => {
    const fetchUserInfo = async () => {
      const response = await getUserInfo(sessionStorage.getItem('userToken'))
      setUser({
        token: sessionStorage.getItem('userToken'),
        userInfo: response
      })
    }

    fetchUserInfo()
  }, [])

  console.log(user)

  if (!user.userInfo) {
    <h1>Loading...</h1>
  }

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  )
}
