import Image from "next/image";
import Tick from "@/public/Tick.png";
import Human from "@/public/Human.png";

const Firstimage = () => {
  return (
    <div className="mt-[208px] flex justify-center ">
      <div className=" h-[308px] border-[#DADBDC] border-[14px] bg-white rounded-[29px] items-center flex-col flex relative">
        <div className="w-[43.574px] h-[13px] bg-[#DADBDC] mt-[5px] rounded-[14px] flex-shrink-0 "></div>

        <div className="w-[92.422px] h-[10.227px] rounded-[14px] mt-[70px] bg-[#DADBDC] flex-shrink-0"></div>
        <div className="w-[92.422px] h-[10.227px] rounded-[14px] mt-[10px] bg-[#DADBDC] flex-shrink-0"></div>
        <div className="w-[92px] flex justify-start mt-[10px]">
          <div className="w-[62.422px] h-[10.227px] rounded-[14px] bg-[#DADBDC]"></div>
        </div>
        <Image
          className="mx-[35px] mt-[27px] mb-[72px]"
          src={Tick}
          width={73}
          height={69}
          alt="Tick"
        />
        <Image
          className="absolute left-[-63px] bottom-[-10px] "
          src={Human}
          width={61}
          height={179}
          alt="human"
        />
      </div>
    </div>
  );
};

export default Firstimage;
