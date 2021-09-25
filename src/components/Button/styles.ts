import styled, { css, DefaultTheme } from 'styled-components'

type ButtonProps = {
  variant?: 'primary' | 'secondary' | 'outlined'
}

const buttonModifiers = {
  primary: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.primary};
    color: ${theme.colors.white};

    &:hover {
      background-color: ${theme.colors.privaryHover};
    }
    &:disabled {
      background-color: ${theme.colors.primary};
    }
  `,
  secondary: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.secondary};
    color: ${theme.colors.white};

    &:hover {
      background-color: ${theme.colors.secondaryHover};
    }
    &:disabled {
      background-color: ${theme.colors.secondary};
    }
  `,
  outlined: (theme: DefaultTheme) => css`
    background-color: transparent;
    color: ${theme.colors.primary};

    border: 1px solid ${theme.colors.primary};
  `,
}

export const Button = styled.button<ButtonProps>`
  ${({ theme, variant = 'primary' }) => css`
    border: none;
    padding: 10px;
    border-radius: 4px;
    font-size: 16px;
    font-weight: 700;
    cursor: pointer;

    ${buttonModifiers[variant](theme)};

    &:disabled {
      filter: brightness(0.9);
      cursor: not-allowed;
    }
  `};
`
