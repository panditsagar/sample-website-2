import Image from "next/image";

const socialLinks = [
  {
    name: "Instagram",
    count: "800K+",
    href: "https://www.instagram.com/rajivtalreja/",
    icon: "/images/footer/instagram.svg",
  },
  {
    name: "Facebook",
    count: "350K+",
    href: "https://www.facebook.com/rajiv.talreja/",
    icon: "/images/footer/facebook.svg",
  },
  {
    name: "YouTube",
    count: "300K+",
    href: "https://www.youtube.com/channel/UCYEtmpGBd3jEO1A8sJ4OEMg",
    icon: "/images/footer/youtube.svg",
  },
  {
    name: "X",
    count: "21.5K+",
    href: "https://x.com/rajivtalreja",
    icon: "/images/footer/x.svg",
  },
  {
    name: "LinkedIn",
    count: "88K+",
    href: "https://www.linkedin.com/in/rajivtalreja",
    icon: "/images/footer/linkedin.svg",
  },
];

const linkGroups = [
  {
    title: "Explore",
    links: [
      { label: "Home", href: "https://rajivtalreja.com/" },
      { label: "About", href: "https://rajivtalreja.com/about/" },
      { label: "Program", href: "https://rajivtalreja.com/program/" },
      { label: "Product", href: "https://rajivtalreja.com/products/" },
      { label: "Blogs", href: "https://rajivtalreja.com/blog/" },
    ],
  },
  {
    title: "Information",
    links: [
      {
        label: "Terms & Conditions",
        href: "https://rajivtalreja.com/terms-and-conditions/",
      },
      { label: "Contact Us", href: "https://rajivtalreja.com/contact-us/" },
      { label: "Sitemap", href: "https://rajivtalreja.com/sitemap" },
    ],
  },
  {
    title: "Programs",
    links: [
      {
        label: "P.A.C.E",
        href: "https://rajivtalreja.com/program/the-business-pace-program/",
      },
      {
        label: "M.B.A",
        href: "https://rajivtalreja.com/program/mastermind-for-business-acceleration/",
      },
      { label: "B.G.C", href: "https://qlbusinesscoaching.com/mba-optin" },
    ],
  },
];

const focusStyles =
  "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#A35B34]";

export default function Footer() {
  return (
    <footer className="w-full border-t border-[#131D35]/10 bg-[#F3EBDD] px-6 text-[#131D35] sm:px-10 lg:px-14">
      <div className="mx-auto w-full max-w-[1240px]">
        <nav
          aria-label="Social media profiles"
          className="border-b border-[#131D35]/10 py-6 sm:py-7"
        >
          <ul className="grid grid-cols-2 gap-x-3 gap-y-4 sm:grid-cols-3 lg:grid-cols-5 lg:gap-0">
            {socialLinks.map((social) => (
              <li
                key={social.name}
                className="last:col-span-2 sm:last:col-span-1 lg:border-r lg:border-[#131D35]/10 lg:last:border-r-0"
              >
                <a
                  href={social.href}
                  className={`group flex items-center justify-center gap-3 rounded-lg py-2 transition-colors hover:bg-[#131D35]/5 motion-reduce:transition-none ${focusStyles}`}
                >
                  <Image
                    src={social.icon}
                    alt=""
                    width={64}
                    height={64}
                    className="h-12 w-12 shrink-0"
                  />
                  <span className="flex flex-col items-start">
                    <strong className="font-satoshi text-xl font-black leading-tight text-[#131D35]">
                      {social.count}
                    </strong>
                    <span className="mt-1 font-switzer text-xs text-neutral-600">
                      {social.name}
                    </span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="grid gap-12 py-12 sm:py-14 lg:grid-cols-[0.85fr_1.3fr] lg:gap-20 lg:py-16">
          <div className="max-w-[360px]">
            <a
              href="https://rajivtalreja.com/"
              aria-label="Rajiv Talreja home"
              className={`inline-block rounded-sm ${focusStyles}`}
            >
              <Image
                src="/images/footer/rajiv-talreja.png"
                alt="Rajiv Talreja"
                width={136}
                height={62}
                className="h-auto w-[160px]"
              />
            </a>
            <p className="mt-6 font-switzer text-sm leading-[1.8] text-neutral-600">
              <strong className="font-semibold text-[#131D35]">
                Quantum Leap Learning Solutions Pvt Ltd
              </strong>
              {" - Building for India's MSME ecosystem since 2008."}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-8 gap-y-9 sm:grid-cols-[0.8fr_1.4fr_0.8fr] sm:gap-x-10">
            {linkGroups.map((group) => (
              <nav key={group.title} aria-label={`Footer ${group.title.toLowerCase()}`}>
                <h2 className="font-switzer text-xs font-bold uppercase tracking-[0.16em] text-[#A35B34]">
                  {group.title}
                </h2>
                <ul className="mt-5 space-y-1">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className={`inline-block rounded-sm py-1.5 font-switzer text-sm leading-relaxed text-neutral-600 transition-colors hover:text-[#A35B34] motion-reduce:transition-none ${focusStyles}`}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>
        <div className="flex flex-col-reverse gap-5 border-t border-[#131D35]/10 py-6 sm:flex-row sm:items-center sm:justify-between sm:gap-8">
          <p className="font-switzer text-xs leading-relaxed text-neutral-600 sm:text-sm">
            © Copyright Quantum Leap Learning Solutions Pvt Ltd
          </p>
          <a
            href="#top"
            aria-label="Back to top"
            className={`group inline-flex w-fit items-center gap-4 self-end rounded-full font-switzer text-xs font-medium text-neutral-600 transition-colors hover:text-[#131D35] motion-reduce:transition-none sm:shrink-0 sm:self-auto ${focusStyles}`}
          >
            <span>Back to top</span>
            <Image
              src="/images/footer/back-to-top.svg"
              alt=""
              width={72}
              height={46}
              className="transition-transform group-hover:-translate-y-1 motion-reduce:transform-none motion-reduce:transition-none"
            />
          </a>
        </div>

      </div>
    </footer>
  );
}
