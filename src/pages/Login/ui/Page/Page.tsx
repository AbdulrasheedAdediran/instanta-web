import { ButtonVariants, Sizes } from '@/utils'
import { Button, Input } from '@/widgets'
import { FaLock, FaUser } from 'react-icons/fa6'
import { PiCaretLeftBold } from 'react-icons/pi'

const Login = () => {
  return (
      <section className=" h-screen w-full bg-white grid place-items-center page-padding">
          
          <div className="grid gap-6 p-6 w-full place-items-center">
              
       <div  className="w-[8rem] h-[2.5rem]">
   <img
              src="/images/instanta-logo.png"
              className="max-w-xs rounded-lg shadow-2xl aspect-video h-full w-full"
            />
          </div>
          
          <div className="shadow-md grid gap-6 p-6 w-full max-w-md">
              
              <h1 className="text-xl text-coolBlack text-center">Admin Login</h1>
              <div className="grid gap-2">
                  <label htmlFor="email" className="text-auroMetalSaurus">Email Address</label>
              <Input leftIcon={ <FaUser className='text-[#555]' />} />
              </div>
              
               <div className="grid gap-2">
                  <label htmlFor="password" className="text-auroMetalSaurus">Password</label><Input leftIcon={<FaLock className='text-[#555]'/>} />
              </div>
                   <Button
                                    variant={ButtonVariants.FILLED_RED}
                                    size={Sizes.SM}
                                    // onClick={logout}
                                    className="w-full flex rounded-full text-center justify-center"
                                >
                                    Login
              </Button>
              
              <Button applyBaseClassName={false} className='flex items-center justify-center gap-x-2 text-coolBlack'> <PiCaretLeftBold /> Back to Home</Button>

</div>
          </div>
    </section>
  )
}

export default Login

