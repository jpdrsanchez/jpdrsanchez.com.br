import Link from 'next/link'
import { MouseEvent, useEffect, useState } from 'react'

import * as S from './styles'
import useMobile from 'hooks/useMobile'

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false)
  const isMobile = useMobile(767)

  useEffect(() => {
    if (isOpen) document.body.classList.add('no-overflow')
    else document.body.classList.remove('no-overflow')
  }, [isOpen])

  useEffect(() => {
    if (!isMobile) setIsOpen(false)
  }, [isMobile])

  const handleClose = (e: MouseEvent) => {
    e.preventDefault()

    if (isMobile) {
      const target = e.target as HTMLElement

      if (e.currentTarget === target || target.hasAttribute('href'))
        setIsOpen(false)
    }
  }

  return (
    <S.Navigation>
      <button
        type="button"
        aria-expanded={isOpen ? 'true' : 'false'}
        aria-controls="menu"
        aria-haspopup="menu"
        className={isOpen ? 'active' : ''}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{isOpen ? 'Abrir Menu' : 'Fechar Menu'}</span>
      </button>
      <div className={isOpen ? 'active' : ''} onClick={handleClose}>
        <ul
          id="menu"
          role="menu"
          aria-orientation={isMobile ? 'vertical' : 'horizontal'}
        >
          <li role="menuitem">
            <Link href="/">Sobre</Link>
          </li>
          <li role="menuitem">
            <Link href="/blog">Blog</Link>
          </li>
          <li role="menuitem">
            <Link href="/labs">Labs</Link>
          </li>
          <li role="menuitem">
            <Link href="/contato">Contato</Link>
          </li>
        </ul>
      </div>
    </S.Navigation>
  )
}

export default Menu
