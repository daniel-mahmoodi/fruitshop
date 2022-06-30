import Item1 from "../../Images/Item1.jpg";
import Item2 from "../../Images/Item2.jpg";
import Item3 from "../../Images/Item3.jpg";

import { useState, useRef, useEffect } from "react";

// Data
import data from "../../Data.json";

const Carousel = () => {
  const maxScrollWidth = useRef(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carousel = useRef<HTMLDivElement>(null);

  const movePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  const moveNext = () => {
    if (
      carousel.current !== null &&
      carousel.current.offsetWidth * currentIndex <= maxScrollWidth.current
    ) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const isDisabled = (direction: any) => {
    if (direction === "prev") {
      return currentIndex <= 0;
    }

    if (direction === "next" && carousel.current !== null) {
      return (
        carousel.current.offsetWidth * currentIndex >= maxScrollWidth.current
      );
    }

    return false;
  };

  useEffect(() => {
    if (carousel !== null && carousel.current !== null) {
      carousel.current.scrollLeft = carousel.current.offsetWidth * currentIndex;
    }
  }, [currentIndex]);

  useEffect(() => {
    maxScrollWidth.current = carousel.current
      ? carousel.current.scrollWidth - carousel.current.offsetWidth
      : 0;
  }, []);

  return (
    <div className="carousel my-12 mx-auto">
      <h2 className="text-4xl leading-8 font-semibold mb-12 text-slate-700">
        Our epic carousel
      </h2>
      <div className="relative overflow-hidden">
        <div className="flex justify-between absolute top left w-full h-full">
          <button
            onClick={movePrev}
            className="hover:bg-blue-900/75 text-white w-10 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
            disabled={isDisabled("prev")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-20 -ml-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            <span className="sr-only">Prev</span>
          </button>
          <button
            onClick={moveNext}
            className="hover:bg-blue-900/75 text-white w-10 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
            disabled={isDisabled("next")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-20 -ml-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
            <span className="sr-only">Next</span>
          </button>
        </div>
        <div
          ref={carousel}
          className="carousel-container relative flex gap-1 overflow-hidden scroll-smooth snap-x snap-mandatory touch-pan-x z-0"
        >
          {data.resources.map((resource, index) => {
            return (
              <div
                key={index}
                className="carousel-item text-center relative w-64 h-64 snap-start"
              >
                <a
                  href={resource.link}
                  className="h-full w-full aspect-square block bg-origin-padding bg-left-top bg-cover bg-no-repeat z-0"
                  style={{ backgroundImage: `url(${resource.imageUrl || ""})` }}
                >
                  <img
                    src={resource.imageUrl || ""}
                    alt={resource.title}
                    className="w-full aspect-square hidden"
                  />
                </a>
                <a
                  href={resource.link}
                  className="h-full w-full aspect-square block absolute top-0 left-0 transition-opacity duration-300 opacity-0 hover:opacity-100 bg-blue-800/75 z-10"
                >
                  <h3 className="text-white py-6 px-3 mx-auto text-xl">
                    {resource.title}
                  </h3>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Carousel;

// const Carousel = () => {
//   return (
//     <div
//       id="default-carousel"
//       className="relative container mx-auto"
//       data-carousel="static"
//     >
//       {/* <!-- Carousel wrapper --> */}
//       <div className="overflow-hidden relative h-56 rounded-lg sm:h-64 xl:h-80 2xl:h-96">
//         {/* <!-- Item 1 --> */}
//         <div
//           className="duration-700 ease-in-out absolute inset-0 transition-all transform translate-x-0 z-20"
//           data-carousel-item
//         >
//           <span className="absolute top-1/2 left-1/2 text-2xl font-semibold text-white -translate-x-1/2 -translate-y-1/2 sm:text-3xl dark:text-gray-800">
//             First Slide
//           </span>
//           <img
//             src={Item1}
//             className="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2"
//             alt="..."
//           />
//         </div>
//         {/* <!-- Item 2 --> */}
//         <div
//           className="duration-700 ease-in-out absolute inset-0 transition-all transform translate-x-full z-10"
//           data-carousel-item
//         >
//           <img
//             src={Item2}
//             className="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2"
//             alt="..."
//           />
//         </div>
//         {/* <!-- Item 3 --> */}
//         <div
//           className="duration-700 ease-in-out absolute inset-0 transition-all transform -translate-x-full z-10"
//           data-carousel-item
//         >
//           <img
//             src={Item3}
//             className="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2"
//             alt="..."
//           />
//         </div>
//       </div>
//       {/* <!-- Slider indicators --> */}
//       <div className="flex absolute bottom-5 left-1/2 z-30 space-x-3 -translate-x-1/2">
//         <button
//           type="button"
//           className="w-3 h-3 rounded-full bg-white dark:bg-gray-800"
//           aria-current="true"
//           aria-label="Slide 1"
//           data-carousel-slide-to="0"
//         ></button>
//         <button
//           type="button"
//           className="w-3 h-3 rounded-full bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800"
//           aria-current="false"
//           aria-label="Slide 2"
//           data-carousel-slide-to="1"
//         ></button>
//         <button
//           type="button"
//           className="w-3 h-3 rounded-full bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800"
//           aria-current="false"
//           aria-label="Slide 3"
//           data-carousel-slide-to="2"
//         ></button>
//       </div>
//       {/* <!-- Slider controls --> */}
//       <button
//         type="button"
//         className="flex absolute top-0 left-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
//         data-carousel-prev=""
//       >
//         <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
//           <svg
//             className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               stroke-linecap="round"
//               stroke-linejoin="round"
//               stroke-width="2"
//               d="M15 19l-7-7 7-7"
//             ></path>
//           </svg>
//           <span className="hidden">Previous</span>
//         </span>
//       </button>
//       <button
//         type="button"
//         className="flex absolute top-0 right-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
//         data-carousel-next=""
//       >
//         <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
//           <svg
//             className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               stroke-linecap="round"
//               stroke-linejoin="round"
//               stroke-width="2"
//               d="M9 5l7 7-7 7"
//             ></path>
//           </svg>
//           <span className="hidden">Next</span>
//         </span>
//       </button>
//     </div>
//   );
// };

// export default Carousel;
