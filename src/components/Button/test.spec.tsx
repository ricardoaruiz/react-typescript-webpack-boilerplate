import React from 'react'
import { screen } from '@testing-library/react'
import { renderWithTheme } from '../../utils/test-utils'
import { Button } from '.'

it('teste', () => {
  renderWithTheme(<Button>Clique aqui</Button>)
  expect(
    screen.getByRole('button', { name: /clique aqui/i })
  ).toBeInTheDocument()
})
