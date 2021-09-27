import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'
import axios from 'axios'
import FacebookProvider from 'next-auth/providers/facebook'

const providers = [
  Providers.Credentials({

    async authorize(credentials) {
      try {
        const user = await axios.post(`${process.env.NEXT_BASE_API_URL}login`,
          {
            password: credentials.password,
            email: credentials.email
          },
          {
            headers: {
              method: "POST",
              headers: { "Content-Type": "application/json", 
              accept: '*/*',
               "Access-Control-Allow-Origin": "*"},
              body: JSON.stringify(credentials),
            }
          })

        if (user) {
          return user.data
        }
      } catch (e) {
        console.log("Login errror", e)
      }
    }
  }),

  FacebookProvider({
    clientId: process.env.FACEBOOK_CLIENT_ID,
    clientSecret: process.env.FACEBOOK_CLIENT_SECRET
  })
]

const callbacks = {
  jwt: async (token, user) => {
    if (user) {
      token.jwt = user.jwt;
      token.user = user.user;
      token.accessToken = user?.accessToken;
      token.id = user?.id;
    }
    return token;
  },
  session: async (session, token) => {
    session.jwt = token.jwt;
    session.accessToken = token.accessToken ? token.accessToken :
    session.user = token.user ? token.user : session.user; 
    session.id = token.id ? token.id : session.id;
    return session;
  }
}

const options = {
  providers,
  secret: process.env.JWT_SECRET,
  session: {
    jwt: true,
    maxAge: 30 * 24 * 60 * 60 // 30 days
  },
  callbacks,
  pages: {
    signIn: '/signin',
    error: '/signin' // Changing the error redirect page to our custom login page
  }
}

export default (req, res) => NextAuth(req, res, options)