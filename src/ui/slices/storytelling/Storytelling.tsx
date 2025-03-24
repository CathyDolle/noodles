import React from "react";
import Image from "next/image";
import Link from "next/link";
import i2 from "@/assets/images/story.jpg";
import { ParallaxMedia } from "@/ui/components";

export const Storytelling = () => {
  return (
    <section className="w-screen lg-max:margin-p-1 lg-max:mt-64 flex lg-max:flex-col-reverse flex-wrap gutter-gap-1 lg:items-end">
      <ParallaxMedia scrollProps={{ className: "h-full" }}>
        <Image
          className="lg:span-w-7-wide aspect-square lg:aspect-[3/2] object-cover object-top"
          src={i2}
          alt="Storytelling"
          width={1000}
          height={1000}
        />
      </ParallaxMedia>

      <div className="flex flex-col span-w-5 lg:span-w-3 gap-40">
        <h3 className="font-serif leading-[90%] text-32 uppercase">
          Notre histoire
        </h3>
        <p className="text-12 text-blue/70 font-serif leading-[100%]">
          Chez La Maison de Nouilles, tout commence par une passion : celle des
          nouilles chinoises traditionnelles, préparées selon un savoir-faire
          ancestral. Inspiré des échoppes authentiques de Lanzhou, notre
          restaurant recrée l’expérience d’une cuisine artisanale, où chaque bol
          de nouilles en soupe ou de nouilles sautées est un hommage à la street
          food chinoise. Avec des ingrédients frais et des techniques
          maîtrisées, nous vous offrons un voyage culinaire unique, au cœur de
          Paris.
        </p>
        <div className="flex gutter-mb-1">
          <Link
            className="flex items-center text-blue uppercase span-w-1 text-10 gap-8"
            href="/"
          >
            Twitter{" "}
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.64645 3.64644C3.45118 3.8417 3.45118 4.15828 3.64645 4.35354L10.2929 11L6 11C5.72386 11 5.5 11.2239 5.5 11.5C5.5 11.7761 5.72386 12 6 12L11.5 12C11.6326 12 11.7598 11.9473 11.8536 11.8536C11.9473 11.7598 12 11.6326 12 11.5L12 5.99999C12 5.72385 11.7761 5.49999 11.5 5.49999C11.2239 5.49999 11 5.72385 11 5.99999V10.2929L4.35355 3.64643C4.15829 3.45117 3.84171 3.45117 3.64645 3.64644Z"
                fill="currentColor"
                fillRule="evenodd"
                clipRule="evenodd"
              ></path>
            </svg>
          </Link>
          <Link
            className="flex items-center text-blue uppercase span-w-1 text-10 gap-8"
            href="/"
          >
            Instagram{" "}
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.64645 3.64644C3.45118 3.8417 3.45118 4.15828 3.64645 4.35354L10.2929 11L6 11C5.72386 11 5.5 11.2239 5.5 11.5C5.5 11.7761 5.72386 12 6 12L11.5 12C11.6326 12 11.7598 11.9473 11.8536 11.8536C11.9473 11.7598 12 11.6326 12 11.5L12 5.99999C12 5.72385 11.7761 5.49999 11.5 5.49999C11.2239 5.49999 11 5.72385 11 5.99999V10.2929L4.35355 3.64643C4.15829 3.45117 3.84171 3.45117 3.64645 3.64644Z"
                fill="currentColor"
                fillRule="evenodd"
                clipRule="evenodd"
              ></path>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};
