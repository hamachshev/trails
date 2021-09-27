import Image from "next/image"
function MainOne() {
    return (
        <>
        
        {/* <div className='flex justify-center w-full absolute top-[30vh]'>
        <h1 className='font-Inter font-extrabold text-6xl leading-tight text-center lg:text-7xl p-5 z-50 relative'>Learn anything, anytime, for free.</h1>
        
        <div className='hidden lg:inline absolute z-0 right-[10vw] top-[-20vh]'>
                <Image src ='/mountains.svg' height = '383' width ='713'/>
        </div>
       
        
        </div> */}
        <div className='p-8 hidden md:flex w-full justify-center flex-wrap '>
        <Image src ='/main3.svg' width='1685' height = '471'/>
        <button className='bg-[#0f54ef] text-white font-Inter font-semibold w-[177px] h-[46.5px] rounded-[100px] text-xl'>Get Started</button>
        </div>
        

        
        
        
        </>
    )
}

export default MainOne
