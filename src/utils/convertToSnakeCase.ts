export const convertToSnakeCase = (string: string, from: string = ' '): string => {
	const value = string.trim().split(from).join('_')

	return value
}
