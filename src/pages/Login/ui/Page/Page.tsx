import { ButtonVariants, Sizes } from '@/utils'
import { Button, Input } from '@/widgets'
import { FaEye, FaEyeSlash, FaLock, FaUser } from 'react-icons/fa6'
import { PiCaretLeftBold } from 'react-icons/pi'
import { apiConfig } from '@/sdk'
import { useState } from 'react'
import { useToggle } from '@/hooks'

const InitialData = {
	email: '',
	password: '',
}
const Login = () => {
	apiConfig.AdminService.postApiAdminAuthenticate({ email: 'admin', password: '' })
	const [credentials, setCredentials] = useState(InitialData)
	const { isOpen: showPassword, toggle } = useToggle()
	const handleFormInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target
		setCredentials({ ...credentials, [name]: value })
	}
	return (
		<section className=' page-padding grid h-screen w-full place-items-center bg-white'>
			<div className='grid w-full place-items-center gap-6 p-6'>
				<div className='h-[2.5rem] w-[8rem]'>
					<img
						src='/images/instanta-logo.png'
						className='aspect-video h-full w-full max-w-xs rounded-lg shadow-2xl'
					/>
				</div>

				<div className='grid w-full max-w-md gap-6 p-6 shadow-md'>
					<h1 className='text-center text-xl text-coolBlack'>Admin Login</h1>
					<div className='grid gap-2'>
						<label
							htmlFor='email'
							className='text-auroMetalSaurus'
						>
							Email Address
						</label>
						{/* <Input leftIcon={<FaUser className='text-[#555]' />} /> */}
						<Input
							name='email'
							type='email'
							placeholder='example@gmail.com'
							className='text-[#555]'
							value={credentials.email}
							onChange={handleFormInput}
						/>
					</div>

					<div className='grid gap-2'>
						<label
							htmlFor='password'
							className='text-auroMetalSaurus'
						>
							Password
						</label>
						{/* <Input leftIcon={<FaLock className='text-[#555]' />} /> */}
						<Input
							name='password'
							type={showPassword ? 'text' : 'password'}
							value={credentials.password}
							placeholder='password'
							className='text-[#555]'
							onChange={handleFormInput}
							onClick={toggle}
							leftIcon={showPassword ? <FaEye /> : <FaEyeSlash />}
						/>
					</div>
					<Button
						variant={ButtonVariants.FILLED_RED}
						size={Sizes.SM}
						// onClick={logout}
						className='flex w-full justify-center rounded-full text-center'
					>
						Login
					</Button>

					<Button
						applyBaseClassName={false}
						className='flex items-center justify-center gap-x-2 text-coolBlack'
					>
						{' '}
						<PiCaretLeftBold /> Back to Home
					</Button>
				</div>
			</div>
		</section>
	)
}

export default Login
