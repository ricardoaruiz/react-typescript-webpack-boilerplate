import React from 'react'

import webpack from '../../assets/images/webpack.png'
import reactlogo from '../../assets/images/react.svg'

import * as S from './styles'

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary' | 'outlined'
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  ...rest
}) => {
  return (
    <>
      <S.Button variant={variant} {...rest}>
        {children}
        <img src={webpack} alt="webpack" style={{ width: '24px' }} />
        <img src={reactlogo} alt="logo" style={{ width: '24px' }} />
        {/* <Logo /> */}
      </S.Button>
    </>
  )
}
