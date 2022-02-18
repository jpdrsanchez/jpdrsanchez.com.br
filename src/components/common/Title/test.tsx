import { render, screen } from '@testing-library/react'

import Title from '.'

describe('<Title />', () => {
  it('Should render default props correctly', () => {
    render(<Title>Title</Title>)

    const title = screen.getByRole('heading', { name: /title/i, level: 1 })
    expect(title).toBeInTheDocument()
    expect(title).toHaveStyleRule('font-size', '3rem')
    expect(title).toHaveStyleRule('font-weight', '700')
    expect(title).toHaveStyleRule('line-height', '3.5rem')
    expect(title).toHaveStyleRule('text-align', 'left')
  })

  it('Should render custom levels correctly', () => {
    render(
      <>
        <Title level={2}>Title</Title>
        <Title level={3}>Title</Title>
      </>
    )

    expect(screen.getByRole('heading', { level: 2 })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3 })).toBeInTheDocument()
  })

  it('Should render custom props correctly', () => {
    render(
      <>
        <Title align="center" level={2}>
          Title
        </Title>
        <Title elementStyle="medium" align="right" level={3}>
          Title
        </Title>
      </>
    )

    const titleH2 = screen.getByRole('heading', { level: 2 })
    const titleH3 = screen.getByRole('heading', { level: 3 })

    expect(titleH2).toHaveStyleRule('text-align', 'center')
    expect(titleH3).toHaveStyleRule('font-size', '1.5rem')
    expect(titleH3).toHaveStyleRule('font-weight', '600')
    expect(titleH3).toHaveStyleRule('line-height', '2rem')
    expect(titleH3).toHaveStyleRule('text-align', 'right')
  })
})
