import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { signIn } from "next-auth/react";

//creating authentication for next js
//here we provided provider and for email and password it auto created a sign in page

export const authOptions = {
    secret: process.env.NEXT_PUBLIC_AUTH_SECRET,
    session: {
        strategy: 'jwt'
    },
    providers:[
        //creating provider for email and password
         CredentialsProvider({
            credentials:{
                email : {label : "Email", type: "email", required: true, placeholder: "your email address"},
                password : {label : "Password", type: "password", required: true, placeholder: "type your password here"},
                
            },
            //function to check the email and password for authorization
            async authorize (credentials){
                const {email, password} = credentials;
                if(!credentials){
                    return null;
                
                }
                
                if(email){
                    const currentUser = users.find((user)=> user.email === email);
                    if(currentUser){
                        if(currentUser.password === password){
                            return currentUser
                        }
                    }
                }

                return null;
            }
         })
    ],
    callbacks:{
        async jwt({ token, account, user }) {
            // Persist the OAuth access_token and or the user id to the token right after signin
            //adding extra property like type or role. in the return session
            if (account) {
              token.type = user.type
              token.password = user.password
            //   token.id = profile.id
            }
            return token
          },
        async session ({session,user, token }){
            session.user.type = token.type
            session.user.password = token.password
            return session
        },
        
    }
}

const handler = NextAuth(authOptions)

const users = [
    {
        id:1,
        name: "Mehedi",
        email: "m@gmail.com",
        type:"user",
        password: "password"
    },
    {
        id:2,
        name:"Zihad",
        email: "z@gmail.com",
        type:"user",
        password:"passwordz"
    },
    {
        id:3,
        name:"Sumon",
        email: "s@gmail.com",
        type:"user",
        password: "passwords"
    },
    {
        id:4,
        name:"Asif",
        email:"0011@romeo.aci",
        type:"admin",
        password:"password"
    }
]

export { handler as GET, handler as POST }



