import Image from "next/image";
import Link from "next/link";
function Header() {
  return (
    <div className=" z-10 m-8 flex justify-center md:justify-between md:items-center relative">
      <Image src="/Header2.svg" width="105" height="44" />

      <Link href="login">
        <p className="font-Inter hidden md:inline font-semibold cursor-pointer">
          Login
        </p>
      </Link>
    </div>
  );
}

export default Header;
