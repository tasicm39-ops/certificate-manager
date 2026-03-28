/** Backend base URL (no trailing slash). REACT_APP_API_URL overrides this when set (e.g. on Render). */
const DEFAULT_PRODUCTION_API = 'https://certificate-manager-2kad.onrender.com'

/** Common typo: 2kda vs 2kad — wrong host has no CORS / not your API. */
const WRONG_HOST = 'certificate-manager-2kda.onrender.com'
const CORRECT_HOST = 'certificate-manager-2kad.onrender.com'

function normalizeApiBase(url: string): string {
    const trimmed = url.replace(/\/$/, '')
    if (trimmed.includes(WRONG_HOST)) {
        return trimmed.replace(WRONG_HOST, CORRECT_HOST)
    }
    return trimmed
}

function getApiBaseUrl(): string {
    const raw = process.env.REACT_APP_API_URL?.trim()
    if (raw) {
        return normalizeApiBase(raw)
    }
    if (process.env.NODE_ENV === 'development') {
        return 'http://localhost:10000'
    }
    return DEFAULT_PRODUCTION_API
}

export const API_URL = getApiBaseUrl()
