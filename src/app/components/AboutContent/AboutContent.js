import Link from 'next/link'
import React from 'react'

function AboutContent() {
    return (
        <div className='flex-col space-x-4'>
            <Link href={'/about/history'}>History</Link>
            <Link href={'/about/mission'}>Mission</Link>
        </div>
    )
}

export default AboutContent
