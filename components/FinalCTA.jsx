export default function FinalCTA() {
  return (
    <section
      id="rise-with-us"
      aria-labelledby="final-cta-heading"
      className="relative isolate mx-auto mb-16 w-[calc(100%-48px)] max-w-[1100px] overflow-hidden rounded-[28px] bg-[#131D35] px-6 py-16 sm:mb-20 sm:w-[calc(100%-80px)] sm:px-10 sm:py-20 lg:w-[calc(100%-112px)] lg:px-14"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse at 50% 120%, rgba(192,110,66,0.28), transparent 65%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-52 -top-52 -z-10 h-[420px] w-[420px] rounded-full border border-white/8 sm:-left-36"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-64 -right-52 -z-10 h-[480px] w-[480px] rounded-full border border-white/8 sm:-right-36"
      />

      <div className="mx-auto flex max-w-[1240px] flex-col items-center text-center">
        <h2
          id="final-cta-heading"
          className="max-w-[900px] text-balance font-satoshi text-3xl font-black leading-[1.12] tracking-tight text-white sm:text-[46px] "
        >
          The next decade belongs to MSME founders
          <br className="hidden sm:block" />{" "}
          <span className="text-[#F6A723]">who build together.</span>
        </h2>

        <a
          href="https://rajivtalreja.com/#"
          className="group mt-9 inline-flex min-h-14 items-center justify-center gap-5 rounded-full bg-[#F6A723] px-9 py-4 font-switzer text-base font-bold text-[#131D35] transition-colors hover:bg-[#FFD080] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F6A723] motion-reduce:transition-none sm:mt-10 sm:px-10"
        >
          <span>Rise With Us</span>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            className="h-5 w-5 transition-transform group-hover:translate-x-1 motion-reduce:transform-none motion-reduce:transition-none"
          >
            <path d="M4 12h16m-6-6 6 6-6 6" />
          </svg>
        </a>

        <p className="mt-6 max-w-[620px] font-switzer text-sm italic leading-relaxed text-white/70 sm:text-base">
          No pressure. No pitch. Just a real conversation about where your
          business is and where it could go.
        </p>
      </div>
    </section>
  );
}
