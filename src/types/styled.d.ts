import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string
      privaryHover: string
      secondary: string
      secondaryHover: string
      white: string
      black: string
    }
  }
}
