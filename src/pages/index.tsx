import Text from 'components/common/Text'
import Title from 'components/common/Title'
import Head from 'next/head'

const Home = () => {
  return (
    <>
      <Head>
        <title>Home | João Pedro - WebDev</title>
      </Head>
      <div>
        <Title>Título</Title>
        <Text>Texto do site</Text>
      </div>
    </>
  )
}

export default Home
