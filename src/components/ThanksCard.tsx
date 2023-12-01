import SuccessIcon from "../../public/icon-success.svg";
import Image from "next/image";

type ThanksCardParam = {
    mail: string;
    dismissFn: Function;
}

export default function ThanksCard(props: ThanksCardParam) {
    return (
        <main
        className={`
          flex  
          flex-col
          h-[800px]
          mx-auto
          justify-between
          p-5
          w-[375px]
          items-center
          md:rounded-2xl 
          md:p-8
          md:justify-normal
          md:h-auto 
          md:my-auto 
          md:w-[375px]`}
        >
            <div className="pr-4">
                <Image alt="Sucess Icon" className={''} src={SuccessIcon} width={70} height={70}/>
                <p className=" my-5 text-4xl font-extrabold">Thanks for subscribing!</p>
                <p className="text-sm">
                    A confirmation email has been sent to <span className="font-extrabold">{props.mail}</span>. Please open it and click the button inside to confirm your subscription
                </p>
            </div>
            <button onClick={(e) => {
                e.preventDefault();
                props.dismissFn();
            }} className="cursor-pointer sub-btn w-full text-white h-14 mt-4 text-sm font-bold rounded-lg" >Dismiss message</button>
        </main>
    );

}
