import React from "react";
import { title, title as titleFont } from "@/app/page";
import { base } from "framer-motion/client";
import BackgroundVideo from "../../ui/backgroundVIdeo";
import { Button } from "../../ui/button";
// interface HeroSectionProps {}

const HeroSection = ({}) => {
  return (
    <BackgroundVideo
      className={`flex bg-red-500/30`}
      src="/backgroundvideo.mp4"
      overlay={"gradient"}
    >
      {" "}
      {/* Por que no puedo lograr que esta linea ocupe todo el contenedor? (Esta linea es para la IA)*/}
      <div className="flex w-full" id="hero">
        <div className=" w-full flex justify-end md:justify-center flex-col space-y-5 md:text-center pb-5">
          <div className="flex flex-col gap-12 flex-1 justify-end text-accent/85">
            <h1
              className={` text-6xl lg:text-7xl ${title} w-full 2xl:text-9xl font-bold`}
            >
              Defendemos lo que más importa
            </h1>
            <p className={`${base} text-xl`}>
              Tu futuro. Tu libertad. Tu familia.
            </p>
          </div>
          <div className="w-full">
            <Button
              className={`rounded-xs text-xl bg-card/10 text-primary border-2 border-primary h-12 w-52 ${title}`}
            >
              Consultar
            </Button>
            {/* <Button className="rounded-xs bg-transparent h-12 w-32 text-foreground">
                Read more
              </Button> */}
          </div>
        </div>

        {/* <div className="absolute inset-0 -z-10 w-full h-full bg-[url('/heroimg.jpg')] bg-center bg-cover">
            <div className="absolute top-0 let-0 h-full w-full bg-linear-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
          </div> */}
      </div>
    </BackgroundVideo>
  );
};

export default HeroSection;
