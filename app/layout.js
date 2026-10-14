import "./globals.css";

export const metadata = {
  title: "Rajiv Talreja | Asia's Leading Business Coach for MSMEs",
  description:
    "9 crores MSMEs build something real every day. That is the only story that matters. Join the Business P.A.C.E Program with Rajiv Talreja.",
  icons: {
    icon: "/images/logo-dark.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased scroll-smooth">
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@300,301,400,401,500,501,700,701,900,901&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://api.fontshare.com/v2/css?f[]=switzer@300,400,500,600,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-[#FAF8F5] text-neutral-900 selection:bg-orange-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
