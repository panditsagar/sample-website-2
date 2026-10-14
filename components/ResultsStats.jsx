const stats = [
  {
    value: "12L+",
    label: "Business  impacted",
    description: "Founders reached through practical business education.",
    className: "bg-[#131D35] text-white",
    valueClassName: "text-[#F6A723]",
    descriptionClassName: "text-white/72",
  },
  {
    value: "40K+",
    label: "MSMEs Empowered",
    description: "Through The Business P.A.C.E Program.",
    className: "bg-[#F4DCCE] text-[#131D35]",
    valueClassName: "text-[#131D35]",
    descriptionClassName: "text-neutral-600",
  },
  {
    value: "20+",
    label: "Years of transformation",
    description: "Helping MSME businesses grow with clarity.",
    className: "bg-white text-[#131D35]",
    valueClassName: "text-[#C06E42]",
    descriptionClassName: "text-neutral-500",
  },
  {
    value: "7+",
    label: "Countries trained across",
    description: "With founder-first business systems.",
    className: "bg-[#C06E42] text-white",
    valueClassName: "text-white",
    descriptionClassName: "text-white/74",
  },
];

export default function ResultsStats() {
  return (
    <section className="w-full px-6 pb-16 sm:px-10 sm:py-20 lg:px-14 lg:pb-28">
      <div className="mx-auto w-full max-w-[1240px]">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <h2 className="font-satoshi text-3xl font-black leading-tight tracking-normal text-[#131D35] sm:text-4xl lg:text-[44px]">
              We only deliver results.
            </h2>
            <p className="mt-4 max-w-[650px] font-switzer text-base leading-relaxed text-neutral-500 sm:text-lg">
              Real numbers from real MSME businesses. Built through training,
              facilitation, implementation, and measurable founder progress.
            </p>
          </div>

          <div className="flex lg:pt-3">
            <a
              href="https://rajivtalreja.com/contact/"
              className="inline-flex items-center justify-center rounded-full bg-[#131D35] px-10 py-3.5 font-switzer text-sm font-bold text-white shadow-[0_12px_26px_rgba(19,29,53,0.18)] transition-all duration-500 hover:bg-[#C06E42]"
            >
              Let&apos;s Connect
            </a>
          </div>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className={`min-h-[260px] rounded-lg p-7 shadow-[0_22px_54px_rgba(19,29,53,0.10)] sm:p-8 ${stat.className}`}
            >
              <p className={`font-satoshi text-[48px] font-black leading-none tracking-normal sm:text-[56px] lg:text-[58px] ${stat.valueClassName}`}>
                {stat.value}
              </p>
              <h3 className="mt-5 font-satoshi text-lg font-black leading-snug">
                {stat.label}
              </h3>
              <p className={`mt-2 max-w-[220px] font-switzer text-md font-medium leading-relaxed ${stat.descriptionClassName}`}>
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
