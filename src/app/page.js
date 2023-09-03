import Image from 'next/image'
import Carousel from "./components/Carousel";
import ServiceButton from "./components/common/ServiceButton";

const MOCK_IMAGE_URL = "https://unsplash.it/800/800";
const SLIDES = [
  {
    title: "Banner title and action point",
    date: new Date(),
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget velit egestas, ullamcorper ligula et, venenatis lacus. Sed varius ac ante gravida facilisis.",
    imgSrc: MOCK_IMAGE_URL,
  },
  {
    title: "Banner title and action point",
    date: new Date(),
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget velit egestas, ullamcorper ligula et, venenatis lacus. Sed varius ac ante gravida facilisis.",
    imgSrc: MOCK_IMAGE_URL,
  },
  {
    title: "Banner title and action point",
    date: new Date(),
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget velit egestas, ullamcorper ligula et, venenatis lacus. Sed varius ac ante gravida facilisis.",
    imgSrc: MOCK_IMAGE_URL,
  },
];
const SLIDES_OPTIONS = {};

const xypCardBackgroundImageStyle = {
  backgroundImage: `url('/home/xyp.png')`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
};
const servicesCardBackgroundImageStyle = {
  backgroundImage: `url('/home/services.png')`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
};

// TODO: replace cards to link after pages implemented

export default function Home() {
  return (
    <main className="px-[100px] py-[30px] h-screen overflow-hidden bg-primary-gray text-white">
      <header className="w-full flex justify-between">
        <Image
          className="relative text-white"
          src="/logo.svg"
          alt="Mini guide Logo"
          width={100}
          height={75}
          priority
        />
        <div className="flex flex-col font-bold">
          <span className="text-primary-green text-[24px] leading-none">
            Холбоо барих
          </span>
          <b className="text-[32px]">7777-8888</b>
        </div>
      </header>
      <section className="w-full flex mt-[60px]">
        <div className="w-full min-h-[calc(100vh-260px)] grid grid-cols-2 grid-rows-1 gap-[40px]">
          <div className="h-full rounded-md relative overflow-hidden">
            <div className="w-full h-full overflow-hidden">
              <Carousel slides={SLIDES} options={SLIDES_OPTIONS} />
            </div>
          </div>
          <div className="h-full flex flex-col gap-[40px]">
            <div className="w-full h-full grid grid-cols-2 gap-[40px]">
              <div
                className="w-full h-full rounded-md hover:shadow-lg"
                style={xypCardBackgroundImageStyle}
              >
                <div className="h-full w-full flex">
                  <div className="h-2/3 mt-auto w-full flex flex-col justify-center items-center text-center px-[60px]">
                    <div>
                      <Image
                        className="relative text-white"
                        src="/home/emongolia.svg"
                        alt="emongolia Logo"
                        width={280}
                        height={70}
                        priority
                      />
                    </div>
                    <div className="pb-10">
                      <p className="text-[20px] font-bold mt-[20px] mb-[10px] truncate">
                        ХУР тодорхойлолт авах
                      </p>
                      <ServiceButton />
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="w-full h-full rounded-md hover:shadow-lg"
                style={servicesCardBackgroundImageStyle}
              >
                <div className="h-full w-full flex">
                  <div className="h-2/3 mt-auto w-full flex flex-col justify-center items-center text-center px-[60px]">
                    <div>
                      <Image
                        className="relative text-white"
                        src="/home/soyombo.svg"
                        alt="soyombo Logo"
                        width={40}
                        height={30}
                        priority
                      />
                    </div>
                    <div className="pb-10">
                      <p className="text-[20px] font-bold mt-[20px] mb-[10px] truncate">
                        Төрийн үйлчилгээ
                      </p>
                      <ServiceButton />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full bg-secondary-gray rounded-md flex align-center hover:shadow-lg">
              <div className="w-full p-5 flex gap-5">
                <Image
                  className="relative"
                  src="/home/survey.svg"
                  alt="Next.js Logo"
                  width={88}
                  height={88}
                  priority
                />
                <div className="h-full flex flex-col justify-center items-start">
                  <p className="text-[20px] font-bold">Судалгаа бөглөх</p>
                  <ServiceButton />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="text-center w-full mt-[60px] leading-none text-neutral-gray text-[12px]">
        © The year of first publication of the work and. The name of the owner
        of copyright in the work.
      </footer>
    </main>
  );
}
