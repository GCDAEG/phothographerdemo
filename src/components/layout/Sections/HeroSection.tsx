import React from "react";

import BackgroundVideo from "../../ui/backgroundVIdeo";
import { Button } from "../../ui/button";
import { HeroCTAButton } from "@/components/ui/CTAButton";
// interface HeroSectionProps {}

const HeroSection = ({}) => {
  return (
    <BackgroundVideo
      className={`items-end py-12`}
      src="/backgroundvideo.mp4"
      overlay={"gradient"}
      id="hero"
    >
      <div className="w-full flex justify-end md:justify-center flex-col gap-6 px-4 py-8 md:text-center pb-5 bg-secondary/30 text-foreground">
        <div className="flex flex-col gap-5 flex-1 justify-end items-center  ">
          <h1 className="">AGUAYRIO</h1>
          <p
            className={`text-base text-secondary-foreground text-center text-balance`}
          >
            Descansa con las mejores vistas y a dos cuadras del rio.
          </p>
        </div>
        <div className="w-full flex justify-center">
          <HeroCTAButton />
          {/* <Button className="rounded-xs bg-transparent h-12 w-32 text-foreground">
                Read more
              </Button> */}
        </div>
      </div>

      {/* <div className="absolute inset-0 -z-10 w-full h-full bg-[url('/heroimg.jpg')] bg-center bg-cover">
            <div className="absolute top-0 let-0 h-full w-full bg-linear-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
          </div> */}
    </BackgroundVideo>
  );
};

export default HeroSection;
