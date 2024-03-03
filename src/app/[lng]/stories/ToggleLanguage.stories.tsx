import ToggleLanguage from '../components/ToggleLanguage';

import type { Meta, StoryObj } from '@storybook/react';
import type { ReactElement } from 'react';

const meta: Meta = {
  title: 'Pages/Home/ToggleLanguage',
  component: ToggleLanguage,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ToggleLanguage>;

function ToggleLanguageComponent(): ReactElement {
  return (
    <ToggleLanguage />
  );
}

export const ToggleLanguageStory: Story = {
  name: 'Default',
  render: () => <ToggleLanguageComponent />,
};
