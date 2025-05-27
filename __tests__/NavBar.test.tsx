import { render, screen } from '@testing-library/react';
import NavBar from '@/components/NavBar';
import { ThemeProvider } from 'next-themes';
import { useRouter } from 'next/router';

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

describe('NavBar', () => {
  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({
      asPath: '/',
    });
  });

  it('renders the NavBar component', () => {
    render(
      <ThemeProvider defaultTheme="light" attribute="class">
        <NavBar />
      </ThemeProvider>
    );

    expect(screen.getByText('MJ Linane')).toBeInTheDocument();
    expect(screen.getByText('Developer, Designer, Teacher')).toBeInTheDocument();
  });

  it('renders the menu items', () => {
    render(
      <ThemeProvider defaultTheme="light" attribute="class">
        <NavBar />
      </ThemeProvider>
    );

    expect(screen.getByText('about')).toBeInTheDocument();
    expect(screen.getByText('projects')).toBeInTheDocument();
    expect(screen.getByText('experience')).toBeInTheDocument();
    expect(screen.getByText('contact')).toBeInTheDocument();
  });

  it('renders the social media links', () => {
    render(
      <ThemeProvider defaultTheme="light" attribute="class">
        <NavBar />
      </ThemeProvider>
    );

    expect(screen.getByTitle('Twitter')).toBeInTheDocument();
    expect(screen.getByTitle('Github')).toBeInTheDocument();
    expect(screen.getByTitle('Linkedin')).toBeInTheDocument();
  });
});
