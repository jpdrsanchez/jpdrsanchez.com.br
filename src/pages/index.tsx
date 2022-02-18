import Head from 'next/head'

import Text from 'components/common/Text'
import Title from 'components/common/Title'

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
