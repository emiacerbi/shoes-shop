import { createContext, useState } from 'react'

export const UserContext = createContext(null)

export function UserProvider ({ children }) {
  const [user, setUser] = useState({
    isLogged: false,
    userInfo: null
  })

  if (!user.userInfo) {
    <h1>Loading...</h1>
  }

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  )
}
