import "./globals.css";
import { StoreProvider } from "@/components/StoreProvider";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export const metadata = {
  title: "نقره‌یار | درخشش ماندگار",
  description: "مجموعه‌ای از زیورآلات نقره با طراحی ظریف و ماندگار.",
  metadataBase: new URL("https://noghreayar.com")
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <StoreProvider>
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
        </StoreProvider>
      </body>
    </html>
  );
}