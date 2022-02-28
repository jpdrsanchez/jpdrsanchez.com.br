import { IoSearchSharp } from 'react-icons/io5'
import * as S from './styles'

const SearchForm = () => {
  return (
    <S.Wrapper>
      <form onSubmit={e => e.preventDefault()}>
        <label className="hidden" htmlFor="pesquisar">
          Pesquisar por um artigo
        </label>
        <input
          type="text"
          name="pesquisar"
          id="pesquisar"
          placeholder="Pesquisar Artigo..."
        />
        <button type="submit">
          <span className="hidden">Pesquisar</span>
          <IoSearchSharp />
        </button>
      </form>
    </S.Wrapper>
  )
}

export default SearchForm
