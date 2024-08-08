import NextAuth from "next-auth"
import { options } from "@ext/lib/auth";


const handler = NextAuth(options)

export { handler as Get, handler as POST }