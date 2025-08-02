import type { Meta, StoryObj } from '@storybook/react-vite';

import { UsernameEditor, type UsernameEditorProps } from './UsernameEditor';
import { expect, fn } from 'storybook/test';

const defaultProps: UsernameEditorProps = {
  username: 'FooBar',
  onDone: fn(),
  onCancel: fn(),
};

const meta = {
  title: 'users/UsernameEditor',
  component: UsernameEditor,
  tags: ['autodocs'],
  args: {
    ...defaultProps,
  },
} satisfies Meta<typeof UsernameEditor>;

type Story = StoryObj<typeof meta>;

export default meta;

export const Default: Story = {
  args: {
    ...defaultProps,
  },
};
Default.storyName = 'Base';

export const NoUsername: Story = {
  args: {
    username: '',
  },
};
NoUsername.storyName = 'No username';

export const AutomatedConfirm: Story = {
  args: {
    ...defaultProps,
  },
  play: async ({ canvas, userEvent, args }) => {
    const confirmButton = canvas.getByRole('button', { name: 'Confirm Edit' });
    await expect(confirmButton).toBeDisabled();

    const inputField = canvas.getByPlaceholderText('Enter a username');
    await expect(inputField).toBeVisible();
    await userEvent.clear(inputField);
    await expect(confirmButton).toBeDisabled();
    await userEvent.type(inputField, 'A new');
    await expect(confirmButton).toBeEnabled();
    await userEvent.type(inputField, ' username');
    await userEvent.click(confirmButton);
    await expect(args.onDone).toHaveBeenCalledWith('A new username');
  },
};
AutomatedConfirm.storyName = 'Automated interactions for confirm';

export const AutomatedCancel: Story = {
  args: {
    ...defaultProps,
  },
  play: async ({ canvas, userEvent, args }) => {
    const confirmButton = canvas.getByRole('button', { name: 'Confirm Edit' });
    await expect(confirmButton).toBeDisabled();

    const cancelButton = canvas.getByRole('button', { name: 'Cancel Edit' });
    await expect(cancelButton).toBeEnabled();

    const inputField: HTMLInputElement = canvas.getByPlaceholderText('Enter a username');
    await expect(inputField).toBeVisible();
    await userEvent.type(inputField, 'A new username');
    await expect(confirmButton).toBeEnabled();

    await userEvent.click(cancelButton);
    await expect(confirmButton).toBeDisabled();
    await expect(inputField.value, 'Value should reset to initial').toEqual(args.username);
  },
};
AutomatedCancel.storyName = 'Automated interactions for cancel';
