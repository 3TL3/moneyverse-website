import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import TeaserSection from '../components/TeaserSection'

describe('TeaserSection', () => {
  const defaultProps = {
    title: 'Ausstellung',
    body: 'Entdecken Sie unsere faszinierende Ausstellung.',
    linkLabel: 'Mehr zur Ausstellung',
    linkHref: '#ausstellung',
    imageUrl: 'https://picsum.photos/800/600',
    imageAlt: 'Ausstellung Foto',
    imageLeft: false,
  }

  it('renders the section title', () => {
    render(<TeaserSection {...defaultProps} />)
    expect(screen.getByRole('heading', { name: 'Ausstellung' })).toBeInTheDocument()
  })

  it('renders the body text', () => {
    render(<TeaserSection {...defaultProps} />)
    expect(screen.getByText(defaultProps.body)).toBeInTheDocument()
  })

  it('renders the call-to-action link', () => {
    render(<TeaserSection {...defaultProps} />)
    expect(screen.getByRole('link', { name: /mehr zur ausstellung/i })).toBeInTheDocument()
  })

  it('renders the image with alt text', () => {
    render(<TeaserSection {...defaultProps} />)
    expect(screen.getByRole('img', { name: 'Ausstellung Foto' })).toBeInTheDocument()
  })
})
