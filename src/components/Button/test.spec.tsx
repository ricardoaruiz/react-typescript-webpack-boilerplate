import React from 'react'
import { render, screen } from '@testing-library/react'
import { Button } from '.'

it('teste', () => {
  render(<Button>Clique aqui</Button>)
  expect(
    screen.getByRole('button', { name: /clique aqui/i })
  ).toBeInTheDocument()
})
