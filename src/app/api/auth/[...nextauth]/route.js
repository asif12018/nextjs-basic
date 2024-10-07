import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

//creating authentication for next js
//here we provided provider and for email and password it auto created a sign in page

const handler = NextAuth({
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
    ]
})

const users = [
    {
        id:1,
        name: "Mehedi",
        email: "m@gmail.com",
        password: "password"
    },
    {
        id:2,
        name:"Zihad",
        email: "z@gmail.com",
        password:"passwordz"
    },
    {
        id:3,
        name:"Sumon",
        email: "s@gmail.com",
        password: "passwords"
    }
]

export { handler as GET, handler as POST }



