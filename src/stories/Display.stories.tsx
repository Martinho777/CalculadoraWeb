import type { Meta, StoryObj } from '@storybook/react-vite'
import { Display } from '../components/Display'

const meta = {
  title: 'Components/Display',
  component: Display
} satisfies Meta<typeof Display>

export default meta

type Story = StoryObj<typeof meta>

export const Empty: Story = {
  args: {
    value: '0'
  }
}

export const WithNumber: Story = {
  args: {
    value: '123456789'
  }
}

export const ErrorState: Story = {
  args: {
    value: 'ERROR'
  }
}