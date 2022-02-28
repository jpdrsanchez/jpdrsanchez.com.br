import ArticleList from 'components/ArticleList'
import CategoriesList from 'components/CategoriesList'
import Container from 'components/common/Container'
import Title from 'components/common/Title'
import SearchForm from 'components/SearchForm'
import * as S from './styles'

const BlogTemplate = () => {
  return (
    <S.Main>
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
