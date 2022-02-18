import { render, screen } from '@testing-library/react'

import Text from '.'

describe('<Title />', () => {
  it('Should render default props correctly', () => {
    render(<Text>Text</Text>)

    const text = screen.getByText(/text/i)
    expect(text).toBeInTheDocument()
    expect(text).toHaveStyleRule('font-size', '1rem')
    expect(text).toHaveStyleRule('font-weight', '400')
    expect(text).toHaveStyleRule('line-height', '1.5rem')
    expect(text).toHaveStyleRule('text-align', 'left')
  })

  it('Should render custom props correctly', () => {
    render(
      <>
        <Text align="center">Text One</Text>
        <Text elementStyle="small" align="right">
          Text Two
        </Text>
      </>
    )

    const textOne = screen.getByText(/text one/i)
    const textTwo = screen.getByText(/text two/i)

    expect(textOne).toHaveStyleRule('text-align', 'center')
    expect(textTwo).toHaveStyleRule('font-size', '.875rem')
    expect(textTwo).toHaveStyleRule('line-height', '1.25rem')
    expect(textTwo).toHaveStyleRule('text-align', 'right')
  })
})
