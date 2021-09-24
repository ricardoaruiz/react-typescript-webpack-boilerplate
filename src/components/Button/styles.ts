import styled, { css } from 'styled-components'

type ButtonProps = {
  variant?: 'primary' | 'secondary' | 'outlined'
}

const buttonModifiers = {
  primary: () => css`
    background-color: #1e78c0;
    color: #fff;

    &:hover {
      background-color: #8ed6fb;
    }
    &:disabled {
      background-color: #1e78c0;
    }
  `,
  secondary: () => css`
    background-color: #ffc133;
    color: #fff;

    &:hover {
      background-color: #ffb809;
    }
    &:disabled {
      background-color: #ffc133;
    }
  `,
  outlined: () => css`
    background-color: transparent;
    color: #1e78c0;

    border: 1px solid #1e78c0;
  `,
}

export const Button = styled.button<ButtonProps>`
  ${({ variant = 'primary' }) => css`
    border: none;
    padding: 10px;
    border-radius: 4px;
    font-size: 16px;
    font-weight: 700;
    cursor: pointer;

    ${buttonModifiers[variant]};

    &:disabled {
      filter: brightness(0.9);
      cursor: not-allowed;
    }
  `};
`
