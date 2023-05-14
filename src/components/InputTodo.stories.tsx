import InputTodo from './InputTodo';
import type { Meta, StoryObj } from '@storybook/react';

type Story = StoryObj<typeof meta>;

/**
 * `InputTodo`은 입력 필드 컴포넌트입니다.
 */
const meta = {
  title: 'InputTodo',
  component: InputTodo,
  argTypes: {},
} satisfies Meta<typeof InputTodo>;

export default meta;

export const InputTodoDefault: Story = {
  args: {},
};
