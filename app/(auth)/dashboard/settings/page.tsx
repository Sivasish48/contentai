import React from 'react'
import { UserProfile } from '@clerk/nextjs'
function page() {
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <UserProfile />
    </div>
  )
}

export default page