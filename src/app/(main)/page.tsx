import Header from "../../../components/main/Header";
import CoverImage from "../../../components/ui/coverImage";

import Hero from "../../../components/main/Hero";
import Disclaimer from "../../../components/main/disclaimer";
import ProductSection from "../../../components/main/ProductSection";
import Testimonial from "../../../components/main/Testimonial";

export default function Home() {
  return (
    <div>
      <Header />
      <CoverImage />
      <Hero />
      <ProductSection />
      <Testimonial />
      <Disclaimer />
    </div>
  );
}
