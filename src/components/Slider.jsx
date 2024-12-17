import React, { useEffect } from "react";
import Glide from "@glidejs/glide";
import ad from "../assets/add.png";

export default function Slider() {
  useEffect(() => {
    const slider = new Glide(".glide-01", {
      type: "carousel",
      focusAt: "center",
      perView: 1, // Display one image at a time
      autoplay: 3000,
      animationDuration: 700,
      gap: 24,
      breakpoints: {
        1024: {
          perView: 1, // Maintain one image for smaller screens
        },
        640: {
          perView: 1,
        },
      },
    }).mount();

    return () => {
      slider.destroy();
    };
  }, []);

  return (
    <>
      <div className="glide-01 relative w-full mt-8">
        {/* Slides */}
        <div className="overflow-hidden" data-glide-el="track">
          <ul className="relative flex w-full overflow-hidden p-0">
            <li>
              <img src={ad} alt="Slide 1" className="w-full h-auto" />
            </li>
            <li>
              <img src={ad} alt="Slide 2" className="w-full h-auto" />
            </li>
            <li>
              <img src={ad} alt="Slide 3" className="w-full h-auto" />
            </li>
          </ul>
        </div>
        {/* Controls */}
        <div
          className="absolute left-0 top-1/2 flex w-full justify-between px-4"
          data-glide-el="controls"
        >
          <button
            className="h-8 w-8 lg:h-12 lg:w-12"
            data-glide-dir="<"
            aria-label="prev slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
              />
            </svg>
          </button>
          <button
            className="h-8 w-8 lg:h-12 lg:w-12"
            data-glide-dir=">"
            aria-label="next slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}
