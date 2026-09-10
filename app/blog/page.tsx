import Articles from '@/component/blog/Articles'
import BlogLanding from '@/component/blog/BlogLanding'
import React from 'react'

export default function page() {
  return (
    <main className='bg-[#F8F9FA]'>
        <BlogLanding/>
        <Articles/>
    </main>
  )
}
