import { Headland_One } from 'next/font/google'
import React from 'react'
const headland = Headland_One({weight: ['400'], subsets: ['latin']})

function services() {
    return (
        <div>
            <h1 className={`${headland.className} text-3xl`}>this is services page</h1>
        </div>
    )
}

export default services
