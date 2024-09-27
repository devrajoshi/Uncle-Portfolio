import React from "react";
import uncle1 from "../assets/gallery/uncle1.jpg";
import uncle2 from "../assets/gallery/uncle2.jpg";
import uncle3 from "../assets/gallery/uncle3.jpg";
import uncle4 from "../assets/gallery/uncle4.jpg";
import uncle5 from "../assets/gallery/uncle5.jpg";
import uncle6 from "../assets/gallery/uncle6.jpg";
import uncle7 from "../assets/gallery/uncle7.jpg";
import uncle8 from "../assets/gallery/uncle8.jpg";
import uncle9 from "../assets/gallery/uncle9.jpg";
import uncle10 from "../assets/gallery/uncle10.jpg";
// import Image from "next/image";
import { Carousel, Card } from "./ui/apple-cards-carousel";

const Gallery = () => {
  const images = [
    { id: 1, src: uncle1, title: "caption", content: "dummy content" },
    { id: 2, src: uncle2, title: "caption", content: "dummy content" },
    { id: 3, src: uncle3, title: "caption", content: "dummy content" },
    { id: 4, src: uncle4, title: "caption", content: "dummy content" },
    { id: 5, src: uncle5, title: "caption", content: "dummy content" },
    { id: 6, src: uncle6, title: "caption", content: "dummy content" },
    { id: 7, src: uncle7, title: "caption", content: "dummy content" },
    { id: 8, src: uncle8, title: "caption", content: "dummy content" },
    { id: 9, src: uncle9, title: "caption", content: "dummy content" },
    { id: 10, src: uncle10, title: "caption", content: "dummy content" },
  ];

  const cards = images.map((card, index) => (
    <Card key={card.src} card={card} index={index} layout={true} />
  ));

  return (
    <div name="gallery" className="w-full text-white">
      <div className="py-8 text-center max-w-screen-lg mx-auto flex flex-col justify-center w-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-gray-400">
            Gallery
          </p>
          <p className="py-6 font-bold text-yellow-300">
            Here are some memorable moments captured in the gallery below.
          </p>
        </div>

          {/* <Carousel items={cards} /> */}
      </div>
    </div>
  );
};

export default Gallery;
