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
          <S.SpaceOne aria-hidden="true">{'{'}</S.SpaceOne>
          <S.SpaceTwo>
            <ul>
              <li aria-label="Empresa: Caju Benefícios">
                <span className="red" aria-hidden="true">
                  “empresa”
                </span>
                <span aria-hidden="true">:</span>{' '}
                <span className="green" aria-hidden="true">
                  “Caju Benefícios”
                </span>
              </li>
              <li aria-label="Período: De fevereiro de 2022 até o momento">
                <span className="red" aria-hidden="true">
                  “período”
                </span>
                <span aria-hidden="true">:</span>{' '}
                <span className="green" aria-hidden="true">
                  “Fev/2022 - O momento”
                </span>
              </li>
              <li aria-label="Cargo: Engenheiro de Software">
                <span className="red" aria-hidden="true">
                  “cargo”
                </span>
                <span aria-hidden="true">:</span>{' '}
                <span className="green" aria-hidden="true">
                  “Software Engineer”
                </span>
              </li>
              <li aria-label="Atividades: Em breve uma descrição linda e detalhada">
                <span className="red" aria-hidden="true">
                  “atividades”
                </span>
                <span aria-hidden="true">:</span>{' '}
                <span className="green" aria-hidden="true">
                  “Em breve uma descrição linda e detalhada 💅”
                </span>
              </li>
            </ul>
          </S.SpaceTwo>
          <S.SpaceOne aria-hidden="true">{'},'}</S.SpaceOne>
          <S.SpaceOne aria-hidden="true">{'{'}</S.SpaceOne>
          <S.SpaceTwo>
            <ul>
              <li aria-label="Empresa: Canalfy">
                <span className="red" aria-hidden="true">
                  “empresa”
                </span>
                <span aria-hidden="true">:</span>{' '}
                <span className="green" aria-hidden="true">
                  “Canalfy”
                </span>
              </li>
              <li aria-label="Período: De Agosto de 2021 à Fevereiro de 2022">
                <span className="red" aria-hidden="true">
                  “período”
                </span>
                <span aria-hidden="true">:</span>{' '}
                <span className="green" aria-hidden="true">
                  “Ago/2021 - Fev/2022”
                </span>
              </li>
              <li aria-label="Cargo: Desenvolvedor Front-End Pleno">
                <span className="red" aria-hidden="true">
                  “cargo”
                </span>
                <span aria-hidden="true">:</span>{' '}
                <span className="green" aria-hidden="true">
                  “Desenvolvedor Front-end Pleno”
                </span>
              </li>
              <li aria-label="Atividades: Desenvolvimento e manutenção da aplicação Canalfy utilizando NextJS, Styled Components, React Hook Form, Axios e Redux">
                <span className="red" aria-hidden="true">
                  “atividades”
                </span>
                <span aria-hidden="true">:</span>{' '}
                <span className="green" aria-hidden="true">
                  “Desenvolvimento e manutenção da aplicação Canalfy utilizando
                  NextJS, Styled Components, React Hook Form, Axios e Redux”
                </span>
              </li>
            </ul>
          </S.SpaceTwo>
          <S.SpaceOne aria-hidden="true">{'},'}</S.SpaceOne>
          <S.SpaceOne aria-hidden="true">{'{'}</S.SpaceOne>
          <S.SpaceTwo>
            <ul>
              <li aria-label="Empresa: Noweb">
                <span className="red" aria-hidden="true">
                  “empresa”
                </span>
                <span aria-hidden="true">:</span>{' '}
                <span className="green" aria-hidden="true">
                  “Noweb”
                </span>
              </li>
              <li aria-label="Período: De fevereiro de 2021 à Agosto de 2021">
                <span className="red" aria-hidden="true">
                  “período”
                </span>
                <span aria-hidden="true">:</span>{' '}
                <span className="green" aria-hidden="true">
                  “Fev/2021 - Ago/2021”
                </span>
              </li>
              <li aria-label="Cargo: Desenvolvedor Fullstack (Freelancer)">
                <span className="red" aria-hidden="true">
                  “cargo”
                </span>
                <span aria-hidden="true">:</span>{' '}
                <span className="green" aria-hidden="true">
                  “Desenvolvedor Fullstack (Freelancer)”
                </span>
              </li>
              <li aria-label="Atividades: Desenvolvimento de diversos sites e sistemas web voltados para as mais diversas áreas de atuação, atuei na criação de sites em HTML5, Sass e Javascript, sistemas em NextJS e Styled Components, além do desenvolvimento do novo Painel de Controle feito em Laravel">
                <span className="red" aria-hidden="true">
                  “atividades”
                </span>
                <span aria-hidden="true">:</span>{' '}
                <span className="green" aria-hidden="true">
                  “Desenvolvimento de diversos sites e sistemas web voltados
                  para as mais diversas áreas de atuação, atuei na criação de
                  sites em HTML5, Sass e Javascript, sistemas em NextJS e Styled
                  Components, além do desenvolvimento do novo Painel de Controle
                  feito em Laravel”
                </span>
              </li>
            </ul>
          </S.SpaceTwo>
          <S.SpaceOne aria-hidden="true">{'},'}</S.SpaceOne>
          <S.SpaceOne aria-hidden="true">{'{'}</S.SpaceOne>
          <S.SpaceTwo>
            <ul>
              <li aria-label="Empresa: Grano Studio">
                <span className="red" aria-hidden="true">
                  “empresa”
                </span>
                <span aria-hidden="true">:</span>{' '}
                <span className="green" aria-hidden="true">
                  “Grano Studio”
                </span>
              </li>
              <li aria-label="Período: De setembro de 2020 à Agosto de 2021">
                <span className="red" aria-hidden="true">
                  “período”
                </span>
                <span aria-hidden="true">:</span>{' '}
                <span className="green" aria-hidden="true">
                  “Set/2020 - Ago/2021”
                </span>
              </li>
              <li aria-label="Cargo: Desenvolvedor Web">
                <span className="red" aria-hidden="true">
                  “cargo”
                </span>
                <span aria-hidden="true">:</span>{' '}
                <span className="green" aria-hidden="true">
                  “Desenvolvedor Web”
                </span>
              </li>
              <li aria-label="Atividades: Atuei na criação de sites instituionais e blogs utilizando NextJS, Styled Components e utilizando o Wordpress como REST API para servir as informações para os projetos, além de dar manutenção à projetos legados feitos em Wordpress, HTML5, Sass e JQuery ou JS Vanilla">
                <span className="red" aria-hidden="true">
                  “atividades”
                </span>
                <span aria-hidden="true">:</span>{' '}
                <span className="green" aria-hidden="true">
                  “Atuei na criação de sites instituionais e blogs utilizando
                  NextJS, Styled Components e utilizando o Wordpress como REST
                  API para servir as informações para os projetos, além de dar
                  manutenção à projetos legados feitos em Wordpress, HTML5, Sass
                  e JQuery ou JS Vanilla”
                </span>
              </li>
            </ul>
          </S.SpaceTwo>
          <S.SpaceOne aria-hidden="true">{'}'}</S.SpaceOne>
          <div aria-hidden="true">]</div>
        </div>
      </S.TabPanels>
    </S.Wrapper>
  )
}

export default VSCode
