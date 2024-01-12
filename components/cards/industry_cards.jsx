import Button from "../buttons/Button";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { TitleLine } from "../TitleBar";
import Image from "next/image";

export function IndustryCardsTextRight({
  image,
  title,
  header,
  description,
  points,
}) {
  return (
    <div className="w-full flex flex-col lg:flex-row gap-5 px-5">
      <div className="w-full lg:w-1/2 flex justify-center">
        <div className="w-full h-full flex items-center justify-center lg:justify-start">
          <div className="w-full h-96 mr-5 relative">
            <Image
              className="object-cover rounded-md"
              src={image}
              alt="BG"
              fill
            />
          </div>
        </div>
      </div>
      <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start gap-3">
        <TitleLine>{title}</TitleLine>
        <div className="flex flex-col text-center lg:text-start">
          <h1 className="font-bold text-2xl lg:text-3xl">{header}</h1>
          <p className="w-full lg:w-6/7 xl:w-2/3">{description}</p>
        </div>
        <div className="lg:w-6/7 xl:w-2/3 flex flex-wrap gap-3 justify-center lg:justify-start">
          {points.map((point) => (
            <p key={point} className="flex items-center gap-1">
              <AiFillSafetyCertificate className="text-cyan-500" /> {point}
            </p>
          ))}
        </div>
        <Button>Read More</Button>
      </div>
    </div>
  );
}

export function IndustryCardsTextLeft({
  image,
  title,
  header,
  description,
  points,
}) {
  return (
    <div className="w-full flex flex-col-reverse lg:flex-row gap-5 px-5">
      <div className="lg:ml-10 w-full lg:w-1/2 flex flex-col items-center lg:items-start gap-3">
        <TitleLine>{title}</TitleLine>
        <div className="flex flex-col text-center lg:text-start">
          <h1 className="font-bold text-2xl lg:text-3xl">{header}</h1>
          <p className="w-full lg:w-6/7 xl:w-2/3">{description}</p>
        </div>
        <div className="lg:w-6/7 xl:w-2/3 flex flex-wrap gap-3 justify-center lg:justify-start">
          {points.map((point) => (
            <p key={point} className="flex items-center gap-1">
              <AiFillSafetyCertificate className="text-cyan-500" /> {point}
            </p>
          ))}
        </div>
        <Button>Read More</Button>
      </div>
      <div className="w-full lg:w-1/2 flex justify-center">
        <div className="w-full h-full flex items-center justify-center">
          <div className="w-full h-96 relative">
            <Image
              className="object-cover rounded-md"
              src={image}
              alt="BG"
              fill
            />
          </div>
        </div>
      </div>
    </div>
  );
}
