import { render, screen } from '@testing-library/react'
import Container from '.'

describe('<Container />', () => {
  it('Should render children correctly', () => {
    render(
      <Container>
        <div data-testid="test" />
        <div data-testid="test" />
        <div data-testid="test" />
        <div data-testid="test" />
      </Container>
    )

    expect(screen.getAllByTestId('test')).toHaveLength(4)
  })
})
