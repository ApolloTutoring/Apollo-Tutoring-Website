import "./globals.css";

export const metadata = {
  title: "Apollo Tutoring Canada",
  description: "Get free tutoring for high-school courses such as math, chemistry and physics.",
  author: "Bhavya and Sajan"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light" className=" scroll-smooth">
      <head>
        <link href="https://cdn.jsdelivr.net/npm/daisyui@4.12.10/dist/full.min.css" rel="stylesheet" type="text/css" />
        <script src="https://cdn.tailwindcss.com"></script>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Oswald:wght@200..700&display=swap" rel="stylesheet"/>
      </head>

      <body className=" scroll-smooth">{children}</body>
    </html>
  );
}
