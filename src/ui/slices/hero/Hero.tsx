import React from "react";
import Link from "next/link";
import { ParallaxMedia } from "@/ui/components";
import Image from "next/image";
import i1 from "@/assets/images/heroImg.jpg";

export const Hero = () => {
  return (
    <section className="h-screen w-screen flex flex-col justify-between margin-p-1">
      {/* Title span */}
      <div className="flex flex-col items-center w-full gap-4">
        <h1 className="uppercase leading-[75%] font-serif text-[360px]">
          nouilles
        </h1>
        <div className="flex uppercase w-full text-12 justify-between">
          <span>since 1920</span>
          <span>32 nom de la rue - 75016 PARIS</span>
        </div>
      </div>
      {/* content */}
      <div className="flex justify-between items-end">
        <div className="flex flex-col span-w-3 gap-48">
          <h2 className="font-serif leading-[90%] text-32 uppercase">
            La maison des nouilles
          </h2>
          <p className="text-12 text-blue/60 uppercase leading-[100%]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum 
          </p>
          <Link
            href="/"
            className="text-10 w-fit py-20 px-40 bg-blue text-beige uppercase leading-[100%]"
          >
            Réserver
          </Link>
        </div>
        <ParallaxMedia
          scrollProps={{ className: "h-full" }}
          className="h-[62vh] lg-max:hidden span-w-5"
        >
          <Image
            priority
            className="h-full w-full object-cover"
            src={i1}
            alt="Grace Aymone"
            width={600}
          />
        </ParallaxMedia>
      </div>
    </section>
  );
};
