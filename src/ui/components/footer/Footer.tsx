import React from "react";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-blue  overflow-hidden text-beige relative w-screen lg:h-screen">
      <div className="flex lg-max:flex-col margin-p-1">
        <div className="flex flex-col gap-16 lg:gap-40  lg:span-w-3">
          <h6 className="text-20 lg:text-32 uppercase leading-[100%] font-serif">
            La maison des nouilles
          </h6>
          <p className="text-12 lg-max:mb-40 text-beige/60 leading-[100%] uppercase">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati
            molestias accusantium repellat aliquid facere officiis quo neque
            consequatur illum doloribus.
          </p>
        </div>
        <div className="flex lg-max:mb-120 lg-max:flex-col lg:span-ml-4-wider gap-32 lg:gap-64">
          <div className="flex flex-col gap-16 lg:gap-40 lg:span-w-2">
            <h6 className="text-20 lg:text-32 uppercase leading-[100%] font-serif">
              Links here
            </h6>
            <div className="flex flex-col gap-8">
              <Link href="/" className="text-12 uppercase leading-[100%]">
                Twitter
              </Link>
              <Link href="/" className="text-12 uppercase leading-[100%]">
                Instagram
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-16 lg:gap-40 lg:span-w-2">
            <h6 className="text-20 lg:text-32 uppercase leading-[100%] font-serif">
              Links here
            </h6>
            <div className="flex flex-col gap-8">
              <Link href="/" className="text-12 uppercase leading-[100%]">
                Twitter
              </Link>
              <Link href="/" className="text-12 uppercase leading-[100%]">
                Instagram
              </Link>
            </div>
          </div>
        </div>
      </div>

      <span className="uppercase lg:absolute  text-100 lg:-ml-120 bottom-0 text-beige leading-[75%] font-serif lg:text-[360px]">
        nouilles
      </span>
    </footer>
  );
};
