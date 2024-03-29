import React, { useEffect, useState } from 'react'

export default function useDebounce(value: string, delay: number = 500) {
	const [debounceValue, setDebounceValue] = useState(value)
	useEffect(() => {
		const handler = setTimeout(() => {
			setDebounceValue(value)
		}, delay)

		return () => {
			clearTimeout(handler)
		}
	}, [value, delay])

	return debounceValue
}
