import React from "react";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="fixed flex justify-end flex-wrap lg-max:scale-[0.8] origin-bottom-right lg:span-w-2-wider  margin-bottom-1 text-blue  uppercase text-12 leading-[100%] margin-right-1 z-50">
      <Link
        href="https://drive.google.com/file/d/18smwL0PHOl6TbDhzPQBP-GtEQfCq5e0Z/view"
        target="_blank"
        className="w-80 flex items-end border-blue border p-6 h-80 bg-beige"
      >
        Carte
      </Link>
      <div className="w-80 flex items-end border-blue border p-6 h-80 bg-beige">
        <p>Contact</p>
      </div>
      <div className="flex">
        <Link
          href="https://widget.thefork.com/565c5ed9-b18d-4cc3-a4bd-b6a2c87af51b"
          target="_blank"
        >
          <div className="w-160 flex items-end border-blue border p-6 h-80 bg-beige">
            <p>
              Réserver
              <br />
              en ligne
            </p>
          </div>
        </Link>
        <div className="w-80 flex items-end border-blue border p-6 h-80 bg-beige">
          <p>
            6j/7
            <br />
            11H30-22H30
          </p>
        </div>
      </div>
    </header>
  );
};
