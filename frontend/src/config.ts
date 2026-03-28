/** Backend base URL (no trailing slash). REACT_APP_API_URL overrides this when set (e.g. on Render). */
const DEFAULT_PRODUCTION_API = 'https://certificate-manager-2kad.onrender.com'

function getApiBaseUrl(): string {
    const raw = process.env.REACT_APP_API_URL?.trim()
    if (raw) {
        return raw.replace(/\/$/, '')
    }
    if (process.env.NODE_ENV === 'development') {
        return 'http://localhost:10000'
    }
    return DEFAULT_PRODUCTION_API
}

export const API_URL = getApiBaseUrl()
