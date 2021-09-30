import Image from "next/image";
function Footer() {
  return (
    <div className="bg-[#fff] w-[95vw] rounded-xl m-auto h-auto mb-5 flex items-center shadow-2xl">
      <div className="pl-10">
        <Image src="/footer_logo.svg" width="75" height="75" />
      </div>
      <p className="m-auto font-Inter font-semibold text-[#3e4b54]">
        Made with &#9; &#10084; &#9; in New Jersey
      </p>
    </div>
  );
}

export default Footer;
