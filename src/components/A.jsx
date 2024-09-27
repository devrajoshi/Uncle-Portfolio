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
import { Carousel } from "@material-tailwind/react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

// import Image from "next/image";
// import { Carousel, Card } from "./ui/apple-cards-carousel";

const A = () => {
  const images = [
    { id: 1, src: uncle1, alt: "image1", caption: "caption" },
    { id: 2, src: uncle2, alt: "image2", caption: "caption" },
    { id: 3, src: uncle3, alt: "image3", caption: "caption" },
    { id: 4, src: uncle4, alt: "image4", caption: "caption" },
    { id: 5, src: uncle5, alt: "image5", caption: "caption" },
    { id: 6, src: uncle6, alt: "image6", caption: "caption" },
    { id: 7, src: uncle7, alt: "image7", caption: "caption" },
    { id: 8, src: uncle8, alt: "image8", caption: "caption" },
    { id: 9, src: uncle9, alt: "image9", caption: "caption" },
    { id: 10, src: uncle10, alt: "image10", caption: "caption" },
  ];

  return (
    <div name="gallery" className="w-full text-white md:h-screen">
      <div className="py-8 text-center max-w-screen-lg mx-auto flex flex-col justify-center w-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-gray-400">
            Gallery
          </p>
          <p className="py-6 font-bold text-yellow-300">
            Here are some memorable moments captured in the gallery below.
          </p>
        </div>

        <div className="flex justify-center ">
          <button>
            <FaArrowLeft size={25} />
          </button>
          <div>
            <div>
              {images.map(({ id, src, alt, caption }) => (
                <div key={id} className="grid sm:grid-cols-2 py-3 md:grid-cols-3 gap-8 px-1grid2 sm:px-0">
                  <img
                    src={src}
                    alt={alt}
                    className="rounded-md hover:scale-105 duration-200"
                  />
                  <div className="py-3 flex flex-col">
                    <p>Date: {new Date().toLocaleDateString()}</p>
                    <p className="text-gray-600">{caption}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button>
            <FaArrowRight size={25} />
          </button>
        </div>

        {/* <Carousel items={cards} /> */}
      </div>
    </div>
  );
};

export default A;
