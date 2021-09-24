import React from 'react'
import { render, screen } from '@testing-library/react'
import { Button } from '.'

it('teste', () => {
	render(<Button />)
  expect(screen.getByRole('button', { name: /button/i })).toBeInTheDocument()
})