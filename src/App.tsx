import React from 'react'
import { ThemeProvider } from 'styled-components'

import webpacklogo from 'assets/images/webpack.png'
import reactlogo, { ReactComponent as ReactLogo } from 'assets/images/react.svg'

import { Button } from 'components'
import { GlobalStyles } from 'styles/GlobalStyles'
import { myTheme } from 'styles/Theme'

export const App: React.VFC = () => {
  return (
    <ThemeProvider theme={myTheme}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {/* Global styles */}
        <GlobalStyles />

        {/* Sample use images png, gif jpg */}
        <img
          src={webpacklogo}
          alt="webpack logo in png format"
          style={{ width: '100px' }}
        />

        {/* Sample use images svg */}
        <img
          src={reactlogo}
          alt="react logo in svg format"
          style={{ width: '100px' }}
        />
        <ReactLogo
          style={{ width: '100px' }}
          aria-label="react logo in svg format using as component"
        />

        <h1 style={{ fontSize: '4rem', margin: '2rem 0 2rem' }}>
          Wellcome to React with webpack
        </h1>

        <Button onClick={() => alert('Hi, the button has been clicked!')}>
          Clique aqui
        </Button>
      </div>
    </ThemeProvider>
  )
}

export default App
