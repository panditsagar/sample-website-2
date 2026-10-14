import Image from "next/image";

const features = [
  {
    title: "Real Business Training",
    description:
      "Built from MSME reality, not startup theory. Every programme begins with the founder's industry, stage, and exact growth gap.",
    icon: "target",
    tone: "orange",
  },
  {
    title: "Guided Business Facilitation",
    description:
      "70+ facilitators work alongside founders, asking the right questions and helping them move through real business challenges.",
    icon: "mentor",
    tone: "cream",
  },
  {
    title: "On-Ground Implementation Support",
    description:
      "We work with your team on the ground until what we build together is owned by your people, not dependent on ours.",
    icon: "network",
    tone: "orange",
  },
  {
    title: "Measurable Growth Rhythm",
    description:
      "Simple reviews, scoreboards, and accountability keep progress visible long after the session is over.",
    icon: "growth",
    tone: "cream",
  },
];

function FeatureIcon({ type }) {
  if (type === "target") {
    return (
      <svg viewBox="0 0 24 24" className="h-8 w-8" aria-hidden="true">
        <path
          fill="currentColor"
          d="M12 2a10 10 0 1 0 10 10h-2.1a7.9 7.9 0 1 1-7.9-7.9V2Zm7.2.4v3.1h-3.1l-5.4 5.4a1.7 1.7 0 1 0 2.4 2.4l5.4-5.4v-3h3.1L24 2.4h-4.8ZM12 7a5 5 0 1 0 5 5h-2.2a2.8 2.8 0 1 1-2.8-2.8V7Z"
        />
      </svg>
    );
  }

  if (type === "growth") {
    return (
      <svg viewBox="0 0 24 24" className="h-8 w-8" aria-hidden="true">
        <path
          fill="currentColor"
          d="M4 18.5h16v2H4v-2Zm1.3-2.2 4.1-4.1 3.2 3.2 6.4-6.5v3.2h2V5.5h-6.6v2h3.2l-5 5-3.2-3.2-5.5 5.6 1.4 1.4Z"
        />
        <path
          fill="currentColor"
          d="M7.2 9.8a2.3 2.3 0 1 0 0-4.6 2.3 2.3 0 0 0 0 4.6Zm-3.4 3.8h6.8v-1.1c0-1.7-1.5-3-3.4-3s-3.4 1.3-3.4 3v1.1Z"
        />
      </svg>
    );
  }

  if (type === "network") {
    return (
      <svg viewBox="0 0 24 24" className="h-8 w-8" aria-hidden="true">
        <path
          fill="currentColor"
          d="M12 3.5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm-7 9a2.7 2.7 0 1 1 0 5.4 2.7 2.7 0 0 1 0-5.4Zm14 0a2.7 2.7 0 1 1 0 5.4 2.7 2.7 0 0 1 0-5.4ZM8.4 21H1.7v-1.2c0-1.4 1.4-2.6 3.3-2.6s3.4 1.2 3.4 2.6V21Zm13.9 0h-6.7v-1.2c0-1.4 1.5-2.6 3.4-2.6s3.3 1.2 3.3 2.6V21Zm-6.6-9.5v2.2l-3.7-2.1-3.7 2.1v-2.2l2.7-1.6v-1h2v1l2.7 1.6Z"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className="h-8 w-8" aria-hidden="true">
      <path
        fill="currentColor"
        d="M7.5 4.3a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm9 1.2a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3.1 17.8c0-3.4 2-5.4 4.4-5.4s4.4 2 4.4 5.4V20H3.1v-2.2Zm10.1.2c0-1.9-.5-3.4-1.4-4.5.9-.8 2-1.2 3.2-1.2 2.7 0 4.9 2.1 4.9 5.6V20h-6.7v-2Z"
      />
      <path
        fill="currentColor"
        d="M19.5 5.2h2.8v2h-2.8v-2Zm0 3.4h2.8v2h-2.8v-2Z"
      />
    </svg>
  );
}

function FeatureCard({ feature }) {
  const isNavy = feature.tone === "cream";

  return (
    <article
      className={`rounded-lg p-6 shadow-[0_18px_44px_rgba(19,29,53,0.08)] backdrop-blur-sm sm:p-7 lg:p-8 ${
        isNavy
          ? "bg-[#131D35] text-white"
          : "bg-white/85 text-[#131D35]"
      }`}
    >
      <div
        className={`flex h-[78px] w-[78px] items-center justify-center rounded-full ${
          isNavy ? "bg-[#FAF8F5] text-[#131D35]" : "bg-[#F6A723] text-[#131D35]"
        }`}
      >
        <FeatureIcon type={feature.icon} />
      </div>
      <h3 className="mt-7 font-satoshi text-2xl font-black leading-tight tracking-normal">
        {feature.title}
      </h3>
      <p
        className={`mt-4 font-switzer text-sm font-medium leading-relaxed sm:text-[15px] ${
          isNavy ? "text-white/78" : "text-neutral-600"
        }`}
      >
        {feature.description}
      </p>
    </article>
  );
}

export default function FounderAdvantages() {
  return (
    <section className="w-full bg-[#FAF8F5] px-6 py-16 sm:px-10 sm:py-20 lg:px-14 lg:py-28">
      <div className="relative mx-auto w-full max-w-[1240px] overflow-hidden rounded-lg bg-[linear-gradient(135deg,#FFFDFC_0%,#FAF8F5_42%,#F4DCCE_100%)] px-6 py-10 shadow-[0_26px_70px_rgba(19,29,53,0.09)] sm:px-8 sm:py-12 lg:px-10 lg:py-14">
      <div
        className="absolute inset-0 opacity-[0.22]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, rgba(19,29,53,0.08) 0 1px, transparent 1px 24px), repeating-linear-gradient(45deg, rgba(192,110,66,0.12) 0 1px, transparent 1px 34px)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10">
        <div className="grid gap-6 lg:grid-cols-[0.92fr_1fr] lg:items-start lg:gap-24">
          <div>
          
            <h2 className="mt-4 max-w-[620px] font-satoshi text-3xl font-black leading-[1.1] tracking-normal text-[#131D35] sm:text-4xl lg:text-[48px]">
             What We Have Built ?
            </h2>
          </div>

          <p className="max-w-[600px] font-switzer text-base leading-relaxed text-neutral-600 sm:text-lg lg:ml-auto lg:pt-10">
            The journey needs more than motivation. It needs experienced
            guidance, simple systems, measurable progress, and a community that
            understands what it takes to keep building.
          </p>
        </div>

        <div className="relative mt-12 lg:min-h-[640px]">
          <div className="relative z-10 grid gap-6 lg:grid-cols-[1fr_0.95fr_1fr] lg:items-center lg:gap-8">
            <div className="grid gap-6">
              <FeatureCard feature={features[0]} />
              <FeatureCard feature={features[1]} />
            </div>

            <div className="relative order-first mx-auto h-[390px] w-full max-w-[360px] lg:order-none lg:h-[560px] lg:max-w-none">
              <div
                className="absolute inset-x-4 bottom-8 top-16 rounded-full bg-[#F6A723]/24 blur-3xl"
                aria-hidden="true"
              />
              <Image
                src="/images/image.png"
                alt="Rajiv Talreja seated in an armchair"
                fill
                sizes="(max-width: 1024px) 360px, 31vw"
                className="object-contain object-bottom drop-shadow-[0_30px_42px_rgba(0,0,0,0.22)]"
              />
            </div>

            <div className="grid gap-6">
              <FeatureCard feature={features[2]} />
              <FeatureCard feature={features[3]} />
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}
