import type { Meta, StoryObj } from '@storybook/react-vite'
import { Button } from '../components/Button'

const meta = {
  title: 'Components/Button',
  component: Button,
  args: {
    label: '7',
    onPress: () => {}
  }
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof meta>

export const NumberButton: Story = {
  args: {
    label: '7',
    variant: 'number'
  }
}

export const OperatorButton: Story = {
  args: {
    label: '+',
    variant: 'operator'
  }
}

export const EqualButton: Story = {
  args: {
    label: '=',
    variant: 'equal'
  }
}