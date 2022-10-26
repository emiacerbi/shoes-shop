import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { postLoginUser } from '../../../src/helpers/user-auth/postLoginUser'

export const authOptions = {

  providers: [
    CredentialsProvider({
      async authorize (credentials, req) {
        const res = await postLoginUser({ ...credentials })

        const user = await res.json()

        if (res.ok && user) {
          return user
        }

        return null
      }
    })
  ],

  callbacks: {
    async signIn ({ user, account, profile, email, credentials }) {
      return true
    },

    async jwt ({ token, account, user }) {
      if (account) {
        token.accessToken = user.jwt
      }

      console.log(token)
      return token
    },

    session: ({ token }) => {
      return token
    }
  }
}

export default NextAuth(authOptions)
