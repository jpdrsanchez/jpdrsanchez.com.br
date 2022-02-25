import Text from 'components/common/Text'
import Title from 'components/common/Title'
import Image from 'next/image'
import Link from 'next/link'
import * as S from './styles'

const ArticleList = () => {
  return (
    <S.List>
      <Link href="/" passHref>
        <S.Item>
          <article>
            <div>
              <Title elementStyle="medium" level={3}>
                Desenvolvimento e concepção do meu novo blog.
              </Title>
              <Text elementStyle="small">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                non molestie mauris. Maecenas mollis hendrerit dolor, gravida
                dictum enim.
              </Text>
              <span>
                <time dateTime="2022-02-25 18:30">
                  <abbr aria-label="18 de Fevereiro de 2022">18/02/2022</abbr>
                </time>{' '}
                - Desenvolvimento, JS, HTML5
              </span>
            </div>
            <div>
              <Image
                src="/images/placeholder.jpg"
                alt="Imagem de um esboço de um projeto web em um caderno sobre uma mesa de madeira"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
              />
            </div>
          </article>
        </S.Item>
      </Link>
      <Link href="/" passHref>
        <S.Item>
          <article>
            <div>
              <Title elementStyle="medium" level={3}>
                Desenvolvimento e concepção do meu novo blog.
              </Title>
              <Text elementStyle="small">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                non molestie mauris. Maecenas mollis hendrerit dolor, gravida
                dictum enim.
              </Text>
              <span>
                <time dateTime="2022-02-25 18:30">
                  <abbr aria-label="18 de Fevereiro de 2022">18/02/2022</abbr>
                </time>{' '}
                - Desenvolvimento, JS, HTML5
              </span>
            </div>
            <div>
              <Image
                src="/images/placeholder.jpg"
                alt="Imagem de um esboço de um projeto web em um caderno sobre uma mesa de madeira"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
              />
            </div>
          </article>
        </S.Item>
      </Link>
      <Link href="/" passHref>
        <S.Item>
          <article>
            <div>
              <Title elementStyle="medium" level={3}>
                Desenvolvimento e concepção do meu novo blog.
              </Title>
              <Text elementStyle="small">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                non molestie mauris. Maecenas mollis hendrerit dolor, gravida
                dictum enim.
              </Text>
              <span>
                <time dateTime="2022-02-25 18:30">
                  <abbr aria-label="18 de Fevereiro de 2022">18/02/2022</abbr>
                </time>{' '}
                - Desenvolvimento, JS, HTML5
              </span>
            </div>
            <div>
              <Image
                src="/images/placeholder.jpg"
                alt="Imagem de um esboço de um projeto web em um caderno sobre uma mesa de madeira"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
              />
            </div>
          </article>
        </S.Item>
      </Link>
    </S.List>
  )
}

export default ArticleList
