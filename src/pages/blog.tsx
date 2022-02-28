import Head from 'next/head'
import BlogTemplate from 'templates/BlogTemplate'

const Blog = () => {
  return (
    <>
      <Head>
        <title>Blog | João Pedro - WebDev</title>
      </Head>
      <BlogTemplate />
    </>
  )
}

export default Blog
