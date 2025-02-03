import React from "react";
import Image from "next/image";
import i3 from "@/assets/images/heroImg.jpg";
import { ParallaxMedia } from "@/ui/components";
import Link from "next/link";

export const Carte = () => {
  return (
    <section className="w-screen text-beige margin-py-1 margin-pr-1 flex h-screen bg-blue">
      <div className="span-w-7-wider relative overflow-hidden items-center flex  flex-col justify-between">
        <span className=" text-[300px] items-center leading-[80%] text-center font-serif uppercase ">
          Carte
        </span>
        <div className="flex flex-col absolute bottom-0 margin-left-1 span-w-3 gap-32">
          <h4 className="font-serif leading-[90%] text-20 uppercase">
            Nouilles froides
            <br />
            sans soupes
          </h4>
          <p className="text-12 uppercase leading-[100%]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          </p>
          <Link
            href="/"
            className="text-10 w-fit py-20 px-40 bg-beige text-blue uppercase leading-[100%]"
          >Voir la carte</Link>
        </div>
      </div>
      <ParallaxMedia scrollProps={{ className: "h-full span-w-5" }}>
        <Image src={i3} className="h-full w-full object-cover" alt="Carte" />
      </ParallaxMedia>
    </section>
  );
};
