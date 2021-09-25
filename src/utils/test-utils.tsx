import React from 'react'
import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { myTheme } from '../styles/Theme'

export const renderWithTheme = (children: React.ReactNode) => {
  return render(<ThemeProvider theme={myTheme}>{children}</ThemeProvider>)
}
