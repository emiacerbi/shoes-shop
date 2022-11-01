import { useSession } from 'next-auth/react'
import { createContext, useEffect, useState } from 'react'
import { getUserInfo } from '../helpers/user-auth/getUserInfo'

export const UserContext = createContext(null)

export function UserProvider ({ children }) {
  const [user, setUser] = useState({
    userInfo: null
  })

  const { data: session } = useSession()

  useEffect(() => {
    const fetchUserInfo = async () => {
      const response = await getUserInfo(session?.accessToken)

      setUser({
        userInfo: response
      })
    }
    if (session?.accessToken) {
      fetchUserInfo()
    }
  }, [session?.accessToken])

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  )
}
