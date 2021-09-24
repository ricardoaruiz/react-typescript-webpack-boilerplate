import React from 'react'

import webpacklogo from './assets/images/webpack.png'
import reactlogo, {
  ReactComponent as ReactLogo,
} from './assets/images/react.svg'

export const App: React.VFC = () => {
  return (
    <div>
      <img src={webpacklogo} alt="webpack logo" style={{ width: '100px' }} />

      <img src={reactlogo} alt="react logo" style={{ width: '100px' }} />
      <ReactLogo style={{ width: '100px' }} />

      <h1>Wellcome to React with webpack</h1>
    </div>
  )
}

export default App
