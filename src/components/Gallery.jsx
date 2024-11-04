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

function CarouselTransition() {
  const images = [
    { id: 1, src: uncle1, alt: "image1", caption: "From the event held at Singha Durbar", date: "" },
    { id: 2, src: uncle2, alt: "image2", caption: "This is a random caption", date: "" },
    { id: 3, src: uncle3, alt: "image3", caption: "caption", date: "" },
    { id: 4, src: uncle4, alt: "image4", caption: "caption", date: "" },
    { id: 5, src: uncle5, alt: "image5", caption: "caption", date: "" },
    { id: 6, src: uncle6, alt: "image6", caption: "caption", date: "" },
    { id: 7, src: uncle7, alt: "image7", caption: "caption", date: "" },
    { id: 8, src: uncle8, alt: "image8", caption: "caption", date: "" },
    { id: 9, src: uncle9, alt: "image9", caption: "caption", date: "" },
    { id: 10, src: uncle10, alt: "image10", caption: "caption" },
  ];

  return (
    <div
      name="gallery"
      className="w-full min-h-screen bg-black pt-20 text-white overflow-hidden"
    >
      <div className="text-center flex flex-col justify-center items-center w-full px-4 md:px-8 lg:px-12">
        <div>
          <span>
            <p className="text-3xl sm:text-4xl font-bold inline border-b-4 border-gray-400">
              Gallery
            </p>
          </span>
          <p className="py-6 font-bold text-yellow-300 text-sm sm:text-base lg:text-lg">
            Here are some memorable moments captured in the gallery below.
          </p>
        </div>
        <div className="flex justify-center items-center w-full h-[60vh] sm:h-[70vh] lg:h-[80vh]">
          <Carousel
            transition={{ duration: 2 }}
            autoplay={true}
            loop={true}
            className="mx-4 rounded-xl w-full max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-3xl h-full"
          >
            {images.map(({ id, src, alt, caption, date }) => (
              <div
                key={id}
                className="flex flex-col justify-center items-center h-full p-4 md:p-6 lg:p-8"
              >
                <div className="mb-4 text-center">
                  <p className="text-xs sm:text-sm md:text-base lg:text-lg font-caption">Date: {date}</p>
                  <p className="text-xs sm:text-sm md:text-base lg:text-lg font-caption">Title: {caption}</p>
                </div>
                <div className="w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] overflow-hidden rounded-md">
                  <img
                    src={src}
                    alt={alt}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default CarouselTransition;
