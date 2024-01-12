"use client";
import { useState } from "react";
import Partners from "@/components/sections/Partners";
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
            Cyber Security Solution
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

function TabbedWidget() {
  const tabs = [
    "AI & Data",
    "Automation",
    "Cloud & Data",
    "Sedulity Transformation",
    "Networking",
    "Digital Workspace",
    "Mobility",
  ];
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="w-full lg:w-[800px] xl:w-[1200px] px-4">
      {/* Tab Headers */}
      <div className="w-full flex flex-wrap gap-2 bg-slate-800 p-3 border-2 border-cyan-500 rounded-md">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`cursor-pointer px-4 py-2 rounded-md ${
              index === activeTab ? "bg-cyan-500 text-white" : "bg-slate-900"
            }`}
            onClick={() => handleTabClick(index)}
          >
            {tab}
          </div>
        ))}
      </div>

      {/* Tab Content */}
      <div className="w-full mt-4">
        {tabs.map((tab, index) => (
          <div key={index} className={`${index === activeTab ? "" : "hidden"}`}>
            {/* Content for each tab */}
            {index === 0 && (
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            )}
            {index === 1 && (
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum. sdfsdfs
              </p>
            )}
            {index === 2 && (
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.qeqweqwe
              </p>
            )}
            {index === 3 && (
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.hlhkjkhjkhk
              </p>
            )}
            {index === 4 && (
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.xcvxvxvxvxbnxnvnxvn
              </p>
            )}
            {index === 5 && (
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.opipqeqeqweqeqwe
              </p>
            )}
            {index === 6 && (
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.asdashgjkhgjkhgkj
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function SolutionInfo() {
  return (
    <div className="w-full py-10 flex justify-center">
      <div className="flex flex-col items-center gap-2">
        <TitleLine>Our Solution </TitleLine>
        <div className="flex flex-col items-center text-center">
          <h1 className="font-bold text-2xl lg:text-3xl px-3">
            Our Cyber Security Solution
          </h1>
          <p className="lg:w-2/3 px-4">
            High-profile companies are utilizing Samur AI to build great
            business networks, reach out to new clients, and secure meetings
            with decision-makers and candidates.
          </p>
        </div>
        <div className="h-5"></div>
        <div className="mt-4 w-full flex justify-center">
          <TabbedWidget />
        </div>
      </div>
    </div>
  );
}

function Solution() {
  return (
    <div>
      <div className="h-10"></div>
      <Hero />
      <div className="h-20"></div>
      <SolutionInfo />
      <div className="h-20"></div>
      <Partners />
    </div>
  );
}

export default Solution;
