import React from "react";
import Image from "next/image";
import i3 from "@/assets/images/p3.jpg";
import { ParallaxMedia } from "@/ui/components";
import Link from "next/link";

export const Carte = () => {
  return (
    <section className="w-screen text-beige overflow-hidden lg-max:margin-p-1 margin-py-1 margin-pr-1 lg-max:flex-col flex h-screen bg-blue">
      <div className="lg:span-w-7-wider relative overflow-hidden  lg:items-center flex  flex-col justify-between">
        <span className="text-100 lg:text-[300px] leading-[80%] font-serif uppercase ">
          Carte
        </span>
        <div className="flex flex-col lg:absolute bottom-0 lg-max:py-64 margin-left-1 span-w-5 lg:span-w-3 gap-32">
          <h4 className="font-serif leading-[90%] text-20 uppercase">
          Une Carte Authentique<br/>et Gourmande
          </h4>
          <p className="text-12 font-serif leading-[100%]">
            Découvrez notre carte où les Lanzhou Mian, tirées à la main, sont
            les véritables stars. Entre nouilles en soupe, aux bouillons riches
            et savoureux, et nouilles sautées aux parfums authentiques, chaque
            plat est préparé avec soin. Complétez votre repas avec nos
            accompagnements chinois et savourez le meilleur de la cuisine
            traditionnelle asiatique.
          </p>
          <Link
            href="/"
            className="text-10 w-fit py-20 px-40 bg-beige text-blue uppercase leading-[100%]"
          >
            Voir la carte
          </Link>
        </div>
      </div>
      <ParallaxMedia
        scrollProps={{
          className: "lg-max:aspect-square lg:h-full lg:span-w-5",
        }}
      >
        <Image src={i3} className="h-full w-full object-cover" alt="Carte" />
      </ParallaxMedia>
    </section>
  );
};
