import { render, screen } from '@testing-library/react'
import { HeaderFavorites } from '@/app/components/HeaderFavorites'

it('renders HeaderFavorites component', () => {
  render(<HeaderFavorites />)
  const element = screen.getByText('Your Favorites')
  expect(element).toBeInTheDocument()
});

it('renders HeaderFavorites component', () => {
  render(<HeaderFavorites />)
  const element = screen.getByText('Insert your playlist name')
  expect(element).toBeInTheDocument()
})