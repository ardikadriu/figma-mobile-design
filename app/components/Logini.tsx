import Image from "next/image";
import inputimage from "@/public/LoginImage.png";

const Logini = () => {
  return (
    <div className="flex flex-col items-center mt-[150px]">
      <h1 className="text-[32px] mb-[15px]">Welcome Back !</h1>
      <Image src={inputimage} width={268} height={263} alt="woman" />
      <form className="flex flex-col items-center">
        <input
          className="w-[380px] h-[49px] py-[10px] outline-none rounded-[30px] pl-[30px]"
          type="email"
          placeholder="Email"
        />
        <input
          className="w-[380px] h-[49px] mt-[35px] py-[10px] outline-none rounded-[30px] pl-[30px]"
          type="password"
          placeholder="Password "
        />
      </form>
      <h1 className="mt-[45px] text-[#0DA1CF] font-Abhaya text-[20px]">
        Forgot Password
      </h1>
    </div>
  );
};

export default Logini;
