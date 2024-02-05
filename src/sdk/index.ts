import * as api from './generated'
import { ApiRequestOptions } from './generated/core/ApiRequestOptions'

api.OpenAPI.BASE = process.env.NEXT_PUBLIC_BASE_URL as string

export const apiConfig = api

apiConfig.OpenAPI.TOKEN = async (a: ApiRequestOptions) => {
	const token = localStorage.getItem('accessToken') || ''
	// console.log("getting token", token);
	try {
		return JSON.parse(token)
	} catch {
		return token
	}
}
