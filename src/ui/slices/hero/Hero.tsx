import React from "react";
import Link from "next/link";
import { ParallaxMedia } from "@/ui/components";
import Image from "next/image";
import i1 from "@/assets/images/heroImg.jpg";

export const Hero = () => {
  return (
    <section className="h-screen w-screen overflow-hidden flex flex-col justify-between margin-p-1">
      {/* Title span */}
      <div className="flex flex-col items-center w-full gap-4">
        <h1 className="uppercase leading-[75%] font-serif text-90 lg:text-[360px]">
          nouilles
        </h1>
        <div className="flex uppercase w-full text-10 lg:text-12 justify-between">
          <span>since 1920</span>
          <span>32 nom de la rue - 75016 PARIS</span>
        </div>
      </div>
      {/* content */}
      <div className="flex lg-max:flex-col lg-max:margin-gap-1 justify-between items-end">
        <div className="flex flex-col lg:span-w-3 gap-32 lg:gap-48">
          <h2 className="font-serif leading-[90%] text-24 lg:text-32 uppercase">
            La maison
            <br />
            des nouilles
          </h2>
          <p className="text-12 text-blue/80 font-serif  leading-[100%]">
            Envie de déguster de véritables nouilles chinoises faites maison à
            Paris ? Bienvenue à La Maison de Nouilles, le restaurant spécialisé
            dans les Lanzhou Mian, ces célèbres nouilles tirées à la main sous
            vos yeux. Plongez dans l'authenticité d'une cuisine chinoise
            artisanale, entre bouillons parfumés et nouilles sautées
            savoureuses. Réservez dès maintenant et laissez-vous tenter par une
            expérience culinaire unique au cœur de Paris !
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
          className="lg:h-[62vh] lg-max:aspect-[square] lg:span-w-5"
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
