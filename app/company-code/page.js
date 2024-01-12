import Partners from "@/components/sections/Partners";
import {
  CompanyCardsTextRight,
  CompanyCardsTextLeft,
} from "@/components/cards/company_cards";
import { TitleLine } from "@/components/TitleBar";
import { INFO } from "@/constants/company";
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
          <h1 className="font-bold text-3xl lg:text-4xl">Our Company & Code</h1>
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

function Company() {
  return (
    <div className="w-full py-10 flex justify-center">
      <div className="flex flex-col items-center gap-2">
        <TitleLine>Company & Code</TitleLine>
        <div className="flex flex-col items-center text-center">
          <h1 className="font-bold text-2xl lg:text-3xl px-3">
            We are Providing Cyber Security to Help
          </h1>
          <p className="lg:w-2/3 px-4">
            High-profile companies are utilizing Samur AI to build great
            business networks, reach out to new clients, and secure meetings
            with decision-makers and candidates.
          </p>
        </div>
        <div className="h-5"></div>
        <div className="mt-4 w-full flex flex-wrap justify-center gap-10">
          {INFO.map((content, index) => (
            <div key={content.key} className="w-full lg:w-4/5">
              {index % 2 === 0 ? (
                <CompanyCardsTextRight
                  image={content.image}
                  title={content.title}
                  header={content.header}
                  description={content.description}
                />
              ) : (
                <CompanyCardsTextLeft
                  image={content.image}
                  title={content.title}
                  header={content.header}
                  description={content.description}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function CompanyCode() {
  return (
    <div>
      <div className="h-10"></div>
      <Hero />
      <div className="h-20"></div>
      <Company />
      <div className="h-20"></div>
      <Partners />
    </div>
  );
}

export default CompanyCode;
