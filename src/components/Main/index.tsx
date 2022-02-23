import Text from 'components/common/Text'
import Title from 'components/common/Title'
import Image from 'next/image'
import * as S from './styles'

const Main = () => {
  return (
    <S.Main>
      <S.MainContainer>
        <S.Profile>
          <Image
            src="/images/profile.png"
            alt="Imagem de João Pedro com traços de Emoji"
            width={200}
            height={200}
            quality={100}
          />
        </S.Profile>
        <S.Content>
          <Title>Olá! Tudo Bem?</Title>
          <Text>
            Me chamo João Pedro, e trabalho como desenvolvedor Front-End 👨🏽‍💻
            desde 2020, amo o que faço, e agora quero compartilhar tudo o que
            aprendi e minhas vivências nesse meu espaço pessoal.
          </Text>
          <Text>
            Atualmente trabalho como Software Engineer na{' '}
            <a href="https://www.caju.com.br/" target="_blank" rel="noreferrer">
              Caju Benefícios
            </a>
            , também participei de grandes projetos, como o desenvolvimento
            frontend do dashboard da{' '}
            <a href="https://www.canalfy.com/" target="_blank" rel="noreferrer">
              Canalfy
            </a>
            , e em projetos como o site da imobiliária{' '}
            <a
              href="https://www.novostilloimoveis.com.br/"
              target="_blank"
              rel="noreferrer"
            >
              Novo Stillo
            </a>{' '}
            feito pela agência{' '}
            <a href="https://www.noweb.io/" target="_blank" rel="noreferrer">
              Noweb
            </a>
            .
          </Text>
        </S.Content>
      </S.MainContainer>
    </S.Main>
  )
}

export default Main
