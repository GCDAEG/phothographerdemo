import React from "react";
import { ResponsiveImage } from "./ResponsiveImage";

interface BannerProps {}

const Banner: React.FC<BannerProps> = ({}) => {
  return (
    <div className="fixed  border border-red-500 inset-0 -z-10 pointer-events-none">
      <ResponsiveImage
        src="/banner.png"
        alt="Hero image"
        priority
        fit="cover"
        className="h-full md:h-full"
      />
    </div>
  );
};

export default Banner;
