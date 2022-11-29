import GoogleProvider from "next-auth/providers/google";
import { Web3sdkioNextAuth } from "@web3sdkio/auth/next-auth";

export const { NextAuthHandler, getUser } = Web3sdkioNextAuth({
  privateKey: process.env.ADMIN_PRIVATE_KEY || "",
  domain: "example.com",
  nextOptions: {
    providers: [
      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID || "",
        clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
      }),
    ],
    callbacks: {
      async session({ session }) {
        return session;
      },
    },
  },
});

export default NextAuthHandler();
