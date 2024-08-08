import { render, screen } from '@testing-library/react'
import { Modal } from '@/app/components/Modal'

it('renders Modal component', () => {
  render(<Modal />)
  const element = screen.getByText('PLAYING FROM ALBUM')
  expect(element).toBeInTheDocument()
})