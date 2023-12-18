import Topbar from "./components/Topbar";
import Firstimage from "./components/Firstimage";
import Paragraph from "./components/Paragraph";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="w-[430px] bg-[#E9F4F2]  relative  ">
      <Topbar />
      <Firstimage />
      <Paragraph />
      <Footer />
    </main>
  );
}
