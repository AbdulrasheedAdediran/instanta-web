import React from 'react'

export const validateNumber = (number: string) => {
	if (!/^\d+$/.test(number)) {
		return false
	}

	return true
}
