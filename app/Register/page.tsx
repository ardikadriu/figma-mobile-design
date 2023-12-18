import Topbar from "../components/Topbar";
import Form from "../components/Form";
import Registerbutton from "../components/Registerbutton";

const page = () => {
  return (
    <div className="w-[430px] bg-[#E9F4F2]  relative ">
      <Topbar />
      <Form />
      <Registerbutton />
    </div>
  );
};

export default page;
