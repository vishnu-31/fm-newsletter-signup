import SignupCard from '@/components/SignupCard';
import ThanksCard from '@/components/ThanksCard';
import { useRef, useState } from 'react';

export default function Home() {
  const showSignUp = useRef<boolean>(true);
  const showthankCard = useRef<boolean>(false);
  const [mail, setMail] = useState<string>("");
  const [submitted, setSubmitted] = useState<boolean>(false);
  
  const submitFn = (): void =>{
    showSignUp.current=false
    showthankCard.current=true
    setSubmitted(true);
  }

  const dismissFn = (): void =>{
    showSignUp.current=true
    showthankCard.current=false
    setMail("");
    setSubmitted(false);
  }
  return (
    <div>
        { (showSignUp.current) && (<SignupCard mail={mail} setMail={setMail}  submitFn={submitFn}/>)}
        { (showthankCard.current) && (<ThanksCard  mail={mail} dismissFn={dismissFn} />)}
    </div>
    );
}