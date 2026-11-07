
import "./globals.css";

export const metadata = {
  title: "Kochuthressia Payankan | Portfolio",
  description:
    "A little world of technology, creativity, product thinking, and ideas by Kochuthressia Payankan.",
  keywords: [
    "Kochuthressia Payankan",
    "Computer Science",
    "Cloud Computing",
    "Product Management",
    "Portfolio",
  ],
  authors: [{ name: "Kochuthressia Payankan" }],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
