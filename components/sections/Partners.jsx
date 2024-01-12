import { PARTNERS } from "@/constants";
import Image from "next/image";
import { TitleLine } from "../TitleBar";

function Partners() {
  return (
    <div className="w-full py-10 bg-slate-800 flex justify-center">
      <div className="flex flex-col items-center gap-2">
        <TitleLine>Ecosystem Partners</TitleLine>
        <div className="flex flex-col items-center text-center">
          <h1 className="font-bold text-2xl lg:text-3xl px-3">
            Trusted By Ecosystem Partners
          </h1>
          <p className="lg:w-2/3 px-4">
            High-profile companies are utilizing Samur AI to build great
            business networks, reach out to new clients, and secure meetings
            with decision-makers and candidates.
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

export default Partners;
