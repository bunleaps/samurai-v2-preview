import { SOLUTIONS } from "@/constants";
import Button from "../buttons/Button";
import Image from "next/image";

function Solution() {
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
            <h1 className="font-bold text-2xl lg:text-3xl">
              Cyber Security Solutions
            </h1>
            <p className="w-3/4 lg:w-full xl:w-2/3">
              Your business is at risk every year as new cybersecurity threats
              emerge. There is no immunity in the world of security breaches.
            </p>
            <Button>Read More</Button>
          </div>
        </div>
        <div className="w-full lg:w-1/2 h-full p-4">
          <div className="h-full flex flex-col justify-center divide-y divide-slate-600">
            {SOLUTIONS.map((content) => (
              <div
                className="flex items-center text-lg text-cyan-500 p-2"
                key={content.text}
              >
                {content.icon}
                <p className="ml-4 text-white">{content.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Solution;
