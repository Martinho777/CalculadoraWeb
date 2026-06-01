import type { Meta, StoryObj } from '@storybook/react-vite'
import { Keyboard } from '../components/Keyboard'

const meta = {
  title: 'Components/Keyboard',
  component: Keyboard,
  args: {
    onPress: () => {}
  }
} satisfies Meta<typeof Keyboard>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}