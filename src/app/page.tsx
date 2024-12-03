import React from 'react'
import Link from 'next/link';
const Home = () => {
  return (
    <div className='flex items-center justify-center h-screen'>
      click <Link href="/documents/123" className='text-blue-900 underline'><span>&nbsp;here&nbsp;</span></Link> to go to document id
    </div>

  )
}

export default Home
