import { describe, it, expect } from 'vitest'
import { ADS_CONFIG } from './adsConfig'

// isRealSlot is the guard that keeps placeholder/empty ad slots from rendering a
// broken or empty <ins> (an AdSense policy risk). It must accept only numeric
// AdSense slot IDs and reject the PLACEHOLDER_* values shipped by default.
describe('ADS_CONFIG.isRealSlot', () => {
    it('accepts a realistic numeric AdSense slot id', () => {
        expect(ADS_CONFIG.isRealSlot('1234567890')).toBe(true)
    })

    it('rejects the default placeholder slot values', () => {
        for (const slot of Object.values(ADS_CONFIG.SLOTS)) {
            expect(ADS_CONFIG.isRealSlot(slot)).toBe(false)
        }
    })

    it('rejects empty / unconfigured slots', () => {
        expect(ADS_CONFIG.isRealSlot('')).toBe(false)
    })

    it('rejects non-numeric or too-short values', () => {
        expect(ADS_CONFIG.isRealSlot('abc')).toBe(false)
        expect(ADS_CONFIG.isRealSlot('123')).toBe(false) // < 6 digits
    })

    it('keeps the publisher id stable', () => {
        expect(ADS_CONFIG.PUBLISHER_ID).toBe('ca-pub-2016267232144093')
    })
})
