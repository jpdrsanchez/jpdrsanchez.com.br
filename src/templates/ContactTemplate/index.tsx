import Text from 'components/common/Text'
import Title from 'components/common/Title'
import IconNav from 'components/IconNav'
import { IoLogoGithub, IoLogoInstagram, IoLogoLinkedin } from 'react-icons/io5'
import * as S from './styles'

const ContactTemplate = () => {
  return (
    <S.Main>
      <S.Content>
        <Title align="center">Contato</Title>
        <Text align="center">
          Quer entrar em contato comigo? você pode entrar em contato por uma das
          redes sociais abaixo ou mandar um e-mail{' '}
          <a href="mailto:joaopedrosanchez302@gmail.com">clicando aqui</a> 💻
        </Text>
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
      </S.Content>
    </S.Main>
  )
}

export default ContactTemplate
