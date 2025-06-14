import "@/node_modules/react-modal-video/css/modal-video.css";
import "../public/assets/css/eventflow.css";
import "swiper/css";
// import "swiper/css/navigation"
import "swiper/css/pagination";
// import 'owl.carousel'
import "swiper/css/free-mode";
import { dM_Sans, inter } from "@/lib/font";
export const metadata = {
  title: "Markhor Events",
  description: "Markhor Events is a premier event management company specializing in creating unforgettable experiences for weddings, corporate events, and private parties. Our team of experts is dedicated to bringing your vision to life with creativity and precision.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${dM_Sans.variable} ${inter.variable}`}>
      <body className="body-bg-color-1">{children}</body>
    </html>
  );
}
