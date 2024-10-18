import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Header from '../components/header'


describe('Header', () => {
  it('renders a Log in span', () => {
    render(<Header/>);
    const loginText = screen.getByText(/log in/i);
    expect(loginText).toBeInTheDocument();
  })

  it('renders a Sign up button with correct text and styles', () => {
    render(<Header/>);

    const signUpButton = screen.getByRole('button', {name: /sign up/i});
    expect(signUpButton).toBeInTheDocument();

    expect(signUpButton).toHaveClass('bg-[#000]')
    expect(signUpButton).toHaveTextContent(/sign up/i)
  })
})