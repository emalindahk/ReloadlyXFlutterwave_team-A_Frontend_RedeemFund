import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'
import axios from 'axios'

const providers = [

  Providers.Facebook({
    clientId: process.env.FACEBOOK_ID,
    clientSecret: process.env.FACEBOOK_SECRET,
  }),

  Providers.Credentials({
    name: 'Credentials',
    authorize: async (credentials) => {
      try {
        const user = await axios.post(`${process.env.NEXT_BASE_API_URL}/login`,
        {
          user: {
            password: credentials.password,
            email: credentials.email
          }
        },
        {
          headers: {
            accept: '*/*',
            'Content-Type': 'application/json'
          }
        })

        if (user) {
          return {status: 'success', data: user.data.user}
        } 
      } catch (e) {
        const errorMessage = e.response.data.message
        // Redirecting to the login page with error messsage in the URL
        throw new Error(errorMessage + '&email=' + credentials.email)
      }

    }
  })
  
]

const callbacks = {
    jwt : async (token, user) => {
      if (user) {
        token.jwt = user.jwt;
        token.user = user.user;
        token.accessToken = user?.accessToken;
      }
      return Promise.resolve(token);
    },
    session : async (session, token) => {
      session.jwt = token.jwt;
      session.accessToken = token.accessToken ? token.accessToken :
      session.user = token.user ? token.user : session.user; 
      return Promise.resolve(session);
    },
}

const options = {
  providers,
  callbacks,
  pages: {
    error: '/login' // Changing the error redirect page to our custom login page
  }
}

export default (req, res) => NextAuth(req, res, options)