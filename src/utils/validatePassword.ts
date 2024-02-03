interface IValidatePassword {
	success: boolean
	errors: string[]
}
export const validatePassword = (password: string): IValidatePassword => {
	const errors: string[] = []
	if (password.length < 8) {
		errors.push('Password must be at least 8 characters long')
	}
	if (password?.search(/[a-z]/i) < 0) {
		errors.push('Password must contain at least one lowercase letter.')
	}
	if (password?.search(/[0-9]/) < 0) {
		errors.push('Password must contain at least one number.')
	}
	if (password?.search(/[A-Z]/) < 0) {
		errors.push('Password must contain at least one uppercase letter.')
	}
	return { success: Boolean(!errors.length), errors }
}
