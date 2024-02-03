import React from 'react'

export const validateDecimal = (number: string) => {
	if (!/^\d+(\.\d*)?$/.test(number)) {
		return false
	}
	return true
}
