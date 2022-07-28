import React from "react";
import "./styles.css";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Roll = () => {
  useEffect(() => {
    gsap.to("#roller", {
      scrollTrigger: {
        toggleActions: "play pause resume reverse",
        trigger: "#roller",
        markers: true,
        start: "top 100",
        end: "+=300%",
      },
      rotate: 4000,
      duration: 10,
    });
  });

  return (
    <div className="w-1/2 flex items-baseline  pt-40  justify-center">
      <div className=" bg-blue-300 w-20 fixed rounded-full h-20 " id={"roller"}>
        Roll<p>x</p>
      </div>
    </div>
  );
};

export default Roll;
