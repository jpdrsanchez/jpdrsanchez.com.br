import Head from 'next/head'

import PostTemplate from 'templates/PostTemplate'

const Post = () => {
  return (
    <>
      <Head>
        <title>
          Desenvolvimento e Concepção do Meu Novo Blog | João Pedro - WebDev
        </title>
      </Head>
      <PostTemplate />
    </>
  )
}

export default Post
