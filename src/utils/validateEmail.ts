interface IValidateEmail {
	success: boolean
	message: string
}

export const validateEmail = (email: string): IValidateEmail => {
	const value = /\S+@\S+\.\S+/.test(email)
	if (email.length === 0) {
		return { success: false, message: 'Email cannot be empty' }
	}

	if (!value) {
		return { success: false, message: 'Please enter a valid email address' }
	}

	return { success: true, message: '' }
}
