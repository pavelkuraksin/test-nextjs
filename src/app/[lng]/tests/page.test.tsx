import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';

import Page from '../page';

describe('Page', () => {
  it('renders a heading', async () => {
    render(await Page({ params: { lng: 'en' } }));
    const heading = screen.getByRole('main');
    expect(heading).toBeInTheDocument();
  });
});
