function CardMain({ text, logo, image, imgDimentions }) {
  return (
    <div className="bg-[#323c44] w-[95vw] h-auto m-auto rounded-xl pb-6 mt-7">
      <div className="flex justify-between align-top w-full m-10">
        <div className="flex flex-col">
          <div className="ml-[100px] mt-8 md:mt-[4.25rem] md:ml-20">
            <img src={logo} width="85" height="85" />
          </div>
          <p className="text-center md:text-left max-w-[300px] md:max-w-[400px] leading-6 font-Inter font-semibold text-white m-auto mt-9 md:ml-[5.8rem] text-sm md:text-[16px]">
            {text}
          </p>
        </div>
        <div className="pr-[10rem] pt-[4.25rem] hidden md:block">
          <img
            src={image}
            width={imgDimentions.width}
            height={imgDimentions.height}
          />
        </div>
      </div>
    </div>
  );
}

export default CardMain;
