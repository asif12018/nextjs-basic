import Link from 'next/link'
import React from 'react'

function AboutContent() {
    return (
        <div className='flex-col space-x-4'>
            <Link href={'/about/history'}>History</Link>
            <Link href={'/about/mission'}>Mission</Link>
            <Link href={'/about/vision'}>Vision</Link>
        </div>
    )
}

export default AboutContent
