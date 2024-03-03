import { Suspense } from 'react';
import dynamic from 'next/dynamic';

import type { Meta, StoryObj } from '@storybook/react';
import type { ReactElement } from 'react';

const Home = dynamic(() => import('@/app/[lng]/page'), { ssr: true });

const meta: Meta = {
  title: 'Pages/Home/Home',
  component: Home,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Home>;

function HomeComponent(): ReactElement {
  return (
    <Suspense>
      <Home params={{ lng: 'en' }} />
    </Suspense>
  );
}

export const HomeStories: Story = {
  name: 'HomeStory',
  render: () => <HomeComponent />,
};
