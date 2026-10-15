import Image from "next/image";

const programs = [
  {
    title: "The Business P.A.C.E Program",
    description:
      "Learn the strategies to build a profitable & scalable business.",
    image: "/images/programs/business-pace.webp",
    cta: "Show Me How to Scale",
    href: "https://rajivtalreja.com/program/the-business-pace-program/",
  },
  {
    title: "WOW Workplaces",
    description:
      "Build a high-performing and WOW workplace for your team.",
    image: "/images/programs/wow-workplaces.webp",
    cta: "I’m ready for the next step!",
    href: "https://rajivtalreja.com/program/",
  },
  {
    title: "Mastermind for Business Acceleration",
    description: "Hands-on support to fast-track your business growth",
    image: "/images/programs/mastermind.png",
    cta: "Help Me Grow with Systems",
    href: "https://rajivtalreja.com/program/mastermind-for-business-acceleration/",
  },
  {
    title: "Business Growth Coaching",
    description:
      "In just 40 minutes, discover a proven 3-step framework that’s helped thousands scale their businesses.",
    image: "/images/programs/business-growth-coaching.png",
    cta: "Transform My Business Today",
    href: "https://qlbusinesscoaching.com/mba-optin",
  },
];

export default function WaysToWorkTogether() {
  return (
    <section
      id="ways-to-work-together"
      aria-labelledby="ways-to-work-together-heading"
      className="w-full bg-[#FAF8F5] px-6 py-16 sm:px-10 sm:py-20 lg:px-14 lg:py-24"
    >
      <div className="mx-auto w-full max-w-[1240px]">
        <div className="grid gap-6 lg:grid-cols-[0.92fr_1fr]   lg:gap-24">
          <h2
            id="ways-to-work-together-heading"
            className="max-w-[560px] font-satoshi text-3xl font-black leading-[1.12] text-[#131D35] sm:text-4xl lg:text-[44px]"
          >
            Ways to work together
          </h2>
          <p className="w-full max-w-[540px] font-switzer text-base leading-relaxed text-neutral-600 sm:text-lg lg:ml-auto">
            Every stage of business calls for a different kind of support. From
            building stronger systems and developing your team to planning your
            next phase of growth.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:mt-12 lg:gap-8">
          {programs.map((program) => (
            <article
              key={program.title}
              className="flex min-w-0 flex-col gap-6 rounded-2xl border border-[#131D35]/6 bg-white p-6 shadow-[0_12px_40px_rgba(19,29,53,0.04)] sm:flex-row sm:p-7 md:flex-col xl:flex-row xl:gap-7 xl:p-8"
            >
              <div className="relative aspect-[193/185] w-[144px] shrink-0 overflow-hidden rounded-xl bg-[#FAF8F5] xl:w-[156px]">
                <Image
                  src={program.image}
                  alt=""
                  fill
                  sizes="(min-width: 1280px) 156px, 144px"
                  className="object-contain"
                />
              </div>

              <div className="flex min-w-0 flex-1 flex-col">
                <h3 className="font-satoshi text-2xl font-black leading-tight text-[#131D35]">
                  {program.title}
                </h3>
                <p className="mb-7 mt-3 font-switzer text-base leading-relaxed text-neutral-600">
                  {program.description}
                </p>
                <div className="mt-auto">
                  <a
                    href={program.href}
                    className="group inline-flex min-h-12 max-w-full items-center justify-center gap-3 rounded-full bg-[#131D35] px-5 py-3 text-left font-switzer text-sm font-bold text-white transition-colors hover:bg-[#A35B34] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#A35B34] motion-reduce:transition-none"
                  >
                    <span>{program.cta}</span>
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                      className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1 motion-reduce:transform-none motion-reduce:transition-none"
                    >
                      <path d="M4 12h16m-6-6 6 6-6 6" />
                    </svg>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
