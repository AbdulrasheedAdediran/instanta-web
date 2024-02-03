import { getCookie, deleteCookie, setCookie } from 'cookies-next'

export const cookies = {
	get: (key: string) => {
		const cookie = getCookie(key)
		return cookie
	},

	set: (key: string, value: string, expires?: Date) => {
		return setCookie(key, value, { expires })
	},

	delete: (key: string) => {
		return deleteCookie(key)
	},
}
