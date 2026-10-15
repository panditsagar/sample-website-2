"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import "./Testimonials.css";

const testimonials = [
  {
     headline: "A clear plan. A calmer founder.",
    quote:
      "I used to start every day reacting to whatever needed me most. Having a clear plan helped me step back, focus on the right priorities, and lead with more confidence.",
    founder: "Manufacturing business owner",
    avatar: "/images/avatars/avatar-10.jpg",
    position: { x: 183, y: 130, size: 70 },
  },
  {
     headline: "My team started taking ownership.",
    quote:
      "Defining roles and building a simple review rhythm changed how we work together. My team knows what success looks like, and every decision no longer has to come through me.",
    founder: "Professional services founder",
    avatar: "/images/avatars/avatar-4.jpg",
    position: { x: 327, y: 219, size: 104 },
  },
  {
     headline: "Less firefighting. More building.",
    quote:
      "We had the ambition, but our everyday processes were holding us back. Putting practical systems in place gave us a more consistent way to work and the space to think ahead.",
    founder: "Retail business owner",
    avatar: "/images/avatars/avatar-5.jpg",
    position: { x: 452, y: 122, size: 88 },
  },
  {
     headline: "I found the space to lead again.",
    quote:
      "Stepping away from the smallest decisions felt impossible at first. Learning to delegate with clear expectations helped me trust my team and spend more time on the future of the business.",
    founder: "Family business owner",
    avatar: "/images/avatars/avatar-8.jpg",
    position: { x: 582, y: 171, size: 100 },
  },
  {
     headline: "Our plans became everyday habits.",
    quote:
      "We always left meetings with good intentions. A weekly review and a few clear priorities helped us follow through, spot problems earlier, and keep moving together.",
    founder: "Distribution business owner",
    avatar: "/images/avatars/avatar-7.jpg",
    position: { x: 732, y: 142, size: 98 },
  },
  {
     headline: "Building no longer felt so lonely.",
    quote:
      "Being around other founders reminded me that I was not the only one figuring things out. Honest conversations and practical guidance gave me a fresh perspective on the challenges ahead.",
    founder: "Creative agency founder",
    avatar: "/images/avatars/avatar-community.jpg",
    position: { x: 857, y: 235, size: 84 },
  },
  {
     headline: "I started seeing the bigger picture.",
    quote:
      "Making time to look at the whole business helped me see where my attention was really needed. I began asking better questions and making decisions with a clearer sense of direction.",
    founder: "Technology business owner",
    avatar: "/images/avatars/avatar-9.jpg",
    position: { x: 975, y: 140, size: 86 },
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(3);
  const portraitViewportRef = useRef(null);
  const portraitRefs = useRef([]);
  const touchStartRef = useRef(null);
  const testimonial = testimonials[activeIndex];

  useEffect(() => {
    const viewport = portraitViewportRef.current;
    const portrait = portraitRefs.current[activeIndex];
    if (!viewport || !portrait) return;

    function centerPortrait(behavior) {
      const viewportBounds = viewport.getBoundingClientRect();
      const portraitBounds = portrait.getBoundingClientRect();

      viewport.scrollTo({
        left:
          viewport.scrollLeft +
          portraitBounds.left -
          viewportBounds.left +
          portraitBounds.width / 2 -
          viewport.clientWidth / 2,
        behavior,
      });
    }

    centerPortrait(
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "instant"
        : "smooth",
    );

    const observer = new ResizeObserver(() => centerPortrait("instant"));
    observer.observe(viewport);
    return () => observer.disconnect();
  }, [activeIndex]);

  function selectTestimonial(index) {
    setActiveIndex((index + testimonials.length) % testimonials.length);
  }

  function handlePortraitKeyDown(event, index) {
    let nextIndex;
    switch (event.key) {
      case "ArrowLeft":
        nextIndex = (index - 1 + testimonials.length) % testimonials.length;
        break;
      case "ArrowRight":
        nextIndex = (index + 1) % testimonials.length;
        break;
      case "Home":
        nextIndex = 0;
        break;
      case "End":
        nextIndex = testimonials.length - 1;
        break;
      default:
        return;
    }

    event.preventDefault();
    selectTestimonial(nextIndex);
    portraitRefs.current[nextIndex]?.focus({ preventScroll: true });
  }

  function handleTouchEnd(event) {
    const start = touchStartRef.current;
    touchStartRef.current = null;
    if (!start) return;

    const deltaX = event.changedTouches[0].clientX - start.x;
    const deltaY = event.changedTouches[0].clientY - start.y;
    if (Math.abs(deltaX) > 50 && Math.abs(deltaX) > Math.abs(deltaY)) {
      selectTestimonial(activeIndex + (deltaX < 0 ? 1 : -1));
    }
  }

  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="w-full bg-white py-16 sm:py-20 lg:py-24"
    >
      <div className="px-6 sm:px-10 lg:px-14">
        <div className="mx-auto grid max-w-[1240px] gap-6 lg:grid-cols-[0.92fr_1fr] lg:items-end lg:gap-24">
          <div>
          
            <h2
              id="testimonials-heading"
              className="max-w-[500px] font-satoshi text-3xl font-black leading-[1.12] text-[#131D35] sm:text-4xl lg:text-[44px]"
            >
              Every founder has a story.
            </h2>
          </div>
          <p className="max-w-[540px] font-switzer text-base leading-relaxed text-neutral-600 sm:text-lg lg:ml-auto">
            Different businesses. Shared challenges. Discover how practical
            systems and a clearer direction can help founders build with more
            confidence.
          </p>
        </div>
      </div>

      <div
        role="region"
        aria-roledescription="carousel"
        aria-label="Founder testimonials"
        className="mx-auto mt-5 max-w-[1440px] sm:mt-8"
      >
        <p id="testimonials-instructions" className="sr-only">
          Select a portrait to read their sample testimonial. Use the left and
          right arrow keys to move between portraits, or swipe on the quote.
        </p>

        <div ref={portraitViewportRef} className="testimonial-portrait-viewport">
          <div
            role="group"
            aria-label="Choose a founder testimonial"
            aria-describedby="testimonials-instructions"
            className="testimonial-portrait-stage"
          >
            <svg
              viewBox="0 0 1140 340"
              fill="none"
              aria-hidden="true"
              className="testimonial-wave"
            >
              <path
                d="M-20 134C70 166 101 64 174 69C273 62 235 208 243 239C255 319 356 315 392 246C430 179 359 105 410 70C467 29 518 91 522 145C525 258 639 265 652 153C662 65 706 38 753 77C822 126 781 203 796 251C813 318 891 309 904 229C913 182 879 131 916 89C1000 20 1040 109 1045 174C1044 241 1112 249 1166 217"
                stroke="#D5D2CE"
                strokeWidth="1.25"
                strokeDasharray="1 5.5"
                strokeLinecap="round"
                vectorEffect="non-scaling-stroke"
              />
              {[
                { x: 242, y: 230, radius: 7 },
                { x: 388, y: 127, radius: 4 },
                { x: 654, y: 137, radius: 6 },
                { x: 806, y: 271, radius: 4 },
                { x: 922, y: 89, radius: 3 },
                { x: 1046, y: 184, radius: 5.5 },
              ].map((dot) => (
                <circle
                  key={dot.x}
                  cx={dot.x}
                  cy={dot.y}
                  r={dot.radius}
                  fill="#131D35"
                />
              ))}
            </svg>

            {testimonials.map((item, index) => (
              <button
                key={item.topic}
                ref={(element) => {
                  portraitRefs.current[index] = element;
                }}
                type="button"
                aria-label={`Read testimonial ${index + 1}: ${item.founder}`}
                aria-pressed={index === activeIndex}
                aria-controls="testimonial-quote"
                onClick={() => selectTestimonial(index)}
                onKeyDown={(event) => handlePortraitKeyDown(event, index)}
                className="testimonial-portrait"
                style={{
                  left: `${(item.position.x / 1140) * 100}%`,
                  top: `${(item.position.y / 340) * 100}%`,
                  width: `${(item.position.size / 1140) * 100}%`,
                }}
              >
                <Image
                  src={item.avatar}
                  alt=""
                  fill
                  sizes="(max-width: 880px) 85px, (max-width: 1440px) 10vw, 140px"
                  className="rounded-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        <div className="px-6 sm:px-10 lg:px-14">
          <figure
            role="group"
            aria-roledescription="slide"
            aria-label={`${activeIndex + 1} of ${testimonials.length}`}
            className="testimonial-card"
            onTouchStart={(event) => {
              touchStartRef.current = {
                x: event.touches[0].clientX,
                y: event.touches[0].clientY,
              };
            }}
            onTouchEnd={handleTouchEnd}
            onTouchCancel={() => {
              touchStartRef.current = null;
            }}
          >
            <figcaption className="testimonial-card-photo">
              <Image
                src={testimonial.avatar}
                alt=""
                fill
                sizes="(max-width: 767px) 90vw, (max-width: 1200px) 32vw, 360px"
                className="object-cover"
              />
              <div className="testimonial-card-photo-shade" aria-hidden="true" />
              <div className="testimonial-card-author">
                <p className="font-satoshi text-xl font-bold leading-tight text-white sm:text-2xl">
                  {testimonial.founder}
                </p>
            
              </div>
            </figcaption>

            <div className="testimonial-card-body">
              <div id="testimonial-quote" aria-live="polite" aria-atomic="true">
                <div key={testimonial.topic} className="testimonial-card-copy">
                  <div className="mb-5 flex gap-1 text-[#EE6B21]" aria-hidden="true">
                    {[0, 1, 2, 3, 4].map((star) => (
                      <svg key={star} viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                        <path d="m12 2.5 2.9 5.9 6.5.9-4.7 4.6 1.1 6.5-5.8-3.1-5.8 3.1 1.1-6.5L2.6 9.3l6.5-.9L12 2.5Z" />
                      </svg>
                    ))}
                  </div>
                 
                  <h3 className="mt-3 font-satoshi text-xl font-bold leading-tight text-[#131D35] sm:text-2xl">
                    {testimonial.headline}
                  </h3>
                  <blockquote className="mt-5 font-switzer text-lg font-medium leading-relaxed tracking-tight text-[#131D35] sm:text-[22px] sm:leading-[1.5]">
                    <p>&ldquo;{testimonial.quote}&rdquo;</p>
                  </blockquote>
                </div>
              </div>

              <div className="mt-auto flex items-center justify-between gap-4 pt-8">
                <p className="font-switzer text-sm tabular-nums text-neutral-400">
                  <span className="font-bold text-[#131D35]">
                    {String(activeIndex + 1).padStart(2, "0")}
                  </span>
                  <span className="mx-3">/</span>
                  {String(testimonials.length).padStart(2, "0")}
                </p>
                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => selectTestimonial(activeIndex - 1)}
                    aria-label="Previous testimonial"
                    aria-controls="testimonial-quote"
                    className="testimonial-arrow"
                  >
                    <ArrowIcon direction="previous" />
                  </button>
                  <button
                    type="button"
                    onClick={() => selectTestimonial(activeIndex + 1)}
                    aria-label="Next testimonial"
                    aria-controls="testimonial-quote"
                    className="testimonial-arrow"
                  >
                    <ArrowIcon direction="next" />
                  </button>
                </div>
              </div>
            </div>
          </figure>
        </div>
      </div>
    </section>
  );
}

function ArrowIcon({ direction }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={`h-5 w-5 ${direction === "previous" ? "rotate-180" : ""}`}
    >
      <path d="M4 12h16m-6-6 6 6-6 6" />
    </svg>
  );
}
