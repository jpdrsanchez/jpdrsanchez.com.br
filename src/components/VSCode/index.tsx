import Image from 'next/image'
import * as S from './styles'

const VSCode = () => {
  return (
    <S.Wrapper>
      <S.TabList role="tablist" aria-orientation="horizontal">
        <button
          type="button"
          role="tab"
          aria-selected="true"
          aria-controls="jobs"
        >
          <Image
            src="/images/json.svg"
            alt="Ícone de um arquivo Json"
            width={20}
            height={20}
          />
          <span>jobs.json</span>
        </button>
      </S.TabList>
      <S.TabPanels>
        <div id="jobs" role="tabpanel">
          <div aria-hidden="true">[</div>
          <S.SpaceOne>{'{'}</S.SpaceOne>
          <S.SpaceTwo>
            <ul>
              <li>
                <span className="red">
                  <span aria-hidden="true">“</span>
                  empresa
                  <span aria-hidden="true">”</span>
                </span>
                :{' '}
                <span className="green">
                  <span aria-hidden="true">“</span>
                  Caju Benefícios
                  <span aria-hidden="true">”</span>
                </span>
              </li>
              <li>
                <span className="red">
                  <span aria-hidden="true">“</span>
                  período
                  <span aria-hidden="true">”</span>
                </span>
                :{' '}
                <span className="green">
                  <span aria-hidden="true">“</span>
                  Fev/2022 - O momento
                  <span aria-hidden="true">”</span>
                </span>
              </li>
              <li>
                <span className="red">
                  <span aria-hidden="true">“</span>
                  cargo
                  <span aria-hidden="true">”</span>
                </span>
                :{' '}
                <span className="green">
                  <span aria-hidden="true">“</span>
                  Software Engineer
                  <span aria-hidden="true">”</span>
                </span>
              </li>
              <li>
                <span className="red">
                  <span aria-hidden="true">“</span>
                  atividades
                  <span aria-hidden="true">”</span>
                </span>
                :{' '}
                <span className="green">
                  <span aria-hidden="true">“</span>
                  Em breve uma descrição linda e detalhada 💅
                  <span aria-hidden="true">”</span>
                </span>
              </li>
            </ul>
          </S.SpaceTwo>
          <S.SpaceOne>{'},'}</S.SpaceOne>
          <S.SpaceOne>{'{'}</S.SpaceOne>
          <S.SpaceTwo>
            <ul>
              <li>
                <span className="red">
                  <span aria-hidden="true">“</span>
                  empresa
                  <span aria-hidden="true">”</span>
                </span>
                :{' '}
                <span className="green">
                  <span aria-hidden="true">“</span>
                  Canalfy
                  <span aria-hidden="true">”</span>
                </span>
              </li>
              <li>
                <span className="red">
                  <span aria-hidden="true">“</span>
                  período
                  <span aria-hidden="true">”</span>
                </span>
                :{' '}
                <span className="green">
                  <span aria-hidden="true">“</span>
                  Ago/2021 - Fev/2022
                  <span aria-hidden="true">”</span>
                </span>
              </li>
              <li>
                <span className="red">
                  <span aria-hidden="true">“</span>
                  cargo
                  <span aria-hidden="true">”</span>
                </span>
                :{' '}
                <span className="green">
                  <span aria-hidden="true">“</span>
                  Desenvolvedor Front-end Pleno
                  <span aria-hidden="true">”</span>
                </span>
              </li>
              <li>
                <span className="red">
                  <span aria-hidden="true">“</span>
                  atividades
                  <span aria-hidden="true">”</span>
                </span>
                :{' '}
                <span className="green">
                  <span aria-hidden="true">“</span>
                  Desenvolvimento e manutenção da aplicação Canalfy utilizando
                  NextJS, Styled Components, React Hook Form, Axios e Redux
                  <span aria-hidden="true">”</span>
                </span>
              </li>
            </ul>
          </S.SpaceTwo>
          <S.SpaceOne>{'},'}</S.SpaceOne>
          <S.SpaceOne>{'{'}</S.SpaceOne>
          <S.SpaceTwo>
            <ul>
              <li>
                <span className="red">
                  <span aria-hidden="true">“</span>
                  empresa
                  <span aria-hidden="true">”</span>
                </span>
                :{' '}
                <span className="green">
                  <span aria-hidden="true">“</span>
                  Noweb
                  <span aria-hidden="true">”</span>
                </span>
              </li>
              <li>
                <span className="red">
                  <span aria-hidden="true">“</span>
                  período
                  <span aria-hidden="true">”</span>
                </span>
                :{' '}
                <span className="green">
                  <span aria-hidden="true">“</span>
                  Fev/2021 - Ago/2021
                  <span aria-hidden="true">”</span>
                </span>
              </li>
              <li>
                <span className="red">
                  <span aria-hidden="true">“</span>
                  cargo
                  <span aria-hidden="true">”</span>
                </span>
                :{' '}
                <span className="green">
                  <span aria-hidden="true">“</span>
                  Desenvolvedor Fullstack (Freelancer)
                  <span aria-hidden="true">”</span>
                </span>
              </li>
              <li>
                <span className="red">
                  <span aria-hidden="true">“</span>
                  atividades
                  <span aria-hidden="true">”</span>
                </span>
                :{' '}
                <span className="green">
                  <span aria-hidden="true">“</span>
                  Desenvolvimento de diversos sites e sistemas web voltados para
                  as mais diversas áreas de atuação, atuei na criação de sites
                  em HTML5, Sass e Javascript, sistemas em NextJS e Styled
                  Components, além do desenvolvimento do novo Painel de Controle
                  feito em Laravel
                  <span aria-hidden="true">”</span>
                </span>
              </li>
            </ul>
          </S.SpaceTwo>
          <S.SpaceOne>{'},'}</S.SpaceOne>
          <S.SpaceOne>{'{'}</S.SpaceOne>
          <S.SpaceTwo>
            <ul>
              <li>
                <span className="red">
                  <span aria-hidden="true">“</span>
                  empresa
                  <span aria-hidden="true">”</span>
                </span>
                :{' '}
                <span className="green">
                  <span aria-hidden="true">“</span>
                  Grano Studio
                  <span aria-hidden="true">”</span>
                </span>
              </li>
              <li>
                <span className="red">
                  <span aria-hidden="true">“</span>
                  período
                  <span aria-hidden="true">”</span>
                </span>
                :{' '}
                <span className="green">
                  <span aria-hidden="true">“</span>
                  Set/2020 - Ago/2021
                  <span aria-hidden="true">”</span>
                </span>
              </li>
              <li>
                <span className="red">
                  <span aria-hidden="true">“</span>
                  cargo
                  <span aria-hidden="true">”</span>
                </span>
                :{' '}
                <span className="green">
                  <span aria-hidden="true">“</span>
                  Desenvolvedor Web
                  <span aria-hidden="true">”</span>
                </span>
              </li>
              <li>
                <span className="red">
                  <span aria-hidden="true">“</span>
                  atividades
                  <span aria-hidden="true">”</span>
                </span>
                :{' '}
                <span className="green">
                  <span aria-hidden="true">“</span>
                  Atuei na criação de sites instituionais e blogs utilizando
                  NextJS, Styled Components e utilizando o Wordpress como REST
                  API para servir as informações para os projetos, além de dar
                  manutenção à projetos legados feitos em Wordpress, HTML5, Sass
                  e JQuery ou JS Vanilla
                  <span aria-hidden="true">”</span>
                </span>
              </li>
            </ul>
          </S.SpaceTwo>
          <S.SpaceOne>{'}'}</S.SpaceOne>
          <div aria-hidden="true">]</div>
        </div>
      </S.TabPanels>
    </S.Wrapper>
  )
}

export default VSCode
