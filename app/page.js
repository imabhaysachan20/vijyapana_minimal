
import Hero from "@/components/hero";
import ImageSlideShow from "@/components/ImageSlideShow";
import Imgtext from "@/components/Imgtext";
import Products from "@/components/products";
import Services from "@/components/Services";
import Image from "next/image";
export default function Home() {
  return (<>
    
    <Hero/>
<Products/>
   <Imgtext text={"We understand your needs ."}/>
    <Services/>
    <ImageSlideShow/>
    </>
  );
}
