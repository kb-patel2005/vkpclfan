import ArticleDetails from '@/component/blog/ArticleDetails'
import BlogDetailLanding from '@/component/blog/BlogDetailLanding'
import BlogDetailTagLine from '@/component/blog/BlogDetailTagLine'
import EngineeringEnvironment from '@/component/blog/EngineeringEnvironment'
import Footer from '@/component/common/Footer'
import React from 'react'

export default function page() {
  return (
    <section>
        <BlogDetailLanding/>
        <BlogDetailTagLine/>
        <ArticleDetails/>
        <EngineeringEnvironment/>
        <Footer/>
    </section>
  )
}
