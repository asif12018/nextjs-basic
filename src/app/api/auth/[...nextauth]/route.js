import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

//creating authentication for next js
//here we provided provider and for email and password it auto created a sign in page

const handler = NextAuth({
    session: {
        strategy: 'jwt'
    },
    providers:[
         CredentialsProvider({
            credentials:{
                email : {label : "Email", type: "email", required: true, placeholder: "your email address"},
                password : {label : "Password", type: "password", required: true, placeholder: "type your password here"},
                
            },
            async authorize (credentials){
                if(!credentials){
                    return null;
                
                }else{
                    return true;
                }
            }
         })
    ]
})

export { handler as GET, handler as POST }



