import { NextSeo } from 'next-seo'

import ArticleList from 'components/ArticleList'
import CategoriesList from 'components/CategoriesList'
import Container from 'components/common/Container'
import Title from 'components/common/Title'
import SearchForm from 'components/SearchForm'
import * as S from './styles'

const BlogTemplate = () => {
  return (
    <S.Main>
      <NextSeo
        title="Blog"
        description="Meu blog pessoal onde compartilho tudo que aprendi sobre desenvolvimento web e meus projetos pessoais"
      />
      <Container>
        <Title align="center">Blog</Title>
        <SearchForm />
        <CategoriesList />
        <ArticleList />
      </Container>
    </S.Main>
  )
}

export default BlogTemplate
