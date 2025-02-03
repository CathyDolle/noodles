import React from "react";
import { ParallaxMedia } from "@/ui/components";
import Image from "next/image";
import i1 from "@/assets/images/heroImg.jpg";

export const Contact = () => {
  return (
    <section className="w-screen margin-p-1 h-screen flex">
      <ParallaxMedia scrollProps={{ className: "h-full span-w-7" }}>
        <Image src={i1} className="h-full w-full object-cover" alt="Contact" />
      </ParallaxMedia>
      <div className="span-w-5 flex flex-col justify-center span-ml-1-wider">
        <h5 className="font-serif text-80">Contact</h5>
        <form className="span-w-3">
          <div className="flex flex-col gap-40">
            <input
              type="text"
              name="name"
              placeholder="Nom"
              className="uppercase w-full text-12 font-serif  border-blue/40 border-b bg-transparent"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="uppercase w-full text-12 font-serif  border-blue/40 border-b bg-transparent"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Téléphone"
              className="uppercase w-full text-12 font-serif border-blue/40 border-b bg-transparent"
            />
            <select
              name="subject"
              className="uppercase w-full text-12 font-serif border-blue/40  border-b bg-transparent"
            >
              <option value="">Sélectionnez un objet</option>
              <option value="devis">Demande de devis</option>
              <option value="info">Demande d'information</option>
              <option value="autre">Autre</option>
            </select>
            <textarea
              name="message"
              placeholder="Votre message"
              rows={6}
              className="uppercase w-full  text-12 font-serif border-blue/40 border-b bg-transparent"
            />
          </div>
          <button
            type="submit"
            className="uppercase  bg-blue mt-32 text-10 w-full text-beige  py-12"
          >
            Envoyer
          </button>
        </form>
      </div>
    </section>
  );
};
