import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { login } from "@/api/auth"

const callbacks = {
  async jwt({ token, user }) {
    if (user) {
      token.user = user
      token.token = user.token
    }
    return token
  },

  async session({ session, token }) {
    session.token = token.token
    return session
  },

  async redirect({ url }) {
    return Promise.resolve(url);
  }
};

const providers = [
  CredentialsProvider({
    name: "Credentials",
    async authorize(credentials) {
      try {
        const user = await login({
            password: credentials.password
        })
        if (user) {
          return user.data;
        }
      } catch (error) {
        const errorMsg = error.response.data.message;
        throw new Error(`${errorMsg}`)
      }
      return null
    }
  })
];

const options = {
  secret: process.env.AUTH_SECRET,
  callbacks: callbacks,
  providers: providers
};
const auth = (req, res) => NextAuth(req, res, options)

export default auth;