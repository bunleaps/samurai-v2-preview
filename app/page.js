"use client";
import Button from "@/components/buttons/Button";
import {
  HERO_RECOG,
  WHY_CHOOSE_US,
  OUR_APPROACH,
  WHY_SERVICES,
} from "@/constants/index";
import { TitleLine } from "@/components/TitleBar";
import Solution from "@/components/sections/Solution";
import Partners from "@/components/sections/Partners";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="w-[100vw] h-[60vh] lg:h-[600px] relative">
      <video
        className="w-full h-full object-cover brightness-50"
        src="/videos/server_room.mp4"
        loop
        autoPlay
        muted
      ></video>
      <div className="absolute w-full h-full top-0 flex justify-center items-center z-10">
        <div className="flex flex-col items-center gap-2">
          <h1 className="font-bold text-3xl lg:text-4xl">
            Great Software Works Great
          </h1>
          <h1 className="font-bold text-3xl lg:text-4xl">
            But Even Better Together
          </h1>
          <p className=" lg:w-1/2 text-center">
            Learn how the SamurAI integrates the world’s leading cybersecurity,
            AI-Driven products, to maximize protection.
          </p>
          <Button>Learn More</Button>
        </div>
      </div>
      <div className="absolute w-full h-full -bottom-1/2 flex justify-center items-center">
        <div className="m-4 p-2 lg:p-4 rounded-lg border border-cyan-500 bg-slate-950">
          <div className="flex flex-col lg:flex-row justify-around items-center gap-2">
            {HERO_RECOG.map((content) => (
              <div key={content.key} className="text-start lg:w-96 p-5 lg:p-0">
                <p className="text-cyan-500 font-semibold">{content.title}</p>
                <p>{content.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const WhyChooseUs = () => {
  return (
    <div className="relative z-10">
      <div className="flex flex-col items-center gap-2">
        <TitleLine>Why Choose Us</TitleLine>
        <div className="flex flex-col items-center text-center">
          <h1 className="font-bold text-2xl lg:text-3xl px-3">
            We Advise More Than 1700 Companies
          </h1>
          <p className="lg:w-2/3 px-4">
            Source Point Delivers Next Generation Technology Services Designed
            To Optimize Your Business Via Secure & Redundant Cloud-based
            Infrastructure.
          </p>
        </div>
        <div className="h-5"></div>
        <div className="w-full lg:w-3/4 flex flex-wrap justify-center gap-2">
          {WHY_CHOOSE_US.map((content) => (
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
};

const OurApproach = () => {
  return (
    <div className="relative z-10">
      <div className="flex flex-col items-center gap-2">
        <TitleLine>Our Approach</TitleLine>
        <div className="flex flex-col items-center text-center">
          <h1 className="font-bold text-2xl lg:text-3xl px-3">
            Our Approach To Security
          </h1>
          <p className="lg:w-2/3 px-4">
            Source Point Delivers Next Generation Technology Services Designed
            To Optimize Your Business Via Secure & Redundant Cloud-based
            Infrastructure.
          </p>
        </div>
        <div className="h-2"></div>
        <div className="w-full">
          <div className="w-full h-[500px] relative flex justify-center items-center">
            <Image
              className="hidden lg:flex"
              src="/bg/server_101.png"
              alt="Our Approach BG"
              width={300}
              height={300}
            />
            <div className="absolute w-full h-full top-0 flex justify-center items-center">
              <div className="w-full xl:w-1/2 flex justify-center flex-wrap gap-2 lg:gap-10 xl:gap-20">
                {OUR_APPROACH.map((content) => (
                  <div
                    key={content.title}
                    className="bg-slate-800 w-full rounded-lg border border-cyan-500 lg:w-96 mx-4 lg:mx-0"
                  >
                    <div className="p-4 flex flex-col gap-2">
                      <div className="flex gap-3">
                        <div className="text-2xl">{content.icon}</div>
                        <p className="font-semibold text-start">
                          {content.title}
                        </p>
                      </div>
                      <p className="text-start">{content.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const WhyServices = () => {
  return (
    <div className="relative z-10">
      <div className="flex flex-col items-center gap-2">
        <TitleLine>Why Services</TitleLine>
        <div className="flex flex-col items-center text-center">
          <h1 className="font-bold text-2xl lg:text-3xl px-3">
            Our High-Performance Services
          </h1>
          <p className="lg:w-2/3 px-4">
            Source Point Delivers Next Generation Technology Services Designed
            To Optimize Your Business Via Secure & Redundant Cloud-based
            Infrastructure.
          </p>
        </div>
        <div className="h-5"></div>
        <div className="w-full lg:w-3/4 flex flex-wrap justify-center gap-2">
          {WHY_SERVICES.map((content) => (
            <div
              className="bg-slate-800 w-full rounded-lg border border-cyan-500 lg:w-96 xl:w-[400px] mx-4 lg:mx-0"
              key={content.title}
            >
              <div className="p-4 flex flex-col items-center gap-2">
                <div className="flex justify-center items-center text-2xl w-10 h-10 rounded-full bg-cyan-500">
                  {content.icon}
                </div>
                <p className="font-semibold text-center">{content.title}</p>
                <p className="text-center">{content.description}</p>
                <Button>Read More</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Home = () => {
  return (
    <div>
      <Hero />
      <div className="h-44 lg:h-24"></div>
      <WhyChooseUs />
      <div className="h-20"></div>
      <OurApproach />
      <div className="h-20 lg:h-2"></div>
      <Solution />
      <div className="h-20"></div>
      <WhyServices />
      <div className="h-20"></div>
      <Partners />
    </div>
  );
};

export default Home;
