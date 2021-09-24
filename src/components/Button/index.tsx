import React from 'react'

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
    <S.Button variant={variant} {...rest}>
      {children}
    </S.Button>
  )
}
