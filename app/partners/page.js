import { PARTNERS } from "@/constants";
import { TitleLine } from "@/components/TitleBar";
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
            Our Trusted Partners
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

function AllPartners() {
  return (
    <div className="relative z-10">
      <div className="flex flex-col items-center gap-2">
        <TitleLine>Our Partners</TitleLine>
        <div className="flex flex-col items-center text-center">
          <h1 className="font-bold text-2xl lg:text-3xl px-3">
            A Few Of Our Sponsors
          </h1>
          <p className="lg:w-2/3 px-4">
            Source Point Delivers Next Generation Technology Services Designed
            To Optimize Your Business Via Secure & Redundant Cloud-based
            Infrastructure.
          </p>
        </div>
        <div className="h-5"></div>
        <div className="mt-4 flex flex-wrap justify-center gap-4">
          {PARTNERS.map((logo) => (
            <Image
              className="mx-3"
              key={logo.name}
              src={"/partners" + logo.src}
              alt={logo.name}
              width={logo.width}
              height={logo.height}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function FeaturedPartner() {
  return (
    <div className="w-full h-[500px] py-10 flex justify-center relative">
      <Image
        className="w-full h-full object-cover brightness-50"
        src="/bg/solutions.jpeg"
        alt="Our Approach BG"
        fill
      />
      <div className="absolute top-0 w-full lg:w-3/4 h-full flex flex-col lg:flex-row justify-center items-center">
        <div className="w-full lg:w-1/2 h-full">
          <div className="h-full flex flex-col justify-center gap-2 items-center lg:items-start text-center lg:text-start">
            <TitleLine>Jbarrows</TitleLine>
            <h1 className="font-bold text-2xl lg:text-3xl">
              Partnered With Jbarrows
            </h1>
            <p className="w-3/4 lg:w-full xl:w-2/3">
              This is a placeholder, we can solve the Cyber security our mission
              here. In partnership with JBarrows Sales Training, we Crna Ren
              tense
            </p>
          </div>
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
      <AllPartners />
      <div className="h-20"></div>
      <FeaturedPartner />
    </div>
  );
}

export default Industries;
