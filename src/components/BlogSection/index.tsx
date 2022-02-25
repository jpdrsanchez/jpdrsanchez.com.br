import ArticleList from 'components/ArticleList'
import Button from 'components/common/Button'
import Container from 'components/common/Container'
import Title from 'components/common/Title'
import Link from 'next/link'
import * as S from './styles'

const BlogSection = () => {
  return (
    <S.Wrapper>
      <Container>
        <Title level={2} align="center">
          Artigos recentes
        </Title>
        <ArticleList />
        <Link href="/blog" passHref>
          <Button type="link">Ver Mais</Button>
        </Link>
      </Container>
    </S.Wrapper>
  )
}

export default BlogSection
