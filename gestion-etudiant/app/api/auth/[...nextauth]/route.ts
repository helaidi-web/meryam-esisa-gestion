import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // This is a simple implementation. In production:
        // 1. Query the database using Prisma
        // 2. Verify the password using bcrypt
        // 3. Return user object if valid

        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        // Demo credentials (remove in production)
        if (
          credentials.email === "student@esisa.edu" &&
          credentials.password === "password123"
        ) {
          return {
            id: "1",
            email: credentials.email,
            name: "Student User",
            role: "student",
          };
        }

        return null;
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = (user as any).role;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        (session.user as any).id = token.id;
        (session.user as any).role = token.role;
      }
      return session;
    },
  },
});

export { handler as GET, handler as POST };
