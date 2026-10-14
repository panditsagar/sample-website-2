"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

export default function Hero() {
  return (
    <section className="relative isolate w-full lg:h-[calc(100vh-80px)] lg:min-h-[640px] lg:max-h-[960px] overflow-hidden flex flex-col justify-between pt-4 pb-8 lg:p-0">
      {/* ================= BACKGROUND GRADIENT (Sampled from Reference Image) ================= */}
      <div
        className="absolute inset-0 pointer-events-none -z-10"
        style={{
          background:
            "radial-gradient(ellipse 90% 65% at 50% 100%, #f4dcce 0%, #faece2 38%, #fdfbf8 75%)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-x-0 bottom-0 h-[72%] pointer-events-none -z-10"
        style={{
          background:
            "linear-gradient(to top, rgba(245, 196, 168, 0.72) 0%, rgba(249, 222, 207, 0.48) 36%, rgba(252, 243, 237, 0.22) 62%, rgba(255, 255, 255, 0) 100%)",
        }}
        aria-hidden="true"
      />

      {/* ================= WATERMARK "TALREJA" (Matches "RANJITH" in reference) ================= */}
      <div
        className="absolute top-[10%] sm:top-[10%] lg:top-[10%] left-1/2 -translate-x-1/2 w-full select-none pointer-events-none text-center -z-0 px-2 overflow-hidden"
        aria-hidden="true"
      >
        <span
          className="text-[16vw] sm:text-[15vw] lg:text-[132px] xl:text-[166px] 2xl:text-[190px] font-black uppercase tracking-[0.06em] text-transparent bg-clip-text font-satoshi block leading-none"
          style={{
            backgroundImage:
              "linear-gradient(to bottom, rgba(203, 201, 199, 0.92) 0%, rgba(203, 201, 199, 0.82) 58%, rgba(232, 193, 171, 0.42) 100%)",
          }}
        >
          TALREJA
        </span>
      </div>

      {/* ================= DESKTOP LAYOUT (CANVAS COORDINATES MATCHING REFERENCE IMAGE) ================= */}
      <div className="hidden lg:block relative w-full h-full max-w-[1440px] mx-auto px-8 xl:px-14">
        {/* CENTER: Seated Rajiv in Armchair (Matches 77.6% height in reference) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}
          className="absolute bottom-[1%] xl:bottom-[1%] left-[53%] -translate-x-1/2 w-[52vw] max-w-[760px] min-w-[640px] max-h-[calc(100vh-160px)] aspect-square z-10 flex flex-col items-center justify-end"
        >
          <div className="relative w-full h-full">
            <Image
              src="/images/rajiv-talreja-hero.png"
              alt="Rajiv Talreja seated in an armchair"
              fill
              priority
              sizes="(max-width: 1440px) 52vw, 760px"
              className="object-contain object-bottom drop-shadow-[0_24px_45px_rgba(0,0,0,0.12)]"
            />
            {/* Ambient Ground Shadow under Chair Legs */}
            <div
              className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-[82%] h-7 bg-neutral-950/20 rounded-[100%] blur-md pointer-events-none"
              aria-hidden="true"
            />
          </div>
        </motion.div>

        {/* LEFT-MIDDLE: Badge + Main Headline (Starts at ~50% from top) */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="absolute left-8 xl:left-14 2xl:left-16 top-[46%] xl:top-[47%] z-20 max-w-[360px] xl:max-w-[420px]"
        >
          {/* Heading */}
          <h1 className="font-satoshi text-3xl uppercase lg:text-[40px] xl:text-[46px] font-extrabold text-[#131D35] tracking-[-0.03em] leading-[1.08]">
            9 Crores MSMEs <br />
            Build Something <br />
            Real Every Day
          </h1>

          <p className="mt-3 text-base xl:text-2xl font-bold text-neutral-500 font-satoshi">
            That Is the Only Story That Matters.
          </p>
        </motion.div>

        {/* LEFT-BOTTOM: Social Proof Avatars (Aligned with feet at ~80% from top) */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          className="absolute left-8 xl:left-14 2xl:left-16 bottom-[4%] xl:bottom-[5%] z-20 flex items-center gap-3.5"
        >
          <div className="flex -space-x-2.5 overflow-hidden p-0.5">
            <div className="relative w-10 h-10 rounded-full ring-2 ring-white shadow-sm overflow-hidden">
              <Image
                src="/images/avatars/avatar-1.jpg"
                alt="Founder"
                fill
                sizes="40px"
                className="object-cover"
              />
            </div>
            <div className="relative w-10 h-10 rounded-full ring-2 ring-white shadow-sm overflow-hidden">
              <Image
                src="/images/avatars/avatar-2.jpg"
                alt="Founder"
                fill
                sizes="40px"
                className="object-cover"
              />
            </div>
            <div className="relative w-10 h-10 rounded-full ring-2 ring-white shadow-sm overflow-hidden">
              <Image
                src="/images/avatars/avatar-3.jpg"
                alt="Founder"
                fill
                sizes="40px"
                className="object-cover"
              />
            </div>
          </div>
          <p className="text-xs xl:text-sm font-medium text-neutral-600 leading-tight">
            Trusted by{" "}
            <span className="font-semibold text-neutral-900">10,000+</span>
            <br />
            forward-thinking founders.
          </p>
        </motion.div>

        {/* RIGHT-LOWER: Description Text & CTA Button (Aligned with knees/seat) */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="absolute right-8 xl:right-14 2xl:right-16 bottom-[5%] xl:bottom-[6%] z-20 max-w-[290px] xl:max-w-[340px] space-y-5"
        >
          <div className="space-y-3">
            <p className="font-switzer text-sm xl:text-[16px] text-neutral-500 leading-relaxed">
              Most of what running a real business actually feels like never
              makes it into a conversation. Not with the bank. Not with the
              team. Sometimes not even at home.
            </p>
            <p className="font-switzer text-sm xl:text-[16px] font-semibold text-[#131D35] ">
              This is built for that founder. The one who keeps going anyway.
            </p>
          </div>

          <div>
            <Link
              href="https://rajivtalreja.com/program/the-business-pace-program/"
              className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-white text-neutral-900 font-semibold text-sm xl:text-base   shadow-[0_10px_25px_rgba(0,0,0,0.08)] hover:shadow-[0_14px_35px_rgba(0,0,0,0.14)]   hover:bg-[#131D35] hover:text-white transition-all duration-700"
            >
              <span>Rise With Us</span>
              <svg
                className="w-4 h-4 stroke-[2.5] transform transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* ================= MOBILE / TABLET LAYOUT (< lg) ================= */}
      <div className="block lg:hidden px-6 sm:px-10 max-w-xl mx-auto w-full z-20 space-y-6">
        {/* Top: Status & Headline */}
        <div>
          <h1 className="font-satoshi text-3xl sm:text-4xl font-extrabold text-[#131D35] tracking-tight leading-[1.1]">
            9 Crores MSMEs <br />
            Build Something Real Every Day
          </h1>
          <p className="mt-2 text-base font-bold text-neutral-500 font-satoshi">
            That Is the Only Story That Matters.
          </p>
        </div>

        {/* Center: Rajiv Armchair Image */}
        <div className="relative w-full max-w-[340px] sm:max-w-[400px] mx-auto aspect-[3/4]">
          <Image
            src="/images/rajiv-talreja-hero.png"
            alt="Rajiv Talreja seated in an armchair"
            fill
            priority
            sizes="360px"
            className="object-contain object-bottom drop-shadow-lg"
          />
          <div className="w-[80%] h-5 bg-neutral-950/20 rounded-[100%] blur-md mx-auto -mt-3" />
        </div>

        {/* Story copy & CTA button */}
        <div className="space-y-4">
          <p className="font-switzer text-sm sm:text-base text-neutral-600 leading-relaxed">
            Most of what running a real business actually feels like never makes
            it into a conversation. Not with the bank. Not with the team.
            Sometimes not even at home.
          </p>
          <p className="font-switzer text-sm sm:text-base font-semibold text-neutral-900 leading-relaxed">
            This is built for that founder. The one who keeps going anyway.
          </p>

          <div className="pt-2">
            <Link
              href="https://rajivtalreja.com/program/the-business-pace-program/"
              className="inline-flex items-center justify-center gap-2.5 w-full py-3.5 rounded-full bg-white text-neutral-900 font-semibold text-sm border border-neutral-200 shadow-md"
            >
              <span>Rise With Us</span>
              <svg
                className="w-4 h-4 stroke-[2.5]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>
            </Link>
          </div>
        </div>

        {/* Social proof */}
        <div className="flex items-center gap-3 pt-2">
          <div className="flex -space-x-2">
            <div className="relative w-8 h-8 rounded-full ring-2 ring-white overflow-hidden">
              <Image
                src="/images/avatars/avatar-1.jpg"
                alt="Founder"
                fill
                sizes="32px"
                className="object-cover"
              />
            </div>
            <div className="relative w-8 h-8 rounded-full ring-2 ring-white overflow-hidden">
              <Image
                src="/images/avatars/avatar-2.jpg"
                alt="Founder"
                fill
                sizes="32px"
                className="object-cover"
              />
            </div>
            <div className="relative w-8 h-8 rounded-full ring-2 ring-white overflow-hidden">
              <Image
                src="/images/avatars/avatar-3.jpg"
                alt="Founder"
                fill
                sizes="32px"
                className="object-cover"
              />
            </div>
          </div>
          <p className="text-xs text-neutral-600">
            Trusted by{" "}
            <span className="font-semibold text-neutral-900">10,000+</span>{" "}
            forward-thinking founders.
          </p>
        </div>
      </div>
    </section>
  );
}
