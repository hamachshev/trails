import Image from "next/image";
import Link from "next/link";

function MainOne() {
  return (
    <>
      {/* <div className='flex justify-center w-full absolute top-[30vh]'>
        <h1 className='font-Inter font-extrabold text-6xl leading-tight text-center lg:text-7xl p-5 z-50 relative'>Learn anything, anytime, for free.</h1>
        
        <div className='hidden lg:inline absolute z-0 right-[10vw] top-[-20vh]'>
                <Image src ='/mountains.svg' height = '383' width ='713'/>
        </div>
       
        
        </div> */}
      <div className="p-8 flex w-full justify-center flex-wrap ">
        <div className="hidden md:block">
          <img src="/main3.svg" width="1685" height="471" />
        </div>

        <img
          src="/matt-le-SJSpo9hQf7s-unsplash.jpg"
          className="md:hidden absolute top-4 z-0 w-[95vw] h-auto m-auto rounded-xl "
        />
        <div className="absolute top-24 z-10 flex flex-col  md:z-0">
          <p className="z-10 font-Inter font-extrabold text-3xl m-auto md:hidden text-center pb-8  p-8 pt-0  text-[#1F2B38]">
            Learn anything, anytime, for free.
          </p>

          <Link href="signup">
            <button className=" md:hidden drop-shadow-xl mx-auto bg-[#0f54ef] text-white font-Inter font-medium md:w-[177px] w-[100px] h-[30px] md:h-[46.5px] rounded-[100px] text-sm md:text-xl">
              Get Started
            </button>
          </Link>
        </div>
        <Link href="signup">
          <button className="hidden md:block drop-shadow-xl mx-auto bg-[#0f54ef] text-white font-Inter font-medium md:w-[177px] w-[100px] h-[30px] md:h-[46.5px] rounded-[100px] text-sm md:text-xl">
            Get Started
          </button>
        </Link>
      </div>
    </>
  );
}

export default MainOne;
