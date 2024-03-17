// import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import ClientOnly from "./components/ClientOnly";
import Modal from "./components/Modals/Modal";
import RegisterModal from "./components/Modals/RegisterModal";
import ToasterProvider from "./providers/ToasterProvider";
//const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Airbnb",
  description: "Airbnb clone",
};

const font = Nunito({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          {/* <Modal actionLabel="Submit" title="Hello World" isOpen/>              {/*isOpen is same as isOpen={true}*/ } 
          <ToasterProvider/>               {/*cannot use toaster here directly becoz it uses useEffect and needs atleast one client component wrapped around it?? */}
          <RegisterModal/>
          <Navbar/>
        </ClientOnly>
        {children}
      </body>
    </html>
  );
}
