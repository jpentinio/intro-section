import "./App.css";
import Navbar from "./components/Navbar";
import heroImg from "../src/assets/image-hero-desktop.png";
import heroImgMobile from "../src/assets/image-hero-mobile.png";
import clientImg1 from "../src/assets/client-databiz.svg";
import clientImg2 from "../src/assets/client-audiophile.svg";
import clientImg3 from "../src/assets/client-meet.svg";
import clientImg4 from "../src/assets/client-maker.svg";

const clients = [clientImg1, clientImg2, clientImg3, clientImg4];

function App() {
  return (
    <main className="h-screen">
      <Navbar />
      <div className="max-w-screen-xl flex flex-col-reverse sm:grid grid-cols-2 items-center gap-12 sm:gap-4 m-auto sm:h-[85vh]">
        <div className="px-4 py-6 sm:py-0 sm:px-0 flex flex-col justify-between text-lg sm:h-[620px] gap-12 sm:gap-0">
          <div className="text-center sm:text-start flex flex-col sm:justify-center h-full items-center sm:items-start gap-12">
            <h1 className="text-4xl sm:text-8xl font-bold">Make remote work</h1>
            <p className="text-[#696969] sm:w-4/5">
              Get your team in sync, no matter your location. Streamline
              processes, create team rituals, and watch productivity soar.
            </p>
            <button className="bg-[#141414] border-2 border-[#141414] text-white px-6 py-4 rounded-2xl hover:bg-inherit hover:text-[#141414] transition">
              Learn more
            </button>
          </div>
          <ul className="flex justify-between items-center">
            <img src={clientImg1} className="w-auto h-4 sm:h-6" />
            <img src={clientImg2} className="w-auto h-6 sm:h-10" />
            <img src={clientImg3} className="w-auto h-4 sm:h-6" />
            <img src={clientImg4} className="w-auto h-6 sm:h-8" />
          </ul>
        </div>
        <div className="flex justify-end sm:h-[620px]">
          <img src={heroImg} className="hidden sm:flex w-auto" />
          <img src={heroImgMobile} className="flex sm:hidden h-auto" />
        </div>
      </div>
    </main>
  );
}

export default App;
