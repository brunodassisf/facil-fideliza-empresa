import { compareHash } from "@/core/lib/bcrypt";
import prisma from "@/core/lib/prisma";
import NextAuth, { getServerSession, NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  session: { strategy: "jwt" },
  pages: {
    error: "/",
    signIn: "/",
    signOut: "/",
  },
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        let user = null;

        user = await prisma.store.findUnique({
          where: {
            email: credentials?.email as string,
          },
        });

        if (!user) {
          throw new Error("Credenciais inválidos");
        }

        const checkHash = await compareHash(
          credentials?.password as string,
          user?.hash as string
        );

        if (!checkHash) {
          throw new Error("Credenciais inválidos");
        }
        return Promise.resolve({
          id: user?.id,
          name: user?.name,
          email: user?.email,
        });
      },
    }),
  ],
  callbacks: {
    session({ session, token, user }) {
      if (session?.user) {
        session.user.id = token.id as string;
      }
      return session;
    },
    jwt: async ({ user, token }) => {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };

export const getServerAuthSession = () => getServerSession(authOptions);
