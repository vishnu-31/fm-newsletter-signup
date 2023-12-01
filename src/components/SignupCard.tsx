import Image from 'next/image';
import MobileSignupImg from '../../public/illustration-sign-up-mobile.svg'
import DesktopSignupImg from '../../public/illustration-sign-up-desktop.svg'
import { MouseEventHandler, useState } from 'react';

type SignupCardParams ={
    mail: string;
    setMail: React.Dispatch<string>;
    submitFn: VoidFunction;
}

export default function SignupCard(props:SignupCardParams) {

 return (
    <main
      className={`
          flex  
          flex-col
          mx-auto 
          w-[375px]
          items-center
          md:flex-row-reverse 
          md:rounded-2xl 
          md:p-4 
          md:my-auto 
          md:w-[850px]`}>
        
        <div className='flex md:hidden mb-3'>
          <Image 
            src={MobileSignupImg} 
           width={375} 
           height={284}
           alt={'Illustration of Sign up'}/>
        </div>

        <div className='hidden md:flex '>
          <Image 
            src={DesktopSignupImg} 
           width={400} 
           height={593}
           alt={'Illustration of Sign up'}/>
        </div>
        
        <div className=' w-[375px] pr-7 pl-6  md:pl-0 '>
          <p className='text-4xl font-black my-5'>Stay updated!</p>
          <p className='my-3'>Join 60,000+ product managers receiving monthly updates on:</p>
          <ul className='list-points pl-7 justify-center'>
            <li className='pl-3'>Product discovery and building what matters</li>
            <li className='pl-3'>Measuring to ensure updates are a success</li>
            <li className='pl-3'>And much more!</li>
          </ul>
          
          
         <form  >
          <div className=' my-5 flex flex-col'>
          <label htmlFor="mail" className='text-xs font-bold'>Email address</label>
          <input type="email" value={props.mail} onChange={(e) => props.setMail(e.target.value)} className='cursor-pointer my-2 w-full border border-slate-250 h-14 pl-4 rounded-lg' placeholder="email@company.com" name="mail" id="mail" />
          <button type="submit" onClick={(e) =>{
            e.preventDefault();
            props.submitFn();
            }} className='cursor-pointer sub-btn w-full text-white h-14 mt-4 text-sm font-bold rounded-lg'>Subscribe to monthly newsletter</button>
          </div>
         </form>
       </div>      
    </main>
  )
}
