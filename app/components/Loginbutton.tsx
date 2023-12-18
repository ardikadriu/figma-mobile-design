import Link from "next/link";

const Loginbutton = () => {
  return (
    <div className="flex flex-col items-center text-white mt-[55px]  ">
      <Link href={"Register"}>
        <button
          type="submit"
          className="w-[378px] h-[62px] bg-[#61C2D0] text-[18px] font-bold "
        >
          {" "}
          REGISTER
        </button>
      </Link>

      <h1 className="text-[#00000080] my-[14px]">
        Dont have an account?{" "}
        <span className="text-[#0DA1CF] text-[17px] ml-[11px]">Sign up</span>
      </h1>

      <svg
        className="absolute right-0 bottom-0 opacity-50"
        width="211"
        height="181"
        viewBox="0 0 211 181"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="100" cy="153" r="100" fill="#A1E0E9" fill-opacity="0.33" />
        <circle cx="157" cy="100" r="100" fill="#A1E0E9" fill-opacity="0.33" />
      </svg>
    </div>
  );
};

export default Loginbutton;
