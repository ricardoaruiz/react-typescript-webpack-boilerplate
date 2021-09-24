import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { Button, ButtonProps } from './index'

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    variant: {
      type: 'select',
      options: ['primary', 'secondary', 'outlined'],
    },
    onClick: { action: 'clicked' },
  },
} as Meta

export const Basic: Story<ButtonProps> = (args) => (
  <Button {...args}>Clique aqui</Button>
)
Basic.args = {
  variant: 'primary',
  disabled: false,
}
