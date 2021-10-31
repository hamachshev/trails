import Image from "next/image";
import Head from "next/head";

function login() {
  return (
    <>
      <Head>
        <title>Trails</title>
      </Head>
      <div className="bg-white w-[475px] h-[600px] m-auto mt-[20vh] mb-24 rounded-2xl filter drop-shadow-2xl flex justify-center items-start flex-col">
        <div className="m-auto mt-20">
          <Image src="/Header2.svg" width="105" height="44" />
        </div>
        <form className=" m-auto mt-[-50px] flex flex-col">
          <input
            type="text"
            name="email"
            placeholder="Email"
            className="rounded-lg drop-shadow-lg m-10 mb-8 h-12 w-[300px] focus:ring-2 focus:ring-blue-600 input"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="rounded-lg drop-shadow-lg m-10 mt-0 h-12 w-[300px] focus:ring-2 focus:ring-blue-600 input"
          />
          <button className="bg-[#0f54ef] text-white font-Inter font-semibold w-[177px] h-[46.5px] rounded-[100px] text-l m-auto mt-10 drop-shadow mb-6">
            Login
          </button>
        </form>
      </div>
    </>
  );
}

export default login;
