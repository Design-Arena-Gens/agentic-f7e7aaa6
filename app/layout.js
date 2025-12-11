import "./globals.css";
import { Noto_Sans_Devanagari } from "next/font/google";

const notoDev = Noto_Sans_Devanagari({
  subsets: ["devanagari"],
  weight: ["400", "500", "700"]
});

export const metadata = {
  title: "Rich Dad Poor Dad सारांश",
  description: "रिच डैड पुअर डैड पुस्तक का संक्षिप्त हिन्दी सारांश"
};

export default function RootLayout({ children }) {
  return (
    <html lang="hi">
      <body className={notoDev.className}>{children}</body>
    </html>
  );
}
