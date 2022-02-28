import { NextSeo } from 'next-seo'

import Experience from 'components/Experience'
import BlogSection from 'components/BlogSection'
import Main from 'components/Main'

const HomeTemplate = () => {
  return (
    <>
      <NextSeo
        title="Home"
        description="Meu blog pessoal onde compartilho tudo que aprendi sobre desenvolvimento web e meus projetos pessoais"
      />
      <Main />
      <Experience />
      <BlogSection />
    </>
  )
}

export default HomeTemplate
