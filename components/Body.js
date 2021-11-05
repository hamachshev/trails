import Image from "next/image";
function body() {
  return (
    <div className=" pb-2 m-auto rounded-xl mt-28 mb-5 flex-col">
      <div className="bg-[#323c44] w-[95vw] h-auto m-auto rounded-xl pb-6">
        <div className="flex justify-between align-top w-full m-10">
          <div className="flex flex-col">
            <div className="ml-[100px] mt-8 md:mt-[4.25rem] md:ml-20">
              <Image src="/learn_logo.svg" width="85" height="85" />
            </div>
            <p className="text-center md:text-left max-w-[300px] md:max-w-[400px] leading-6 font-Inter font-semibold text-white m-auto mt-9 md:ml-[5.8rem] text-sm md:text-[16px]">
              Choose from 1000s of community powered courses with topics ranging
              from skydiving to Javascript. And because they are powered by the
              community, they’ll never be out of date.
            </p>
          </div>
          <div className="pr-[10rem] pt-[4.25rem] hidden md:block">
            <Image src="/learn2.svg" width="422" height="394" />
          </div>
        </div>
      </div>

      <div className="bg-[#323c44] w-[95vw] h-auto m-auto mt-7 rounded-xl pb-6">
        <div className="flex justify-between align-top w-full m-10">
          <div className="flex flex-col">
            <div className="ml-[100px] mt-8 md:mt-[4.25rem] md:ml-20">
              <Image src="/teach_logo2.svg" width="85" height="85" />
            </div>
            <p className="text-center md:text-left max-w-[300px] md:max-w-[400px] leading-6 font-Inter font-semibold text-white m-auto mt-9 md:ml-[5.8rem] text-sm md:text-[16px]">
              Trails is powered by the community, and that means that you’ll
              have a chance to share what you know. Share your knowledge with
              the world because, after all, there is no better way of cementing
              what you know than teaching it to someone else.
            </p>
          </div>
          <div className="pr-[10rem] pt-[4.25rem] hidden md:block">
            <Image src="/teach2.svg" width="422" height="394" />
          </div>
        </div>
      </div>

      <div className="bg-[#323c44] w-[95vw] h-auto m-auto  mt-7 rounded-xl pb-6 ">
        <div className="flex justify-between align-top w-full m-10">
          <div className="flex flex-col">
            <div className="ml-[100px] mt-8 md:mt-[4.25rem] md:ml-20">
              <Image src="/discuss_logo2.svg" width="85" height="85" />
            </div>
            <p className="text-center md:text-left max-w-[300px] md:max-w-[400px] leading-6 font-Inter font-semibold text-white m-auto mt-9 md:ml-[5.8rem] text-sm md:text-[16px]">
              Ask for help, assist another student or just plain chill. <br />
              Discussion is where the Trails community comes together to
              discuss, assist and congratulate each other.
            </p>
          </div>
          <div className="pr-[10rem] pt-[4.25rem] hidden md:block">
            <Image src="/discuss2.svg" width="422" height="394" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default body;
