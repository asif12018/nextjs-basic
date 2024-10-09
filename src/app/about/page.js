import React from 'react'
import AboutContent from '../components/AboutContent/AboutContent'
import { getServerSession } from 'next-auth'
import { authOptions } from '../api/auth/[...nextauth]/route'


export const metadata = {
    title:"About | Next Hero",
    description:"About Page"
}

const getTime = async() =>{
    const res = await  fetch('http://localhost:3000/time', {next: {revalidate: 3}})
    const data = await  res.json();
    return data.currentTime;
}

const session = await getServerSession(authOptions);
console.log('session is:',session)

const AboutPage = async ()=> {
    const currentTime = await getTime();
    return (
        <div>
            <AboutContent/>
            <h3 className="text-3xl text-red-400 mt-12">Time: {currentTime}</h3>
        </div>
    )
}

export default AboutPage
