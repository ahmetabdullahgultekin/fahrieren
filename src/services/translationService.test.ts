import { describe, it, expect, beforeEach } from 'vitest'
import { TranslationService } from './translationService'

// Unit tests for the in-house i18n service. translate() resolves a dot-path key
// against the current language's nested dictionary and falls back to the raw key.
describe('TranslationService', () => {
    let svc: TranslationService

    beforeEach(() => {
        svc = TranslationService.getInstance()
        svc.setLanguage('tr')
    })

    it('defaults to Turkish', () => {
        // A fresh instance starts in TR (and we reset to TR in beforeEach).
        expect(svc.getLanguage()).toBe('tr')
    })

    it('resolves a known nested key in Turkish', () => {
        expect(svc.translate('home.categories.title')).toBe('Kategori Seçin')
    })

    it('resolves the same key differently in English', () => {
        svc.setLanguage('en')
        expect(svc.getLanguage()).toBe('en')
        const en = svc.translate('home.categories.title')
        expect(en).not.toBe('Kategori Seçin')
        expect(en.length).toBeGreaterThan(0)
        expect(en).not.toBe('home.categories.title') // i.e. it was actually translated
    })

    it('falls back to the raw key for an unknown path', () => {
        expect(svc.translate('this.key.does.not.exist')).toBe('this.key.does.not.exist')
    })

    it('switches language and reflects it on subsequent lookups', () => {
        const tr = svc.translate('home.categories.title')
        svc.setLanguage('en')
        const en = svc.translate('home.categories.title')
        expect(tr).not.toBe(en)
    })
})
