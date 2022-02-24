import Button from 'components/common/Button'
import Container from 'components/common/Container'
import Title from 'components/common/Title'
import VSCode from 'components/VSCode'
import * as S from './styles'

const Experience = () => {
  return (
    <S.Wrapper>
      <svg
        width="1600"
        height="161"
        viewBox="0 0 1600 161"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M0 18.3333H53.3333C106.667 18.3333 213.333 18.3333 320 36.1111C426.667 53.8889 533.333 89.4444 640 77.5556C746.667 66.1111 853.333 6.11111 960 0.555551C1066.67 -5 1173.33 41.6667 1280 53.8889C1386.67 66.1111 1493.33 41.6667 1546.67 30.2222L1600 18.3333V160.556H1546.67C1493.33 160.556 1386.67 160.556 1280 160.556C1173.33 160.556 1066.67 160.556 960 160.556C853.333 160.556 746.667 160.556 640 160.556C533.333 160.556 426.667 160.556 320 160.556C213.333 160.556 106.667 160.556 53.3333 160.556H0V18.3333Z"
          fill="var(--secondBg)"
        />
      </svg>
      <S.ContentArea>
        <Container>
          <Title align="center" level={2}>
            Por onde já passei?
          </Title>
          <VSCode />
          <Button type="link" href="/" blank={true}>
            Baixar currículo
          </Button>
        </Container>
      </S.ContentArea>
      <svg
        width="1600"
        height="197"
        viewBox="0 0 1600 197"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M0 142.222L66.6667 136.333C133.333 130 266.667 118.889 400 106.667C533.333 94.4444 666.667 83.3333 800 106.667C933.333 130 1066.67 190 1200 195.556C1333.33 201.111 1466.67 154.444 1533.33 130.333L1600 106.667V0H1533.33C1466.67 0 1333.33 0 1200 0C1066.67 0 933.333 0 800 0C666.667 0 533.333 0 400 0C266.667 0 133.333 0 66.6667 0H0V142.222Z"
          fill="var(--secondBg)"
        />
      </svg>
    </S.Wrapper>
  )
}

export default Experience
