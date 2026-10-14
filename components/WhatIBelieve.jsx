import Image from "next/image";

export default function WhatIBelieve() {
  return (
    <section className="relative w-full bg-[#FAF8F5] px-6 pb-16 sm:px-10 sm:pb-20 lg:px-14 lg:pb-28">
      <div className="mx-auto w-full max-w-[1240px]">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1fr] lg:items-start lg:gap-24">
          <div className="max-w-[560px]">
            <p className="font-switzer text-xs font-bold uppercase tracking-[0.18em] text-[#C06E42]">
              
            </p>
            <h2 className="  font-satoshi text-3xl font-black leading-[1.12] tracking-normal text-[#131D35] sm:text-4xl lg:text-[44px]">
             What I Believe?
            </h2>

          
          </div>

          <p className="max-w-[590px]  font-switzer text-sm leading-relaxed text-neutral-600 sm:text-lg lg:ml-auto ">
            I believe a founder does not need more noise. They need clear
            thinking, practical systems, and the courage to keep improving the
            business one decision at a time.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.35fr_1fr] lg:gap-8">
          <div className="group relative min-h-[360px] overflow-hidden rounded-lg bg-[#f4dcce] shadow-[0_24px_60px_rgba(19,29,53,0.08)] sm:min-h-[440px] lg:min-h-[500px]">
            <div
              className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_18%,rgba(255,255,255,0.92),rgba(244,220,206,0.76)_42%,rgba(192,110,66,0.34)_100%)]"
              aria-hidden="true"
            />
            <Image
              src="/images/rajiv-talreja.png"
              alt="Rajiv Talreja seated with a laptop"
              fill
              sizes="(max-width: 1024px) 100vw, 58vw"
              className="object-contain object-bottom transition-transform duration-700 group-hover:scale-[1.025]"
            />
            <div
              className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#131D35]/92 via-[#131D35]/52 to-transparent"
              aria-hidden="true"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white sm:p-8 lg:p-9">
              <h3 className="font-satoshi text-3xl font-black leading-tight">
                My Story
              </h3>
              <p className="mt-3 max-w-[620px] font-switzer text-sm leading-relaxed text-white/82 sm:text-base">
                I work with founders who carry the pressure quietly and still
                choose to build. My role is to help them turn that effort into
                systems, clarity, and lasting growth.
              </p>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
            <article className="min-h-[220px] rounded-lg bg-[#F4DCCE] p-7 text-[#131D35] sm:p-8 lg:min-h-0 lg:p-10">
              <div className="flex h-full flex-col justify-end">
                <p className="font-satoshi text-2xl font-black">My Mission</p>
                <p className="mt-4 font-switzer text-sm leading-relaxed text-[#4F4E4E] sm:text-base">
                  To make business growth easier to understand, easier to act
                  on, and easier to repeat for MSME founders.
                </p>
              </div>
            </article>

            <article className="min-h-[220px] rounded-lg bg-[#131D35] p-7 text-white shadow-[0_24px_60px_rgba(19,29,53,0.12)] sm:p-8 lg:min-h-0 lg:p-10">
              <div className="flex h-full flex-col justify-end">
                <p className="font-satoshi text-2xl font-black">My Vision</p>
                <p className="mt-4 font-switzer text-sm leading-relaxed text-white/74 sm:text-base">
                  To help build a generation of founder-led businesses that are
                  profitable, peaceful, and prepared for the future.
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
