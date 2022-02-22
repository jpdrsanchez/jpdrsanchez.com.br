import Logo from 'components/Logo'
import Menu from 'components/Menu'
import Link from 'next/link'

import * as S from './styles'

const Header = () => {
  return (
    <S.Header>
      <S.HeaderContainer>
        <Link href="/" passHref>
          <a>
            <Logo hidden={true} />
            <p>João Pedro Sanchez - Web Dev</p>
          </a>
        </Link>
        <div>Ícones</div>
        <Menu />
      </S.HeaderContainer>
    </S.Header>
  )
}

export default Header
