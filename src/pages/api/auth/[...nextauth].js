import { postLoginUser } from 'helpers/user-auth/postLoginUser'
import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

export const authOptions = {

  providers: [
    CredentialsProvider({
      async authorize (credentials, req) {
        const res = await postLoginUser({ ...credentials })

        if (res.statusText && res.data) {
          return res.data
        }

        return null
      }
    })
  ],

  callbacks: {
    async signIn ({ user }) {
      if (user.jwt) {
        return true
      }

      return false
    },

    async jwt ({ token, account, user }) {
      if (account) {
        token.accessToken = user.jwt
      }

      return token
    },

    session: ({ token }) => {
      return token
    }
  }
}

export default NextAuth(authOptions)
