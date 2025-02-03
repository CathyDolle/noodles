import React from "react";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="fixed flex justify-end flex-wrap lg-max:scale-[0.8] origin-bottom-right lg:span-w-2-wider  margin-bottom-1 text-blue  uppercase text-12 leading-[100%] margin-right-1 z-50">
      <div className="w-80 flex items-end border-blue border p-6 h-80 bg-beige">
        <p>Carte</p>
      </div>
      <div className="w-80 flex items-end border-blue border p-6 h-80 bg-beige">
        <p>Contact</p>
      </div>
      <div className="flex">
        <Link href="/" target="_blank">
          <div className="w-160 flex items-end border-blue border p-6 h-80 bg-beige">
            <p>Réserver<br/>en ligne</p>
          </div>
        </Link>
        <div className="w-80 flex items-end border-blue border p-6 h-80 bg-beige">
          <p>7/7<br/>11H-22H</p>
        </div>
      </div>
    </header>
  );
};
