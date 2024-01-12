import Partners from "@/components/sections/Partners";
import {
  IndustryCardsTextRight,
  IndustryCardsTextLeft,
} from "@/components/cards/industry_cards";
import { TitleLine } from "@/components/TitleBar";
import { INDUSTRIES, OUR_APPROACH } from "@/constants/industries";
import Image from "next/image";

function Hero() {
  return (
    <div className="w-full h-[400px] bg-slate-800 relative">
      <Image
        className="w-full h-full object-cover brightness-50"
        src="/bg/service_bg_01.png"
        alt="Service Background Cover"
        fill
      />
      <div className="absolute w-full h-full top-0 flex justify-center items-center z-10">
        <div className="flex flex-col items-center gap-2">
          <h1 className="font-bold text-3xl lg:text-4xl">
            Cyber Security For Industries
          </h1>
          <p className=" lg:w-1/2 text-center">
            Source Point Delivers Next Generation Technology Services Designed
            To Optimize Your Business Via Secure & Redundant Cloud-based
            Infrastructure.
          </p>
        </div>
      </div>
    </div>
  );
}

function Industry() {
  return (
    <div className="relative z-10">
      <div className="flex flex-col items-center gap-2">
        <TitleLine>Industries</TitleLine>
        <div className="flex flex-col items-center text-center">
          <h1 className="font-bold text-2xl lg:text-3xl px-3">
            Providing Cyber Security to Help
          </h1>
          <p className="lg:w-2/3 px-4">
            Source Point Delivers Next Generation Technology Services Designed
            To Optimize Your Business Via Secure & Redundant Cloud-based
            Infrastructure.
          </p>
        </div>
        <div className="h-5"></div>
        <div className="w-full lg:w-3/4 flex flex-wrap justify-center gap-2">
          {INDUSTRIES.map((content) => (
            <div
              className="bg-slate-800 w-full rounded-lg border border-cyan-500 lg:w-80 mx-4 lg:mx-0"
              key={content.title}
            >
              <div className="p-4 flex flex-col items-center gap-2">
                <div className="flex justify-center items-center text-2xl w-10 h-10 rounded-full bg-cyan-500">
                  {content.icon}
                </div>
                <p className="font-semibold text-center">{content.title}</p>
                <p className="text-center">{content.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Info() {
  return (
    <div className="w-full py-10 flex justify-center">
      <div className="flex flex-col items-center gap-10">
        <div className="mt-4 w-full flex flex-wrap justify-center gap-10">
          {OUR_APPROACH.map((content, index) => (
            <div key={content.key} className="w-full lg:w-4/5">
              {index % 2 === 0 ? (
                <IndustryCardsTextRight
                  image={content.image}
                  title={content.title}
                  header={content.header}
                  description={content.description}
                  points={content.points}
                />
              ) : (
                <IndustryCardsTextLeft
                  image={content.image}
                  title={content.title}
                  header={content.header}
                  description={content.description}
                  points={content.points}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Industries() {
  return (
    <div>
      <div className="h-10"></div>
      <Hero />
      <div className="h-20"></div>
      <Industry />
      <div className="h-20"></div>
      <Info />
      <div className="h-20"></div>
      <Partners />
    </div>
  );
}

export default Industries;
