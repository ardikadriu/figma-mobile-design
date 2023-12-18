import Loginbutton from "../components/Loginbutton";
import Logini from "../components/Logini";
import Topbar from "../components/Topbar";

const page = () => {
  return (
    <div className="w-[430px] bg-[#E9F4F2]   relative ">
      <Topbar />
      <Logini />
      <Loginbutton />
    </div>
  );
};

export default page;
