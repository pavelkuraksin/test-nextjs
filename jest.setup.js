jest.mock('next/navigation', () => ({
  useParams: () => ({ lng: 'en' }),
}));
