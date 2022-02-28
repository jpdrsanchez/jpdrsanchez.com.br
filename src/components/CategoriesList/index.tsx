import Link from 'next/link'

import * as S from './styles'

const CategoriesList = () => {
  return (
    <S.Nav>
      <Link href="/blog/js">JS</Link>
      <Link href="/blog/acessibilidade">Acessibilidade</Link>
      <Link href="/blog/projetos">Projetos</Link>
    </S.Nav>
  )
}

export default CategoriesList
