import Container from 'components/common/Container'
import Title from 'components/common/Title'
import Image from 'next/image'
import * as S from './styles'

const PostTemplate = () => {
  return (
    <S.Main>
      <article>
        <Container>
          <header>
            <S.PostCover>
              <Image
                src="/images/placeholder.jpg"
                alt="Desenvolvimento e concepção do meu novo blog."
                layout="fill"
                objectFit="cover"
                objectPosition="center"
              />
            </S.PostCover>
            <S.PostInfo>
              <time dateTime="2022-02-25 18:30">
                <abbr aria-label="Publicado em 18 de Fevereiro de 2022">
                  18/02/2022
                </abbr>
              </time>
              <span>Desenvolvimento, JS, HTML5</span>
            </S.PostInfo>
            <Title>Desenvolvimento e concepção do meu novo blog.</Title>
          </header>
          <S.PostBody>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              in ante tempor, placerat lacus quis, venenatis purus. In rutrum
              quam in sem sagittis lacinia. Donec ut elit eget quam condimentum
              tincidunt. Proin finibus lorem vel arcu pulvinar placerat. In sed
              bibendum justo. Vivamus vel maximus sem, in tristique ex. Sed eget
              justo facilisis, mattis ante eget, egestas neque. Orci varius
              natoque penatibus et magnis dis parturient montes, nascetur
              ridiculus mus.
            </p>
            <p>
              Sed lacus nibh, varius at laoreet vel, porttitor in justo. Fusce
              pretium orci vitae nisl convallis, id fermentum lacus blandit. In
              vehicula libero mi, a tempor turpis viverra nec. Phasellus feugiat
              neque eu ipsum elementum convallis. Curabitur molestie dui et
              velit accumsan, eu consequat sem pharetra. Nullam luctus libero et
              scelerisque tincidunt. Pellentesque lacinia lectus vitae orci
              ultrices dictum. Donec auctor, diam ultricies rutrum hendrerit,
              nunc risus bibendum dui, ac posuere nunc neque et lorem. Praesent
              vel metus mi. Vestibulum sit amet consequat tellus. Sed felis
              ante, bibendum nec tempus a, maximus at sem. Sed sollicitudin ante
              quis mattis interdum. Phasellus faucibus vulputate commodo.
            </p>
            <p>
              Ut malesuada vehicula odio, nec dictum nisi porttitor eget. Ut
              venenatis sed metus eu consequat. Phasellus quis augue nunc.
              Pellentesque sed ullamcorper enim, eu cursus nibh. Pellentesque
              sed tellus leo. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Pellentesque porttitor lacus volutpat lectus varius
              hendrerit. Nunc tempus odio eu ultrices dapibus. Phasellus nec
              lectus lacinia, lacinia metus in, vulputate odio. Sed condimentum
              non neque id tempus. Integer tristique euismod felis, nec
              fringilla risus. Fusce tempor augue sapien, sed vehicula arcu
              pulvinar in. Fusce ornare tortor leo, eu porta neque rutrum a.
            </p>
          </S.PostBody>
        </Container>
      </article>
    </S.Main>
  )
}

export default PostTemplate
