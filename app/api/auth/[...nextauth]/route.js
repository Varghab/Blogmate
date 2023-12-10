import NextAuth from "next-auth/next"

const authOptions = {
    pages:{

    },
    providers:[
        
    ]
}


const handler = NextAuth()

export { handler as GET, handler as POST }

