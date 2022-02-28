import Link from 'next/link'
import { IoLogoLinkedin, IoLogoGithub } from 'react-icons/io5'

import IconNav from 'components/IconNav'
import Logo from 'components/Logo'
import Menu from 'components/Menu'

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
        <IconNav>
          <a
            href="https://www.linkedin.com/in/jpdrsanchez/"
            target="_blank"
            rel="noreferrer"
          >
            <IoLogoLinkedin aria-hidden="true" focusable="false" />
            <p>Linkedin</p>
          </a>
          <a
            href="https://github.com/jpdrsanchez/"
            target="_blank"
            rel="noreferrer"
          >
            <IoLogoGithub aria-hidden="true" focusable="false" />
            <p>Github</p>
          </a>
        </IconNav>
        <Menu />
      </S.HeaderContainer>
    </S.Header>
  )
}

export default Header
