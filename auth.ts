import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import GitHub from "next-auth/providers/github"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"


export const {
  handlers: { GET, POST },
  auth,
} = NextAuth({
  providers: [GitHub],
}