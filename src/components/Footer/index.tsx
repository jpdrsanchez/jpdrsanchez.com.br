import Text from 'components/common/Text'
import IconNav from 'components/IconNav'
import { IoLogoGithub, IoLogoInstagram, IoLogoLinkedin } from 'react-icons/io5'
import * as S from './styles'

const Footer = () => {
  return (
    <S.Footer>
      <S.FooterContainer>
        <Text>©2022 jpdrsanchez.com.br</Text>
        <IconNav>
          <a
            href="https://www.instagram.com/jpdrsanchez/"
            target="_blank"
            rel="noreferrer"
          >
            <IoLogoInstagram aria-hidden="true" focusable="false" />
            <p>Instagram</p>
          </a>
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
      </S.FooterContainer>
    </S.Footer>
  )
}

export default Footer
