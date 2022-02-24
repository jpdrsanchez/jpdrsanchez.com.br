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
          <S.SpaceOne>{'}'}</S.SpaceOne>
          <div aria-hidden="true">]</div>
        </div>
      </S.TabPanels>
    </S.Wrapper>
  )
}

export default VSCode
