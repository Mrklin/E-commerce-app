import React from 'react'

const LoginSignup = () => {
  return (
    <div className='w-[100%] bg-[#fce3fe] py-16 flex items-center flex-col'>
        <div className='w-[490px]  bg-white m-0 py-[20px] px-[30px]'>
            <h1 className='my-[10px] mx-0 text-2xl font-bold'>Sign Up</h1>
            <div className='flex flex-col gap-[29px] mt-[30px]'>
                <input className='input' type='text' placeholder='Your Name' />
                <input className='input' type='email' placeholder='Email Address' />
                <input className='input' type='password' placeholder='Password' />
            </div>
            <button className='w-[100%] h-[55px] text-white bg-[#ff4141]
            mt-[20px] border-none text-[20px] font-medium cursor-pointer'>Continue</button>
            <p className='mt-4 text-[#5c5c5c] text-[16px] font-normal'>
                Already have an account ? 
            <span className='cursor-pointer font-medium text-[#ff4141]'> Login here</span></p>

            <div className='flex items-stretch gap-1.5 mt-[10px] text-[#5c5c5c] text-[16px] font-normal'>
                <input type='checkbox' name='' id='' />
                <p>By continuing i agree to the terms of use & privacy policy.</p>
            </div>
        </div>
    </div>
  )
}

export default LoginSignup