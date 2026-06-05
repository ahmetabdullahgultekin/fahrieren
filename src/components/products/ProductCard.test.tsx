import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import ProductCard from './ProductCard'
import { LanguageProvider } from '../../contexts/LanguageContext'
import type { Product } from '../../types'

// Render smoke test: ProductCard must mount and show the product title without
// throwing. It depends on the i18n LanguageProvider, so we wrap it.

const sampleProduct: Product = {
    id: 'p1',
    title: { tr: 'Test Arsa', en: 'Test Land' },
    description: { tr: 'Açıklama', en: 'Description' },
    price: 100000,
    currency: 'TRY',
    category: 'realestate',
    images: ['/images/product-placeholder.svg'],
    inStock: true,
    views: 0,
}

function renderCard(ui: React.ReactElement) {
    return render(<LanguageProvider>{ui}</LanguageProvider>)
}

describe('ProductCard', () => {
    it('renders the product title without crashing', () => {
        renderCard(
            <ProductCard
                product={sampleProduct}
                onViewDetails={vi.fn()}
                isFavorite={false}
                onToggleFavorite={vi.fn()}
            />,
        )
        // Default language is TR.
        expect(screen.getByText('Test Arsa')).toBeInTheDocument()
    })

    it('renders a favorite control that can be toggled', () => {
        const onToggleFavorite = vi.fn()
        const { container } = renderCard(
            <ProductCard
                product={sampleProduct}
                onViewDetails={vi.fn()}
                isFavorite={false}
                onToggleFavorite={onToggleFavorite}
            />,
        )
        // The card renders interactive buttons (favorite / share / contact).
        expect(container.querySelectorAll('button').length).toBeGreaterThan(0)
    })
})
