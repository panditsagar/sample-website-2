"use client";

import Image from "next/image";

const FEATURED_LOGOS = [
  {
    name: "CBS News",
    src: "/logo/logo1.png",
    width: 120,
    height: 77,
    className: "h-9 sm:h-10 lg:h-12 w-auto",
  },
  {
    name: "NBC News",
    src: "/logo/logo2.png",
    width: 110,
    height: 110,
    className: "h-11 sm:h-13 lg:h-15 w-auto",
  },
  {
    name: "ABC News",
    src: "/logo/logo3.png",
    width: 142,
    height: 49,
    className: "h-8 sm:h-9 lg:h-11 w-auto",
  },
  {
    name: "Entrepreneur India",
    src: "/logo/logo4.png",
    width: 198,
    height: 120,
    className: "h-11 sm:h-13 lg:h-15 w-auto",
  },
];

export default function FeaturedIn() {
  const logoTrack = [...FEATURED_LOGOS, ...FEATURED_LOGOS, ...FEATURED_LOGOS];

  return (
    <section
      aria-label="As Featured In"
      className="relative w-full py-10 sm:py-14 bg-gradient-to-b from-[#f9ece2]/35 via-[#FAF8F5] to-[#FAF8F5] overflow-hidden select-none"
    >
      {/* ================= SMOOTH MARQUEE CONTAINER ================= */}
      <div className="group relative flex overflow-hidden w-full items-center">
        {/* Left Gradient Fade Mask */}
        <div
          className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 sm:w-40 lg:w-56 z-10"
          style={{
            background:
              "linear-gradient(to right, #FAF8F5 0%, rgba(250, 248, 245, 0.85) 35%, transparent 100%)",
          }}
          aria-hidden="true"
        />

        {/* Right Gradient Fade Mask */}
        <div
          className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 sm:w-40 lg:w-56 z-10"
          style={{
            background:
              "linear-gradient(to left, #FAF8F5 0%, rgba(250, 248, 245, 0.85) 35%, transparent 100%)",
          }}
          aria-hidden="true"
        />

        <div className="marquee-track flex w-max items-center">
          {[0, 1].map((track) => (
            <div
              key={track}
              className="flex shrink-0 items-center"
              aria-hidden={track === 1}
            >
              {logoTrack.map((logo, index) => (
                <div
                  key={`track-${track}-${logo.name}-${index}`}
                  className="px-8 sm:px-12 lg:px-16 flex items-center justify-center shrink-0"
                >
                  <div className="relative group/logo transition-transform duration-300 hover:scale-105">
                    <Image
                      src={logo.src}
                      alt={track === 0 ? logo.name : ""}
                      width={logo.width}
                      height={logo.height}
                      className={`${logo.className} object-contain opacity-55 grayscale contrast-125 transition-all duration-300 group-hover/logo:opacity-100 group-hover/logo:grayscale-0`}
                    />
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
